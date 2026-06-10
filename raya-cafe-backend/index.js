const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mysql = require('mysql2/promise');

const prisma = new PrismaClient();
const app = express(); 

app.use(cors()); 
app.use(express.json());

// KONEKSI KE DATABASE KASIR LAMA (LEGACY)
const legacyDb = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'legacy_rayacafe_db'
});

// AUTO AKUN
setTimeout(async () => {
  try {
    const userCount = await prisma.users.count();
    if (userCount === 0) {
      const hashAdmin = await bcrypt.hash('admin123', 10);
      const hashKasir = await bcrypt.hash('kasir123', 10);
      await prisma.users.create({ data: { username: 'admin', password_hash: hashAdmin, role: 'admin' } });
      await prisma.users.create({ data: { username: 'kasir', password_hash: hashKasir, role: 'kasir' } });
      console.log("✅ Akun otomatis dibuat: [admin/admin123] dan [kasir/kasir123]");
    }
  } catch (err) { console.log("⚠️ Pengecekan akun dilewati."); }
}, 2000);

// 1. WHATSAPP BOT RESERVASI
const client = new Client({ authStrategy: new LocalAuth() });

client.on('qr', (qr) => {
    console.log('SCAN QR CODE INI DENGAN WHATSAPP ANDA:');
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => console.log('✅ WhatsApp Bot Raya Cafe sudah siap!'));

const userSessions = new Map();

client.on('message', async (msg) => {
    if (msg.from.includes('@g.us')) return;

    const chatId = msg.from;
    const text = msg.body.trim().toLowerCase();
    let session = userSessions.get(chatId) || { step: 0, data: {} };

    try {
        if (text === 'batal') {
            userSessions.delete(chatId);
            return client.sendMessage(chatId, '❌ Proses reservasi dibatalkan.');
        }

        switch (session.step) {
            case 0:
                if (['halo', 'tes', 'p', 'hai', 'reservasi'].includes(text)) {
                    let pesan = `Halo! Selamat datang di WhatsApp Raya Cafe Madiun. ☕\n\nSilakan pilih tipe reservasi Anda:\n\n*1.* Reservasi Meja (Hanya pesan tempat)\n*2.* Reservasi Event (Tempat + Katering/Paket)\n\n(Balas angka *1* atau *2*)`;
                    await client.sendMessage(chatId, pesan);
                    session.step = 1; userSessions.set(chatId, session);
                }
                break;
            case 1:
                if (text === '1') {
                    session.data.type = 'meja';
                    await client.sendMessage(chatId, `Baik! 😊 Untuk berapa orang kedatangan ini?\n\n(Balas dengan *angka*, contoh: 5)`);
                    session.step = 2; 
                    userSessions.set(chatId, session);
                } else if (text === '2') {
                    session.data.type = 'event';
                    try {
                        const packages = await prisma.packages.findMany();
                        if (packages.length > 0) {
                            let pkgText = packages.map(p => `*${p.id}.* ${p.name}\n📝 Isi: ${p.description || 'Custom'}\n💵 Rp ${Number(p.price).toLocaleString('id-ID')} / pax`).join('\n\n');
                            await client.sendMessage(chatId, `Berikut daftar Paket Event kami:\n\n${pkgText}\n\nKetik *angka* paket untuk memilih, atau balas *PILIH* jika Anda ingin memesan dari menu reguler (bebas pilih).\n*(Maksimal Event: 100 Pax)*`);
                            session.step = 3; 
                        } else {
                            session.data.event_choice = 'pilih';
                            await client.sendMessage(chatId, `Saat ini Paket Spesial sedang tidak tersedia. Kita akan menggunakan Menu Reguler.\n\nUntuk berapa orang (pax) event ini? *(Maksimal 100 Pax)*`);
                            session.step = 4; 
                        }
                        userSessions.set(chatId, session);
                    } catch (err) {
                        await client.sendMessage(chatId, 'Terjadi gangguan sistem. Ketik *batal*.');
                    }
                } else {
                    await client.sendMessage(chatId, 'Mohon balas dengan angka *1* atau *2*.');
                }
                break;

            case 2: // PAX UNTUK MEJA BIASA
                const pax = parseInt(text);
                if (!isNaN(pax) && pax > 0) {
                    session.data.pax = pax;
                    await client.sendMessage(chatId, `Terakhir, mohon masukkan *Nama* dan *Waktu* kedatangan dengan format:\n\n*Nama#YYYY-MM-DD HH:MM*\n\nContoh: Budi#2026-05-10 18:30`);
                    session.step = 5; userSessions.set(chatId, session);
                } else { await client.sendMessage(chatId, 'Mohon masukkan angka (Contoh: 5)'); }
                break;

            case 3: // EVENT: OPSI 'PAKET' ATAU 'PILIH'
                if (text === 'pilih') {
                    session.data.event_choice = 'pilih'; 
                    await client.sendMessage(chatId, `Anda memilih Menu Reguler. Untuk berapa orang (pax) event ini? *(Maksimal 100 Pax)*`);
                    session.step = 4; userSessions.set(chatId, session);
                } else {
                    const pkgId = parseInt(text);
                    if (!isNaN(pkgId)) {
                        const pkg = await prisma.packages.findUnique({ where: { id: pkgId }});
                        if (pkg) {
                            session.data.event_choice = `paket_${pkg.id}`;
                            session.data.pkg_name = pkg.name;
                            await client.sendMessage(chatId, `Anda memilih *${pkg.name}*.\n\nUntuk berapa orang (pax) event ini? *(Maksimal 100 Pax)*`);
                            session.step = 4; userSessions.set(chatId, session);
                        } else {
                            await client.sendMessage(chatId, `Paket tidak ditemukan. Balas angka paket yang valid atau ketik PILIH.`);
                        }
                    } else {
                        await client.sendMessage(chatId, `Balas dengan angka paket atau ketik PILIH.`);
                    }
                }
                break;

            case 4: // PAX UNTUK EVENT
                const paxEv = parseInt(text);
                if (!isNaN(paxEv) && paxEv > 0) {
                    if (paxEv > 100) {
                        await client.sendMessage(chatId, `❌ Maaf, batas maksimal reservasi Event adalah 100 Pax. Silakan masukkan angka 100 atau di bawahnya:`);
                        return;
                    }
                    
                    session.data.pax = paxEv;

                    if (session.data.event_choice === 'pilih') {
                        await client.sendMessage(chatId, `⏳ Sedang mengecek ketersediaan bahan dapur untuk ${paxEv} pax...`);
                        try {
                            const menus = await prisma.menu_items.findMany({
                                where: { status: 'ready' },
                                include: { recipe_bom: { include: { raw_materials: true } } }
                            });
                            let menuTersedia = [];
                            for (const menu of menus) {
                                let bisaDibuat = true;
                                for (const resep of menu.recipe_bom) {
                                    if (Number(resep.raw_materials.current_stock) < (Number(resep.quantity_required) * paxEv)) { bisaDibuat = false; break; }
                                }
                                if (bisaDibuat) menuTersedia.push(`- ${menu.name}`);
                            }
                            if (menuTersedia.length === 0) {
                                await client.sendMessage(chatId, `Maaf, stok bahan baku dapur kami tidak mencukupi untuk event ${paxEv} porsi hari ini. 🙏 Silakan ketik *batal*.`);
                                return; 
                            }
                        } catch (err) { await client.sendMessage(chatId, 'Terjadi gangguan sistem. Ketik *batal*.'); return; }
                    }

                    await client.sendMessage(chatId, `✅ Tercatat!\n\nTerakhir, mohon masukkan *Nama* dan *Waktu* kedatangan dengan format:\n\n*Nama#YYYY-MM-DD HH:MM*\n\n⚠️ *PENTING:* Reservasi Event wajib minimal H-3 (3 Hari sebelum acara)!\n\nContoh: Budi#2026-05-10 18:30`);
                    session.step = 5; userSessions.set(chatId, session);

                } else { await client.sendMessage(chatId, 'Mohon masukkan angka pax yang valid.'); }
                break;

            case 5: // PENYIMPANAN KE MYSQL & VALIDASI H-3
                if (text.includes('#')) {
                    const dataInput = msg.body.split('#');
                    if (dataInput.length === 2) {
                        const reserveDate = new Date(dataInput[1].trim());

                        if (session.data.type === 'event') {
                            const today = new Date();
                            today.setHours(0, 0, 0, 0); 
                            const resDay = new Date(reserveDate);
                            resDay.setHours(0, 0, 0, 0);
                            
                            const diffTime = resDay.getTime() - today.getTime();
                            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

                            if (diffDays < 3) {
                                await client.sendMessage(chatId, `❌ Maaf, Reservasi Event wajib dilakukan minimal H-3 (3 hari sebelum hari H).\n\nSilakan balas dengan tanggal lain yang valid:\n(Contoh: Budi#2026-05-10 18:30)`);
                                return;
                            }
                        }

                        await prisma.reservations.create({
                            data: {
                                customer_name: dataInput[0].trim(),
                                customer_phone: chatId,
                                reservation_date: reserveDate, 
                                pax_count: session.data.pax,
                                buffer_pax: 0, 
                                reservation_type: session.data.type, 
                                event_choice: session.data.event_choice || null,
                                status: 'pending_wa'
                            }
                        });
                        
                        let pesanAkhir = session.data.type === 'meja' 
                            ? `🎉 Terima kasih, Kak ${dataInput[0].trim()}! Reservasi tempat untuk ${session.data.pax} orang telah dicatat. Kami menunggu kedatangan Anda!`
                            : `🎉 Terima kasih, Kak ${dataInput[0].trim()}! Reservasi EVENT untuk ${session.data.pax} pax telah dicatat. Admin kami akan segera memprosesnya.`;
                        
                        await client.sendMessage(chatId, pesanAkhir);
                        userSessions.delete(chatId);
                    } else { await client.sendMessage(chatId, 'Format salah. Contoh: Budi#2026-05-10 18:30'); }
                } else { await client.sendMessage(chatId, 'Format salah. Contoh: Budi#2026-05-10 18:30'); }
                break;
        }
    } catch (error) { await client.sendMessage(chatId, 'Format tidak valid. Ketik *batal*.'); }
});
client.initialize();

// 2. ROUTES API REACT
app.get('/', (req, res) => { res.send('Backend Siap!'); });

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await prisma.users.findUnique({ where: { username } });
    if (!user) return res.status(401).json({ error: "Username tidak terdaftar!" });
    const isValidPassword = await bcrypt.compare(password, user.password_hash);
    if (!isValidPassword) return res.status(401).json({ error: "Kata sandi salah!" });
    const token = jwt.sign({ id: user.id, role: user.role, username: user.username }, "RAHASIA_RAYA_CAFE", { expiresIn: '12h' });
    res.json({ message: "Login Berhasil", token, user: { username: user.username, role: user.role } });
  } catch (error) { res.status(400).json({ error: error.message }); }
});

