const { prisma } = require("../config/database");

const getMenu = async (req, res) => {
  try {
    const menus = await prisma.menu_items.findMany({
      where: { status: "ready" },
      include: {
        categories: true,
        recipe_bom: { include: { raw_materials: true } },
      },
    });
    const activePromos = await prisma.promotions.findMany({
      where: { is_active: true, end_date: { gt: new Date() } },
    });

    const menusWithPromos = menus.map((m) => {
      const promo = activePromos.find((p) => p.menu_item_id === m.id);
      let currentPrice = Number(m.price);
      if (promo) {
        if (promo.type === "percent")
          currentPrice -= currentPrice * (Number(promo.value) / 100);
        else currentPrice -= Number(promo.value);
        if (currentPrice < 0) currentPrice = 0;
      }

      let isHabis = false;
      if (m.recipe_bom && m.recipe_bom.length > 0) {
        for (const resep of m.recipe_bom) {
          if (
            Number(resep.raw_materials.current_stock) <
            Number(resep.quantity_required)
          ) {
            isHabis = true;
            break;
          }
        }
      }
      const { recipe_bom, ...menuData } = m; // remove heavy relation data
      return {
        ...menuData,
        original_price: Number(m.price),
        price: currentPrice,
        promo_info: promo,
        is_out_of_stock: isHabis,
      };
    });
    res.json(menusWithPromos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getCategories = async (req, res) => {
  try {
    res.json(await prisma.categories.findMany());
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getPackages = async (req, res) => {
  try {
    res.json(await prisma.packages.findMany());
  } catch (e) {
    res.json([]);
  }
};

const getPromotions = async (req, res) => {
  try {
    res.json(
      await prisma.promotions.findMany({
        where: { is_active: true },
        orderBy: { end_date: "desc" },
      }),
    );
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getMenu, getCategories, getPackages, getPromotions };
