const client = require("../config/whatsapp");
const { prisma } = require("../config/database");

const userSessions = new Map();

const initializeWhatsAppBot = () => {
  client.on("message", async (msg) => {
    if (msg.from.includes("@g.us")) return;

    const chatId = msg.from;
    const text = msg.body.trim().toLowerCase();
    let session = userSessions.get(chatId) || { step: 0, data: {} };

    try {
      if (text === "batal") {
        userSessions.delete(chatId);
        return client.sendMessage(chatId, "❌ Proses reservasi dibatalkan.");
      }

      switch (session.step) {
        case 0:
          if (["halo", "tes", "p", "hai", "reservasi"].includes(text)) {
            let pesan = `Halo! Selamat datang di WhatsApp Raya Cafe Madiun. ☕\n\nSilakan pilih tipe reservasi Anda:\n\n*1.* Reservasi Meja (Hanya pesan tempat)\n*2.* Reservasi Event (Tempat + Katering/Paket)\n\n(Balas angka *1* atau *2*)`;
            await client.sendMessage(chatId, pesan);
            session.step = 1;
            userSessions.set(chatId, session);
          }
          break;
        case 1:
          if (text === "1") {
            session.data.type = "meja";
            await client.sendMessage(
              chatId,
              `Baik! 😊 Untuk berapa orang kedatangan ini?\n\n(Balas dengan *angka*, contoh: 5)`,
            );
            session.step = 2;
            userSessions.set(chatId, session);
          } else if (text === "2") {
            session.data.type = "event";
            try {
              const packages = await prisma.packages.findMany();
              if (packages.length > 0) {
                let pkgText = packages
                  .map(
                    (p) =>
                      `*${p.id}.* ${p.name}\n📝 Isi: ${p.description || "Custom"}\n💵 Rp ${Number(p.price).toLocaleString("id-ID")} / pax`,
                  )
                  .join("\n\n");
                await client.sendMessage(
                  chatId,
                  `Berikut daftar Paket Event kami:\n\n${pkgText}\n\nKetik *angka* paket untuk memilih, atau balas *PILIH* jika Anda ingin memesan dari menu reguler (bebas pilih).\n*(Maksimal Event: 100 Pax)*`,
                );
                session.step = 3;
              } else {
                session.data.event_choice = "pilih";
                await client.sendMessage(
                  chatId,
                  `Saat ini Paket Spesial sedang tidak tersedia. Kita akan menggunakan Menu Reguler.\n\nUntuk berapa orang (pax) event ini? *(Maksimal 100 Pax)*`,
                );
                session.step = 4;
              }
              userSessions.set(chatId, session);
            } catch (err) {
              await client.sendMessage(
                chatId,
                "Terjadi gangguan sistem. Ketik *batal*.",
              );
            }
          } else {
            await client.sendMessage(
              chatId,
              "Mohon balas dengan angka *1* atau *2*.",
            );
          }
          break;

        case 2: // PAX UNTUK MEJA BIASA
          const pax = parseInt(text);
          if (!isNaN(pax) && pax > 0) {
            session.data.pax = pax;
            await client.sendMessage(
              chatId,
              `Terakhir, mohon masukkan *Nama* dan *Waktu* kedatangan dengan format:\n\n*Nama#YYYY-MM-DD HH:MM*\n\nContoh: Budi#2026-05-10 18:30`,
            );
            session.step = 5;
            userSessions.set(chatId, session);
          } else {
            await client.sendMessage(chatId, "Mohon masukkan angka (Contoh: 5)");
          }
          break;

        case 3: // EVENT: OPSI 'PAKET' ATAU 'PILIH'
          if (text === "pilih") {
            session.data.event_choice = "pilih";
            await client.sendMessage(
              chatId,
              `Anda memilih Menu Reguler. Untuk berapa orang (pax) event ini? *(Maksimal 100 Pax)*`,
            );
            session.step = 4;
            userSessions.set(chatId, session);
          } else {
            const pkgId = parseInt(text);
            if (!isNaN(pkgId)) {
              const pkg = await prisma.packages.findUnique({
                where: { id: pkgId },
              });
              if (pkg) {
                session.data.event_choice = `paket_${pkg.id}`;
                session.data.pkg_name = pkg.name;
                await client.sendMessage(
                  chatId,
                  `Anda memilih *${pkg.name}*.\n\nUntuk berapa orang (pax) event ini? *(Maksimal 100 Pax)*`,
                );
                session.step = 4;
                userSessions.set(chatId, session);
              } else {
                await client.sendMessage(
                  chatId,
                  `Paket tidak ditemukan. Balas angka paket yang valid atau ketik PILIH.`,
                );
              }
            } else {
              await client.sendMessage(
                chatId,
                `Balas dengan angka paket atau ketik PILIH.`,
              );
            }
          }
          break;

        case 4: // PAX UNTUK EVENT
          const paxEv = parseInt(text);
          if (!isNaN(paxEv) && paxEv > 0) {
            if (paxEv > 100) {
              await client.sendMessage(
                chatId,
                `❌ Maaf, batas maksimal reservasi Event adalah 100 Pax. Silakan masukkan angka 100 atau di bawahnya:`,
              );
              return;
            }

            session.data.pax = paxEv;

            if (session.data.event_choice === "pilih") {
              await client.sendMessage(
                chatId,
                `⏳ Sedang mengecek ketersediaan bahan dapur untuk ${paxEv} pax...`,
              );
              try {
                const menus = await prisma.menu_items.findMany({
                  where: { status: "ready" },
                  include: { recipe_bom: { include: { raw_materials: true } } },
                });
                let menuTersedia = [];
                for (const menu of menus) {
                  let bisaDibuat = true;
                  for (const resep of menu.recipe_bom) {
                    if (
                      Number(resep.raw_materials.current_stock) <
                      Number(resep.quantity_required) * paxEv
                    ) {
                      bisaDibuat = false;
                      break;
                    }
                  }
                  if (bisaDibuat) menuTersedia.push(`- ${menu.name}`);
                }
                if (menuTersedia.length === 0) {
                  await client.sendMessage(
                    chatId,
                    `Maaf, stok bahan baku dapur kami tidak mencukupi untuk event ${paxEv} porsi hari ini. 🙏 Silakan ketik *batal*.`,
                  );
                  return;
                }
              } catch (err) {
                await client.sendMessage(
                  chatId,
                  "Terjadi gangguan sistem. Ketik *batal*.",
                );
                return;
              }
            }

            await client.sendMessage(
              chatId,
              `✅ Tercatat!\n\nTerakhir, mohon masukkan *Nama* dan *Waktu* kedatangan dengan format:\n\n*Nama#YYYY-MM-DD HH:MM*\n\n⚠️ *PENTING:* Reservasi Event wajib minimal H-3 (3 Hari sebelum acara)!\n\nContoh: Budi#2026-05-10 18:30`,
            );
            session.step = 5;
            userSessions.set(chatId, session);
          } else {
            await client.sendMessage(
              chatId,
              "Mohon masukkan angka pax yang valid.",
            );
          }
          break;

        case 5: // PENYIMPANAN KE MYSQL & VALIDASI H-3
          if (text.includes("#")) {
            const dataInput = msg.body.split("#");
            if (dataInput.length === 2) {
              const reserveDate = new Date(dataInput[1].trim());

              if (session.data.type === "event") {
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                const resDay = new Date(reserveDate);
                resDay.setHours(0, 0, 0, 0);

                const diffTime = resDay.getTime() - today.getTime();
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

                if (diffDays < 3) {
                  await client.sendMessage(
                    chatId,
                    `❌ Maaf, Reservasi Event wajib dilakukan minimal H-3 (3 hari sebelum hari H).\n\nSilakan balas dengan tanggal lain yang valid:\n(Contoh: Budi#2026-05-10 18:30)`,
                  );
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
                  status: "pending_wa",
                },
              });

              let pesanAkhir =
                session.data.type === "meja"
                  ? `🎉 Terima kasih, Kak ${dataInput[0].trim()}! Reservasi tempat untuk ${session.data.pax} orang telah dicatat. Kami menunggu kedatangan Anda!`
                  : `🎉 Terima kasih, Kak ${dataInput[0].trim()}! Reservasi EVENT untuk ${session.data.pax} pax telah dicatat. Admin kami akan segera memprosesnya.`;

              await client.sendMessage(chatId, pesanAkhir);
              userSessions.delete(chatId);
            } else {
              await client.sendMessage(
                chatId,
                "Format salah. Contoh: Budi#2026-05-10 18:30",
              );
            }
          } else {
            await client.sendMessage(
              chatId,
              "Format salah. Contoh: Budi#2026-05-10 18:30",
            );
          }
          break;
      }
    } catch (error) {
      await client.sendMessage(chatId, "Format tidak valid. Ketik *batal*.");
    }
  });

  client.initialize();
};

module.exports = { initializeWhatsAppBot };