app.get('/api/tables', async (req, res) => { try { res.json(await prisma.tables.findMany()); } catch(e) { res.json([]); } });
app.get('/api/packages', async (req, res) => { try { res.json(await prisma.packages.findMany()); } catch(e) { res.json([]); } });
app.get('/api/promotions', async (req, res) => { try { res.json(await prisma.promotions.findMany({ where: { is_active: true }, orderBy: { end_date: 'desc' } })); } catch (error) { res.status(400).json({ error: error.message }); }});
app.get('/api/categories', async (req, res) => { try { res.json(await prisma.categories.findMany()); } catch (error) { res.status(400).json({ error: error.message }); }});

app.get('/api/menu', async (req, res) => { 
  try {
      const menus = await prisma.menu_items.findMany({ where: { status: 'ready' }, include: { categories: true } });
      const activePromos = await prisma.promotions.findMany({ where: { is_active: true, end_date: { gt: new Date() } } });

      const menusWithPromos = menus.map(m => {
        const promo = activePromos.find(p => p.menu_item_id === m.id);
        let currentPrice = Number(m.price);
        if (promo) {
          if (promo.type === 'percent') currentPrice -= currentPrice * (Number(promo.value) / 100);
          else currentPrice -= Number(promo.value);
          if (currentPrice < 0) currentPrice = 0;
        }
        return { ...m, original_price: Number(m.price), price: currentPrice, promo_info: promo };
      });
      res.json(menusWithPromos); 
  } catch (error) { res.status(400).json({ error: error.message }); }
});

