const express = require("express");
const router = express.Router();

const {
  getPublicSettings,
  getAdminSettings,
  updateSettings,
} = require("../controllers/settingsController");

const { protect, adminOnly } = require("../middleware/authMiddleware");

// Public route to fetch clinic settings
router.get("/public", getPublicSettings);

// Protected Admin routes
router.use(protect, adminOnly);

router.get("/", getAdminSettings);
router.put("/", updateSettings);

module.exports = router;
