const express = require("express");

const {
  getDashboardStats,
  getUsers,
} = require("../controllers/adminController");

const {
  protect,
  adminOnly,
} = require("../middleware/authMiddleware");

const router = express.Router();

router.get(
  "/dashboard",
  protect,
  adminOnly,
  getDashboardStats
);

router.get(
  "/users",
  protect,
  adminOnly,
  getUsers
);

module.exports = router;