app.post('/api/checkout', async (req, res) => {
  const { table_id, items } = req.body; 
  try {
    const result = await prisma.$transaction(async (tx) => {
      let subtotal_bayar = 0; let total_potongan = 0; let total_asli = 0;

      // Resolve table_id: cari ID yang benar berdasarkan nomor meja
      let validTableId = parseInt(table_id);
      const tableRecord = await tx.tables.findFirst({ where: { table_number: parseInt(table_id) } });
      if (tableRecord) {
        validTableId = tableRecord.id;
      } else {
        // Jika nomor meja belum ada di tabel tables, gunakan tabel pertama sebagai fallback
        const firstTable = await tx.tables.findFirst({ orderBy: { id: 'asc' } });
        if (firstTable) validTableId = firstTable.id;
      }

      for (const item of items) {
        const menu = await tx.menu_items.findUnique({ where: { id: item.menu_item_id }, include: { recipe_bom: { include: { raw_materials: true } } } });
        const promo = await tx.promotions.findFirst({ where: { menu_item_id: menu.id, is_active: true, end_date: { gt: new Date() } } });

        let basePrice = Number(menu.price); let finalPrice = basePrice;
        if (promo) {
          if (promo.type === 'percent') finalPrice -= finalPrice * (Number(promo.value) / 100);
          else finalPrice -= Number(promo.value);
          if (finalPrice < 0) finalPrice = 0;
        }
        total_asli += basePrice * item.quantity; subtotal_bayar += finalPrice * item.quantity; total_potongan += (basePrice - finalPrice) * item.quantity;
        
        for (const resep of menu.recipe_bom) {
          const kebutuhan = Number(resep.quantity_required) * item.quantity;
          if (Number(resep.raw_materials.current_stock) < kebutuhan) throw new Error(`Stok ${resep.raw_materials.name} tidak cukup!`);
          await tx.raw_materials.update({ where: { id: resep.raw_material_id }, data: { current_stock: { decrement: kebutuhan } } });
        }
      }
      return await tx.orders.create({ data: { table_id: validTableId, subtotal: total_asli, discount_amount: total_potongan, final_total: subtotal_bayar, status: 'pending', order_items: { create: items.map(i => ({ menu_item_id: i.menu_item_id, quantity: i.quantity, notes: i.notes || '' })) } } });
    });
    res.json({ message: "Berhasil checkout!", data: result });
  } catch (error) { res.status(400).json({ error: error.message }); }
});

