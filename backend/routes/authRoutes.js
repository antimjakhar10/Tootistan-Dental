const express = require("express");

const {
  loginAdmin,
  getMe,
} = require("../controllers/authController");

const {
  protect,
  adminOnly,
} = require("../middleware/authMiddleware");

const router = express.Router();

// Admin Login
router.post("/admin/login", loginAdmin);

// Logged-in Admin/User
router.get("/me", protect, adminOnly, getMe);

module.exports = router;