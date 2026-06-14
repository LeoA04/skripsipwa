const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");
const menuController = require("../controllers/menuController");
const checkoutController = require("../controllers/checkoutController");
const adminController = require("../controllers/adminController");

// PUBLIC ROUTES
router.post("/login", authController.login);

router.get("/categories", menuController.getCategories);
router.get("/menu", menuController.getMenu);
router.get("/packages", menuController.getPackages);
router.get("/promotions", menuController.getPromotions);

router.get("/tables", checkoutController.getTables);
router.post("/checkout", checkoutController.processCheckout);
router.post("/feedback", checkoutController.postFeedback);

// ADMIN ROUTES
router.get("/admin/orders", adminController.getOrders);
router.patch("/admin/orders/:id/status", adminController.updateOrderStatus);
router.post("/admin/orders/:id/print", adminController.printOrderLegacy);

router.get("/admin/reservations", adminController.getReservations);
router.patch("/admin/reservations/:id/status", adminController.updateReservationStatus);
router.post("/admin/reservations/manual", adminController.manualReservation);
router.post("/admin/reservations/:id/confirm-event", adminController.confirmEventReservation);
router.post("/admin/reservations/:id/confirm-meja", adminController.confirmMejaReservation);
router.post("/admin/reservations/:id/print", adminController.printEventLegacy);

router.get("/admin/reports", adminController.getReports);

router.get("/admin/inventory", adminController.getInventory);
router.patch("/admin/inventory/:id", adminController.updateInventory);
router.get("/admin/inventory-history", adminController.getInventoryHistory);
router.get("/admin/inventory-requests", adminController.getInventoryRequests);
router.patch("/admin/inventory-requests/:id", adminController.processInventoryRequest);

router.get("/admin/promotions", adminController.getAdminPromotions);
router.post("/admin/promotions", adminController.createPromotion);
router.delete("/admin/promotions/:id", adminController.deletePromotion);

router.get("/admin/feedback", adminController.getFeedback);

router.get("/admin/users", adminController.getUsers);
router.post("/admin/users", adminController.createUser);
router.delete("/admin/users/:id", adminController.deleteUser);

module.exports = router;