app.get('/api/admin/orders', async (req, res) => { try { res.json(await prisma.orders.findMany({ where: { status: { in: ['pending', 'preparing', 'ready', 'served'] } }, include: { tables: true, order_items: { include: { menu_items: true } } }, orderBy: { id: 'desc' } })); } catch (error) { res.status(400).json({ error: error.message }); }});
app.patch('/api/admin/orders/:id/status', async (req, res) => { try { res.json(await prisma.orders.update({ where: { id: parseInt(req.params.id) }, data: { status: req.body.status } })); } catch (error) { res.status(400).json({ error: error.message }); }});

// JEMBATAN KE DATABASE LEGACY (KASIR LAMA)
app.post('/api/admin/orders/:id/print', async (req, res) => {
  const orderId = parseInt(req.params.id);
  const { kasir_name } = req.body;
  try {
    const result = await prisma.$transaction(async (tx) => {
      // 1. Ambil data order PWA
      const order = await tx.orders.findUnique({ where: { id: orderId }, include: { tables: true, order_items: { include: { menu_items: true } } } });
      const tableNum = order.tables?.table_number || order.table_id;
      
      // 2. KIRIM KE DATABASE LEGACY KASIR (tbl_pos_penjualan)
      const noNota = `PWA-${Date.now()}`;
      const kasirInput = kasir_name ? `PWA_${kasir_name.toUpperCase()}` : 'Sistem_PWA';
      await legacyDb.query(
          `INSERT INTO tbl_pos_penjualan (no_nota, tgl_transaksi, no_meja, total_bayar, kasir_input, sumber_order) VALUES (?, NOW(), ?, ?, ?, ?)`,
          [noNota, tableNum, order.final_total, kasirInput, 'APLIKASI_QR']
      );

      // 3. Masukkan item-item ke (tbl_pos_detail)
      for (const item of order.order_items) {
          const hargaSatuan = item.menu_items ? Number(item.menu_items.price) : 0;
          const subTotal = hargaSatuan * item.quantity;
          await legacyDb.query(
              `INSERT INTO tbl_pos_detail (no_nota, nama_item, qty, harga_satuan, subtotal) VALUES (?, ?, ?, ?, ?)`,
              [noNota, item.menu_items ? item.menu_items.name : 'Unknown', item.quantity, hargaSatuan, subTotal]
          );
      }

      // 4. Update status di PWA jadi paid
      return await tx.orders.update({ where: { id: orderId }, data: { status: 'paid' } });
    });
    res.json({ message: "Tagihan dicetak & sukses dikirim ke Database Kasir Lama!" });
  } catch (error) { 
      res.status(400).json({ error: "Gagal terhubung ke Database Legacy: " + error.message }); 
  }
});

