const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { prisma } = require("../config/database");

const checkAutoAccounts = async () => {
  try {
    const adminExists = await prisma.users.findFirst({ where: { role: "admin" } });
    if (!adminExists) {
      const hashAdmin = await bcrypt.hash("admin123", 10);
      await prisma.users.create({
        data: { username: "admin", password_hash: hashAdmin, role: "admin" },
      });
      console.log("✅ Akun otomatis dibuat: [admin/admin123]");
    }
    
    const kasirExists = await prisma.users.findFirst({ where: { role: "kasir" } });
    if (!kasirExists) {
      const hashKasir = await bcrypt.hash("kasir123", 10);
      await prisma.users.create({
        data: { username: "kasir", password_hash: hashKasir, role: "kasir" },
      });
      console.log("✅ Akun otomatis dibuat: [kasir/kasir123]");
    }
    
    const ownerExists = await prisma.users.findFirst({ where: { role: "owner" } });
    if (!ownerExists) {
      const hashOwner = await bcrypt.hash("owner123", 10);
      await prisma.users.create({
        data: { username: "owner", password_hash: hashOwner, role: "owner" },
      });
      console.log("✅ Akun otomatis dibuat: [owner/owner123]");
    }
  } catch (err) {
    console.log("⚠️ Pengecekan akun gagal: ", err.message);
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await prisma.users.findUnique({ where: { username } });
    if (!user)
      return res.status(401).json({ error: "Username tidak terdaftar!" });
    const isValidPassword = await bcrypt.compare(password, user.password_hash);
    if (!isValidPassword)
      return res.status(401).json({ error: "Kata sandi salah!" });
    const token = jwt.sign(
      { id: user.id, role: user.role, username: user.username },
      "RAHASIA_RAYA_CAFE",
      { expiresIn: "12h" },
    );
    res.json({
      message: "Login Berhasil",
      token,
      user: { username: user.username, role: user.role },
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { login, checkAutoAccounts };
