const { prisma, legacyDb } = require("../config/database");
const bcrypt = require("bcryptjs");

const getOrders = async (req, res) => {
  try {
    res.json(
      await prisma.orders.findMany({
        where: { status: { in: ["pending", "preparing", "ready", "served"] } },
        include: {
          tables: true,
          order_items: { include: { menu_items: true } },
        },
        orderBy: { id: "desc" },
      }),
    );
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateOrderStatus = async (req, res) => {
  try {
    res.json(
      await prisma.orders.update({
        where: { id: parseInt(req.params.id) },
        data: { status: req.body.status },
      }),
    );
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const printOrderLegacy = async (req, res) => {
  const orderId = parseInt(req.params.id);
  const { kasir_name } = req.body;
  try {
    const result = await prisma.$transaction(async (tx) => {
      const order = await tx.orders.findUnique({
        where: { id: orderId },
        include: {
          tables: true,
          order_items: { include: { menu_items: true } },
        },
      });
      const tableNum = order.tables?.table_number || order.table_id;

      const noNota = `PWA-${Date.now()}`;
      const kasirInput = kasir_name
        ? `PWA_${kasir_name.toUpperCase()}`
        : "Sistem_PWA";
      await legacyDb.query(
        `INSERT INTO tbl_pos_penjualan (no_nota, tgl_transaksi, no_meja, total_bayar, kasir_input, sumber_order) VALUES (?, NOW(), ?, ?, ?, ?)`,
        [noNota, tableNum, order.final_total, kasirInput, "APLIKASI_QR"],
      );

      for (const item of order.order_items) {
        const hargaSatuan = item.menu_items ? Number(item.menu_items.price) : 0;
        const subTotal = hargaSatuan * item.quantity;
        await legacyDb.query(
          `INSERT INTO tbl_pos_detail (no_nota, nama_item, qty, harga_satuan, subtotal) VALUES (?, ?, ?, ?, ?)`,
          [
            noNota,
            item.menu_items ? item.menu_items.name : "Unknown",
            item.quantity,
            hargaSatuan,
            subTotal,
          ],
        );
      }

      return await tx.orders.update({
        where: { id: orderId },
        data: { status: "paid" },
      });
    });
    res.json({ message: "Tagihan dicetak & sukses dikirim ke Database Kasir Lama!" });
  } catch (error) {
    res.status(400).json({ error: "Gagal terhubung ke Database Legacy: " + error.message });
  }
};

const getReservations = async (req, res) => {
  try {
    res.json(await prisma.reservations.findMany({ orderBy: { id: "desc" } }));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateReservationStatus = async (req, res) => {
  try {
    res.json(
      await prisma.reservations.update({
        where: { id: parseInt(req.params.id) },
        data: { status: req.body.status },
      }),
    );
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const manualReservation = async (req, res) => {
  try {
    const { name, phone, date, pax, type, event_choice } = req.body;

    if (!name || !phone || !date || !pax) {
      return res.status(400).json({ error: "Nama, No HP, Tanggal, dan Pax wajib diisi!" });
    }

    if (type === "event") {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const resDay = new Date(date);
      resDay.setHours(0, 0, 0, 0);
      if (Math.ceil((resDay.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)) < 3) {
        return res.status(400).json({ error: "Reservasi Event wajib minimal H-3 dari sekarang!" });
      }
    }

    let final_choice = type === "event" ? event_choice || "pilih" : null;
    const result = await prisma.reservations.create({
      data: {
        customer_name: name,
        customer_phone: phone,
        reservation_date: new Date(date),
        pax_count: parseInt(pax),
        buffer_pax: 0,
        reservation_type: type,
        event_choice: final_choice,
        status: "pending_wa",
      },
    });
    res.json({ message: "Reservasi manual berhasil ditambahkan!", data: result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const confirmEventReservation = async (req, res) => {
  try {
    const resvId = parseInt(req.params.id);
    const { table_id, package_id, menu_items } = req.body;

    await prisma.$transaction(async (tx) => {
      const targetResv = await tx.reservations.findUnique({ where: { id: resvId } });
      const duaJamSebelum = new Date(targetResv.reservation_date.getTime() - 2 * 60 * 60 * 1000);
      const duaJamSesudah = new Date(targetResv.reservation_date.getTime() + 2 * 60 * 60 * 1000);
      const bentrok = await tx.reservations.findFirst({
        where: {
          table_id: parseInt(table_id),
          status: "confirmed",
          id: { not: resvId },
          reservation_date: { gte: duaJamSebelum, lte: duaJamSesudah },
        },
      });
      if (bentrok) throw new Error(`Meja ${table_id} sudah dipakai oleh ${bentrok.customer_name}.`);

      let newEventChoice = targetResv.event_choice;
      if (menu_items && menu_items.length > 0) {
        let choiceParts = [];
        for (const item of menu_items) {
          const menu = await tx.menu_items.findUnique({
            where: { id: parseInt(item.id) },
            include: { recipe_bom: { include: { raw_materials: true } } },
          });
          for (const resep of menu.recipe_bom) {
            const kebutuhan = Number(resep.quantity_required) * targetResv.pax_count * item.qty;
            if (Number(resep.raw_materials.current_stock) < kebutuhan)
              throw new Error(`Stok ${resep.raw_materials.name} tidak cukup untuk memasak ${menu.name}!`);
            await tx.raw_materials.update({
              where: { id: resep.raw_material_id },
              data: { current_stock: { decrement: kebutuhan } },
            });
          }
          choiceParts.push(`${item.id}:${item.qty}`);
        }
        newEventChoice = "pilih_" + choiceParts.join(",");
      } else if (package_id) {
        newEventChoice = "paket_" + package_id;
      }

      await tx.reservations.update({
        where: { id: resvId },
        data: { status: "confirmed", table_id: parseInt(table_id), event_choice: newEventChoice },
      });
    });
    res.json({ message: "Event dikonfirmasi! Data telah dikunci." });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const confirmMejaReservation = async (req, res) => {
  try {
    const resvId = parseInt(req.params.id);
    const tableId = parseInt(req.body.table_id);
    await prisma.$transaction(async (tx) => {
      const targetResv = await tx.reservations.findUnique({ where: { id: resvId } });
      const duaJamSebelum = new Date(targetResv.reservation_date.getTime() - 2 * 60 * 60 * 1000);
      const duaJamSesudah = new Date(targetResv.reservation_date.getTime() + 2 * 60 * 60 * 1000);
      const bentrok = await tx.reservations.findFirst({
        where: {
          table_id: tableId,
          status: "confirmed",
          id: { not: resvId },
          reservation_date: { gte: duaJamSebelum, lte: duaJamSesudah },
        },
      });
      if (bentrok) throw new Error(`Meja ${tableId} sudah dipakai oleh ${bentrok.customer_name}.`);
      await tx.reservations.update({
        where: { id: resvId },
        data: { status: "confirmed", table_id: tableId },
      });
    });
    res.json({ message: "Reservasi Meja disetujui tanpa bentrok!" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const printEventLegacy = async (req, res) => {
  try {
    const { total_amount, kasir_name, event_description } = req.body;
    await prisma.$transaction(async (tx) => {
      const resv = await tx.reservations.findUnique({ where: { id: parseInt(req.params.id) } });

      let validTableId = 1;
      if (resv.table_id) {
        const tableRecord = await tx.tables.findFirst({ where: { table_number: resv.table_id } });
        if (tableRecord) validTableId = tableRecord.id;
        else {
          const firstTable = await tx.tables.findFirst({ orderBy: { id: "asc" } });
          if (firstTable) validTableId = firstTable.id;
        }
      }

      await tx.orders.create({
        data: {
          table_id: validTableId,
          subtotal: parseFloat(total_amount),
          discount_amount: 0,
          final_total: parseFloat(total_amount),
          status: "paid",
        },
      });

      const noNota = `EVT-${Date.now()}`;
      const kasirInput = kasir_name ? `EVT_${kasir_name.toUpperCase()}` : "Sistem_PWA";
      await legacyDb.query(
        `INSERT INTO tbl_pos_penjualan (no_nota, tgl_transaksi, no_meja, total_bayar, kasir_input, sumber_order) VALUES (?, NOW(), ?, ?, ?, ?)`,
        [noNota, resv.table_id || 1, total_amount, kasirInput, "RESERVASI_WA"],
      );

      const namaItem = event_description ? `Event: ${resv.pax_count} Pax | ${event_description}` : `Paket Event (${resv.pax_count} Pax)`;
      await legacyDb.query(
        `INSERT INTO tbl_pos_detail (no_nota, nama_item, qty, harga_satuan, subtotal) VALUES (?, ?, ?, ?, ?)`,
        [noNota, namaItem.substring(0, 255), 1, total_amount, total_amount],
      );

      await tx.reservations.update({ where: { id: resv.id }, data: { status: "completed" } });
    });
    res.json({ message: "Tagihan Event dicetak & terkirim ke Database Kasir Lama!" });
  } catch (error) {
    res.status(400).json({ error: "Gagal terhubung ke Database Legacy: " + error.message });
  }
};

const getReports = async (req, res) => {
  const dateQuery = req.query.date || new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Jakarta" });
  try {
    const startDate = new Date(`${dateQuery}T00:00:00+07:00`);
    const endDate = new Date(`${dateQuery}T23:59:59+07:00`);
    const orders = await prisma.orders.findMany({
      where: {
        created_at: { gte: startDate, lte: endDate },
        status: { in: ["paid", "served"] },
      },
      include: { order_items: { include: { menu_items: true } }, tables: true },
    });
    let totalRevenue = 0;
    let totalDiscount = 0;
    let itemCounts = {};
    orders.forEach((o) => {
      totalRevenue += Number(o.final_total);
      totalDiscount += Number(o.discount_amount);
      o.order_items.forEach((i) => {
        if (i.menu_items) {
          itemCounts[i.menu_items.name] = (itemCounts[i.menu_items.name] || 0) + i.quantity;
        }
      });
    });
    const topItems = Object.keys(itemCounts)
      .map((name) => ({ name, qty: itemCounts[name] }))
      .sort((a, b) => b.qty - a.qty)
      .slice(0, 5);
    res.json({
      date: dateQuery,
      total_orders: orders.length,
      total_revenue: totalRevenue,
      total_discount_given: totalDiscount,
      top_items: topItems,
      orders_detail: orders,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getInventory = async (req, res) => {
  try { res.json(await prisma.raw_materials.findMany()); } catch (error) { res.status(400).json({ error: error.message }); }
};

const updateInventory = async (req, res) => {
  const materialId = parseInt(req.params.id);
  const { stock, reason, updated_by, role } = req.body;
  try {
    const result = await prisma.$transaction(async (tx) => {
      const material = await tx.raw_materials.findUnique({ where: { id: materialId } });
      const reqStatus = role === "owner" ? "approved" : "pending";
      if (reqStatus === "approved") {
        await tx.raw_materials.update({ where: { id: materialId }, data: { current_stock: parseFloat(stock) } });
      }
      return await tx.inventory_history.create({
        data: {
          raw_material_id: materialId,
          old_stock: material.current_stock,
          new_stock: parseFloat(stock),
          reason: reason || "Manual",
          status: reqStatus,
          updated_by: updated_by || "Admin",
        },
      });
    });
    res.json({ message: role === "owner" ? "Stok sukses diupdate!" : "Pengajuan stok berhasil dikirim!", data: result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getInventoryHistory = async (req, res) => {
  try {
    res.json(await prisma.inventory_history.findMany({ where: { status: "approved" }, include: { raw_materials: true }, orderBy: { created_at: "desc" } }));
  } catch (error) { res.status(400).json({ error: error.message }); }
};

const getInventoryRequests = async (req, res) => {
  try {
    res.json(await prisma.inventory_history.findMany({ where: { status: "pending" }, include: { raw_materials: true }, orderBy: { created_at: "desc" } }));
  } catch (error) { res.status(400).json({ error: error.message }); }
};

const processInventoryRequest = async (req, res) => {
  const reqId = parseInt(req.params.id);
  const { action } = req.body;
  try {
    await prisma.$transaction(async (tx) => {
      const request = await tx.inventory_history.findUnique({ where: { id: reqId } });
      if (!request || request.status !== "pending") throw new Error("Pengajuan tidak valid.");
      if (action === "approve") {
        await tx.raw_materials.update({ where: { id: request.raw_material_id }, data: { current_stock: request.new_stock } });
        await tx.inventory_history.update({ where: { id: reqId }, data: { status: "approved" } });
      } else {
        await tx.inventory_history.update({ where: { id: reqId }, data: { status: "rejected" } });
      }
    });
    res.json({ message: "Pengajuan berhasil diproses." });
  } catch (error) { res.status(400).json({ error: error.message }); }
};

const getAdminPromotions = async (req, res) => {
  try {
    res.json(
      await prisma.promotions.findMany({
        include: { menu_items: true },
        orderBy: { end_date: "desc" },
      }),
    );
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createPromotion = async (req, res) => {
  const { menu_item_ids, name, type, value, end_date } = req.body;
  try {
    if (!menu_item_ids || !Array.isArray(menu_item_ids)) throw new Error("menu_item_ids harus array!");
    const promosData = menu_item_ids.map((id) => ({
      menu_item_id: parseInt(id), name, type, value: parseFloat(value), end_date: new Date(end_date), is_active: true,
    }));
    const result = await prisma.promotions.createMany({ data: promosData });
    res.json({ message: `Diskon berhasil ditambahkan ke ${result.count} menu!` });
  } catch (error) { res.status(400).json({ error: error.message }); }
};

const deletePromotion = async (req, res) => {
  try {
    await prisma.promotions.delete({ where: { id: parseInt(req.params.id) } });
    res.json({ message: "Diskon dihapus!" });
  } catch (error) { res.status(400).json({ error: error.message }); }
};

const getFeedback = async (req, res) => {
  try {
    res.json(await prisma.feedback.findMany({ include: { menu_items: true, orders: { include: { tables: false } } }, orderBy: { created_at: "desc" } }));
  } catch (error) { res.status(400).json({ error: error.message }); }
};

const getUsers = async (req, res) => {
  try { res.json(await prisma.users.findMany({ select: { id: true, username: true, role: true, created_at: true }, orderBy: { role: "asc" } })); } catch (error) { res.status(400).json({ error: error.message }); }
};

const createUser = async (req, res) => {
  const { username, password, role } = req.body;
  try {
    const hashPassword = await bcrypt.hash(password, 10);
    await prisma.users.create({ data: { username, password_hash: hashPassword, role } });
    res.json({ message: "Akun pegawai berhasil dibuat!" });
  } catch (error) { res.status(400).json({ error: "Username sudah terpakai atau input tidak valid." }); }
};

const deleteUser = async (req, res) => {
  try {
    await prisma.users.delete({ where: { id: parseInt(req.params.id) } });
    res.json({ message: "Akun berhasil dihapus!" });
  } catch (error) { res.status(400).json({ error: error.message }); }
};

module.exports = {
  getOrders, updateOrderStatus, printOrderLegacy,
  getReservations, updateReservationStatus, manualReservation, confirmEventReservation, confirmMejaReservation, printEventLegacy,
  getReports, getInventory, updateInventory, getInventoryHistory, getInventoryRequests, processInventoryRequest,
  getAdminPromotions, createPromotion, deletePromotion, getFeedback, getUsers, createUser, deleteUser
};