// RESERVATIONS KONTROL
app.get('/api/admin/reservations', async (req, res) => { try { res.json(await prisma.reservations.findMany({ orderBy: { id: 'desc' } })); } catch (error) { res.status(400).json({ error: error.message }); }});
app.patch('/api/admin/reservations/:id/status', async (req, res) => { try { res.json(await prisma.reservations.update({ where: { id: parseInt(req.params.id) }, data: { status: req.body.status } })); } catch (error) { res.status(400).json({ error: error.message }); }});

app.post('/api/admin/reservations/manual', async (req, res) => {
  try {
    const { name, phone, date, pax, type, event_choice } = req.body;
    
    if (!name || !phone || !date || !pax) {
        return res.status(400).json({ error: "Nama, No HP, Tanggal, dan Pax wajib diisi!" });
    }

    // Validasi backend untuk H-3 Manual Input
    if (type === 'event') {
        const today = new Date(); today.setHours(0,0,0,0);
        const resDay = new Date(date); resDay.setHours(0,0,0,0);
        if (Math.ceil((resDay.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)) < 3) {
            return res.status(400).json({ error: "Reservasi Event wajib minimal H-3 dari sekarang!" });
        }
    }

    let final_choice = type === 'event' ? (event_choice || 'pilih') : null;
    const result = await prisma.reservations.create({ data: { customer_name: name, customer_phone: phone, reservation_date: new Date(date), pax_count: parseInt(pax), buffer_pax: 0, reservation_type: type, event_choice: final_choice, status: 'pending_wa' } });
    res.json({ message: "Reservasi manual berhasil ditambahkan!", data: result });
  } catch (error) { res.status(400).json({ error: error.message }); }
});

