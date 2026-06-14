const { PrismaClient } = require("@prisma/client");
const mysql = require("mysql2/promise");

const prisma = new PrismaClient();

const legacyDb = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "legacy_rayacafe_db",
});

module.exports = { prisma, legacyDb };
