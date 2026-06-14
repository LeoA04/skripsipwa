const { prisma } = require("../config/database");

const getTables = async (req, res) => {
  try {
    res.json(await prisma.tables.findMany());
  } catch (e) {
    res.json([]);
  }
};

const processCheckout = async (req, res) => {
  const { table_id, items } = req.body;
  try {
    const result = await prisma.$transaction(async (tx) => {
      let subtotal_bayar = 0;
      let total_potongan = 0;
      let total_asli = 0;

      // Resolve table_id: cari ID yang benar berdasarkan nomor meja
      let validTableId = parseInt(table_id);
      const tableRecord = await tx.tables.findFirst({
        where: { table_number: parseInt(table_id) },
      });
      if (tableRecord) {
        validTableId = tableRecord.id;
      } else {
        // Jika nomor meja belum ada di tabel tables, gunakan tabel pertama sebagai fallback
        const firstTable = await tx.tables.findFirst({
          orderBy: { id: "asc" },
        });
        if (firstTable) validTableId = firstTable.id;
      }

      const itemsToCreate = [];

      for (const item of items) {
        const menu = await tx.menu_items.findUnique({
          where: { id: item.menu_item_id },
          include: { recipe_bom: { include: { raw_materials: true } } },
        });
        const promo = await tx.promotions.findFirst({
          where: {
            menu_item_id: menu.id,
            is_active: true,
            end_date: { gt: new Date() },
          },
        });

        let basePrice = Number(menu.price);
        let finalPrice = basePrice;
        if (promo) {
          if (promo.type === "percent")
            finalPrice -= finalPrice * (Number(promo.value) / 100);
          else finalPrice -= Number(promo.value);
          if (finalPrice < 0) finalPrice = 0;
        }
        total_asli += basePrice * item.quantity;
        subtotal_bayar += finalPrice * item.quantity;
        total_potongan += (basePrice - finalPrice) * item.quantity;

        itemsToCreate.push({
          menu_item_id: item.menu_item_id,
          quantity: item.quantity,
          price_at_order: basePrice,
          notes: item.notes || "",
        });

        for (const resep of menu.recipe_bom) {
          const kebutuhan = Number(resep.quantity_required) * item.quantity;
          if (Number(resep.raw_materials.current_stock) < kebutuhan)
            throw new Error(`Stok ${resep.raw_materials.name} tidak cukup!`);
          await tx.raw_materials.update({
            where: { id: resep.raw_material_id },
            data: { current_stock: { decrement: kebutuhan } },
          });
        }
      }

      const taxAmount = (subtotal_bayar * 10) / 100;
      const serviceAmount = (subtotal_bayar * 5) / 100;
      const finalTotalWithTax = subtotal_bayar + taxAmount + serviceAmount;

      return await tx.orders.create({
        data: {
          table_id: validTableId,
          subtotal: total_asli,
          discount_amount: total_potongan,
          tax_amount: taxAmount,
          service_amount: serviceAmount,
          final_total: finalTotalWithTax,
          status: "pending",
          order_items: {
            create: itemsToCreate,
          },
        },
      });
    });
    res.json({ message: "Berhasil checkout!", data: result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postFeedback = async (req, res) => {
  const { order_id, feedbacks } = req.body;
  try {
    const result = await prisma.feedback.createMany({
      data: feedbacks.map((f) => ({
        order_id: parseInt(order_id),
        menu_item_id: parseInt(f.menu_item_id),
        rating: parseInt(f.rating),
        review_text: f.review_text || "",
      })),
    });
    res.json({ message: "Terima kasih atas ulasan Anda!", data: result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { processCheckout, postFeedback, getTables };