app.post('/api/admin/reservations/:id/confirm-event', async (req, res) => {
  try {
    const resvId = parseInt(req.params.id);
    const { table_id, package_id, menu_items } = req.body; 
    
    await prisma.$transaction(async (tx) => {
      const targetResv = await tx.reservations.findUnique({ where: { id: resvId } });
      
      const duaJamSebelum = new Date(targetResv.reservation_date.getTime() - (2 * 60 * 60 * 1000));
      const duaJamSesudah = new Date(targetResv.reservation_date.getTime() + (2 * 60 * 60 * 1000));
      const bentrok = await tx.reservations.findFirst({
        where: { table_id: parseInt(table_id), status: 'confirmed', id: { not: resvId }, reservation_date: { gte: duaJamSebelum, lte: duaJamSesudah } }
      });
      if (bentrok) throw new Error(`Meja ${table_id} sudah dipakai oleh ${bentrok.customer_name} pada jam ${bentrok.reservation_date.toLocaleTimeString('id-ID')}.`);

      let newEventChoice = targetResv.event_choice;

      if (menu_items && menu_items.length > 0) { 
         let choiceParts = [];
         for (const item of menu_items) {
            const menu = await tx.menu_items.findUnique({ where: { id: parseInt(item.id) }, include: { recipe_bom: { include: { raw_materials: true } } } });
            for (const resep of menu.recipe_bom) {
                const kebutuhan = Number(resep.quantity_required) * targetResv.pax_count * item.qty;
                if (Number(resep.raw_materials.current_stock) < kebutuhan) throw new Error(`Stok ${resep.raw_materials.name} tidak cukup untuk memasak ${menu.name}!`);
                await tx.raw_materials.update({ where: { id: resep.raw_material_id }, data: { current_stock: { decrement: kebutuhan } } });
            }
            choiceParts.push(`${item.id}:${item.qty}`);
         }
         newEventChoice = "pilih_" + choiceParts.join(','); 

      } else if (package_id) { 
         newEventChoice = "paket_" + package_id;
      }

      await tx.reservations.update({ where: { id: resvId }, data: { status: 'confirmed', table_id: parseInt(table_id), event_choice: newEventChoice } });
    });
    res.json({ message: "Event dikonfirmasi! Data telah dikunci." });
  } catch (error) { res.status(400).json({ error: error.message }); }
});

app.post('/api/admin/reservations/:id/confirm-meja', async (req, res) => {
    try {
        const resvId = parseInt(req.params.id);
        const tableId = parseInt(req.body.table_id);
        await prisma.$transaction(async (tx) => {
          const targetResv = await tx.reservations.findUnique({ where: { id: resvId } });
          const duaJamSebelum = new Date(targetResv.reservation_date.getTime() - (2 * 60 * 60 * 1000));
          const duaJamSesudah = new Date(targetResv.reservation_date.getTime() + (2 * 60 * 60 * 1000));
          const bentrok = await tx.reservations.findFirst({
            where: { table_id: tableId, status: 'confirmed', id: { not: resvId }, reservation_date: { gte: duaJamSebelum, lte: duaJamSesudah } }
          });
          if (bentrok) throw new Error(`Meja ${tableId} sudah dipakai oleh ${bentrok.customer_name} pada jam ${bentrok.reservation_date.toLocaleTimeString('id-ID')}.`);
          await tx.reservations.update({ where: { id: resvId }, data: { status: 'confirmed', table_id: tableId } });
        });
        res.json({ message: "Reservasi Meja disetujui tanpa bentrok!" });
    } catch (error) { res.status(400).json({ error: error.message }); }
});

