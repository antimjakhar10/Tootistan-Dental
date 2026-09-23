const express = require("express");

const {
  createContact,
  getContacts,
  updateContactStatus,
  deleteContact,
} = require("../controllers/contactController");

const {
  protect,
  adminOnly,
} = require("../middleware/authMiddleware");

const router = express.Router();

// Public
router.post("/", createContact);

// Admin
router.get("/", protect, adminOnly, getContacts);

router.patch(
  "/:id/status",
  protect,
  adminOnly,
  updateContactStatus
);

router.delete(
  "/:id",
  protect,
  adminOnly,
  deleteContact
);

module.exports = router;