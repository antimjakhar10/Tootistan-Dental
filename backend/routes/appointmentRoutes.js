const express = require("express");

const {
  createAppointment,
  getAppointments,
  updateAppointmentStatus,
  deleteAppointment,
} = require("../controllers/appointmentController");

const {
  protect,
  adminOnly,
} = require("../middleware/authMiddleware");

const router = express.Router();

// Public
router.post("/", createAppointment);

// Admin
router.get("/", protect, adminOnly, getAppointments);

router.patch(
  "/:id/status",
  protect,
  adminOnly,
  updateAppointmentStatus
);

router.delete(
  "/:id",
  protect,
  adminOnly,
  deleteAppointment
);

module.exports = router;