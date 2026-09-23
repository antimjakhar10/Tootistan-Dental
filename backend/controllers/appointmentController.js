const Appointment = require("../models/Appointment");

const createAppointment = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      date,
      department,
      doctor,
      note,
    } = req.body;

    if (!name || !email || !phone || !date) {
      return res.status(400).json({
        success: false,
        message:
          "Name, email, phone and appointment date are required",
      });
    }

    const appointment = await Appointment.create({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      phone: phone.trim(),
      date,
      department: department?.trim() || "",
      doctor: doctor?.trim() || "",
      note: note?.trim() || "",
    });

    res.status(201).json({
      success: true,
      message: "Appointment request submitted successfully",
      appointment,
    });
  } catch (error) {
    console.error("Create Appointment Error:", error);

    res.status(500).json({
      success: false,
      message: "Unable to submit appointment request",
    });
  }
};

const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find()
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: appointments.length,
      appointments,
    });
  } catch (error) {
    console.error("Get Appointments Error:", error);

    res.status(500).json({
      success: false,
      message: "Unable to fetch appointments",
    });
  }
};

const updateAppointmentStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const allowedStatuses = [
      "pending",
      "confirmed",
      "completed",
      "cancelled",
    ];

    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid appointment status",
      });
    }

    const appointment =
      await Appointment.findByIdAndUpdate(
        req.params.id,
        { status },
        { new: true }
      );

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: "Appointment not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Appointment status updated",
      appointment,
    });
  } catch (error) {
    console.error(
      "Update Appointment Error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Unable to update appointment",
    });
  }
};

const deleteAppointment = async (req, res) => {
  try {
    const appointment =
      await Appointment.findByIdAndDelete(
        req.params.id
      );

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: "Appointment not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Appointment deleted successfully",
    });
  } catch (error) {
    console.error(
      "Delete Appointment Error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Unable to delete appointment",
    });
  }
};

module.exports = {
  createAppointment,
  getAppointments,
  updateAppointmentStatus,
  deleteAppointment,
};