const express = require("express");
const cors = require("cors");
const apiRoutes = require("./src/routes/api.routes");
const { checkAutoAccounts } = require("./src/controllers/authController");
const { initializeWhatsAppBot } = require("./src/bot/whatsappBot");

const app = express();

app.use(cors());
app.use(express.json());

// AUTO AKUN (Delay 2 detik)
setTimeout(async () => {
  await checkAutoAccounts();
}, 2000);

// Initialize WhatsApp Bot
initializeWhatsAppBot();

// API Routes
app.get("/", (req, res) => {
  res.send("Backend Siap!");
});

app.use("/api", apiRoutes);

app.listen(3000, () => console.log(`✅ Backend menyala di port 3000`));