// CETAK EVENT JUGA MENEMBAK KE DATABASE LEGACY LAMA
app.post('/api/admin/reservations/:id/print', async (req, res) => {
  try {
    const { total_amount, kasir_name, event_description } = req.body;
    
    await prisma.$transaction(async (tx) => {
      const resv = await tx.reservations.findUnique({ where: { id: parseInt(req.params.id) } });

      // 1. Cari table yang valid berdasarkan table_number untuk menghindari FK constraint error
      let validTableId = 1; // fallback default
      if (resv.table_id) {
        // resv.table_id menyimpan nomor meja (bukan ID tabel), cari ID yang benar
        const tableRecord = await tx.tables.findFirst({ where: { table_number: resv.table_id } });
        if (tableRecord) {
          validTableId = tableRecord.id;
        } else {
          // Jika meja belum ada di tabel tables, ambil ID tabel pertama yang ada
          const firstTable = await tx.tables.findFirst({ orderBy: { id: 'asc' } });
          if (firstTable) validTableId = firstTable.id;
        }
      }

      // 2. Buat pesanan (orders) di PWA DB agar masuk laporan harian
      const newOrder = await tx.orders.create({
          data: {
            table_id: validTableId,
            subtotal: parseFloat(total_amount),
            discount_amount: 0,
            final_total: parseFloat(total_amount),
            status: 'paid'
          }
      });

      // 3. KIRIM KE DATABASE LEGACY
      const noNota = `EVT-${Date.now()}`;
      const kasirInput = kasir_name ? `EVT_${kasir_name.toUpperCase()}` : 'Sistem_PWA';
      await legacyDb.query(
          `INSERT INTO tbl_pos_penjualan (no_nota, tgl_transaksi, no_meja, total_bayar, kasir_input, sumber_order) VALUES (?, NOW(), ?, ?, ?, ?)`,
          [noNota, resv.table_id || 1, total_amount, kasirInput, 'RESERVASI_WA']
      );

      // 4. Masukkan item ke legacy detail (nama paket + isi deskripsi)
      const namaItem = event_description 
        ? `Event: ${resv.pax_count} Pax | ${event_description}`
        : `Paket Event (${resv.pax_count} Pax)`;
      await legacyDb.query(
          `INSERT INTO tbl_pos_detail (no_nota, nama_item, qty, harga_satuan, subtotal) VALUES (?, ?, ?, ?, ?)`,
          [noNota, namaItem.substring(0, 255), 1, total_amount, total_amount]
      );

      // 5. Tandai Selesai
      await tx.reservations.update({ where: { id: resv.id }, data: { status: 'completed' } });
    });

    res.json({ message: "Tagihan Event berhasil dicetak, masuk ke Laporan, dan terkirim ke Database Kasir Lama!" });
  } catch (error) { res.status(400).json({ error: "Gagal terhubung ke Database Legacy: " + error.message }); }
});

// --- API LAPORAN (REPORTS) ---
app.get('/api/admin/reports', async (req, res) => {
  const dateQuery = req.query.date || new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Jakarta' }); 
  try {
    // Gunakan timezone WIB (UTC+7) agar laporan sesuai hari di Indonesia
    const startDate = new Date(`${dateQuery}T00:00:00+07:00`);
    const endDate = new Date(`${dateQuery}T23:59:59+07:00`);
    const orders = await prisma.orders.findMany({ where: { created_at: { gte: startDate, lte: endDate }, status: { in: ['paid', 'served'] } }, include: { order_items: { include: { menu_items: true } } } });
    let totalRevenue = 0; let totalDiscount = 0; let itemCounts = {};
    orders.forEach(o => { 
        totalRevenue += Number(o.final_total); totalDiscount += Number(o.discount_amount); o.order_items.forEach(i => { if(i.menu_items) { itemCounts[i.menu_items.name] = (itemCounts[i.menu_items.name] || 0) + i.quantity; } }); 
    });
    const topItems = Object.keys(itemCounts).map(name => ({ name, qty: itemCounts[name] })).sort((a,b) => b.qty - a.qty).slice(0, 5);
    res.json({ date: dateQuery, total_orders: orders.length, total_revenue: totalRevenue, total_discount_given: totalDiscount, top_items: topItems, orders_detail: orders });
  } catch (error) { res.status(400).json({ error: error.message }); }
});

// --- API INVENTORY, PROMO, DLL ---
app.get('/api/admin/inventory', async (req, res) => { try { res.json(await prisma.raw_materials.findMany()); } catch (error) { res.status(400).json({ error: error.message }); } });
app.patch('/api/admin/inventory/:id', async (req, res) => {
  const materialId = parseInt(req.params.id);
  const { stock, reason, updated_by } = req.body;
  try {
    const result = await prisma.$transaction(async (tx) => {
      const material = await tx.raw_materials.findUnique({ where: { id: materialId } });
      const updated = await tx.raw_materials.update({ where: { id: materialId }, data: { current_stock: parseFloat(stock) } });
      await tx.inventory_history.create({ data: { raw_material_id: materialId, old_stock: material.current_stock, new_stock: parseFloat(stock), reason: reason || 'Manual', updated_by: updated_by || 'Admin' } });
      return updated;
    });
    res.json({ message: "Stok sukses diupdate!", data: result });
  } catch (error) { res.status(400).json({ error: error.message }); }
});
app.get('/api/admin/inventory-history', async (req, res) => { try { res.json(await prisma.inventory_history.findMany({ include: { raw_materials: true }, orderBy: { created_at: 'desc' } })); } catch (error) { res.status(400).json({ error: error.message }); } });

app.get('/api/admin/promotions', async (req, res) => { try { res.json(await prisma.promotions.findMany({ include: { menu_items: true }, orderBy: { end_date: 'desc' } })); } catch (error) { res.status(400).json({ error: error.message }); } });
app.post('/api/admin/promotions', async (req, res) => {
  const { menu_item_id, name, type, value, end_date } = req.body;
  try { const newPromo = await prisma.promotions.create({ data: { menu_item_id: parseInt(menu_item_id), name: name, type: type, value: parseFloat(value), end_date: new Date(end_date), is_active: true } }); res.json({ message: "Diskon berhasil ditambahkan!", data: newPromo }); } catch (error) { res.status(400).json({ error: error.message }); }
});
app.delete('/api/admin/promotions/:id', async (req, res) => { try { await prisma.promotions.delete({ where: { id: parseInt(req.params.id) } }); res.json({ message: "Diskon dihapus!" }); } catch (error) { res.status(400).json({ error: error.message }); } });

app.post('/api/feedback', async (req, res) => {
  const { order_id, feedbacks } = req.body; 
  try {
    const result = await prisma.feedback.createMany({ data: feedbacks.map(f => ({ order_id: parseInt(order_id), menu_item_id: parseInt(f.menu_item_id), rating: parseInt(f.rating), review_text: f.review_text || '' })) });
    res.json({ message: "Terima kasih atas ulasan Anda!", data: result });
  } catch (error) { res.status(400).json({ error: error.message }); }
});
app.get('/api/admin/feedback', async (req, res) => { try { const feedbacks = await prisma.feedback.findMany({ include: { menu_items: true, orders: { include: { tables: false } } }, orderBy: { created_at: 'desc' } }); res.json(feedbacks); } catch (error) { res.status(400).json({ error: error.message }); } });

app.get('/api/admin/users', async (req, res) => { try { const usersList = await prisma.users.findMany({ select: { id: true, username: true, role: true, created_at: true }, orderBy: { role: 'asc' } }); res.json(usersList); } catch (error) { res.status(400).json({ error: error.message }); } });
app.post('/api/admin/users', async (req, res) => {
  const { username, password, role } = req.body;
  try { const hashPassword = await bcrypt.hash(password, 10); await prisma.users.create({ data: { username, password_hash: hashPassword, role } }); res.json({ message: "Akun pegawai berhasil dibuat!" }); } catch (error) { res.status(400).json({ error: "Username sudah terpakai atau input tidak valid." }); }
});
app.delete('/api/admin/users/:id', async (req, res) => { try { await prisma.users.delete({ where: { id: parseInt(req.params.id) } }); res.json({ message: "Akun berhasil dihapus!" }); } catch (error) { res.status(400).json({ error: error.message }); } });

app.listen(3000, () => console.log(`✅ Backend menyala di port 3000`));