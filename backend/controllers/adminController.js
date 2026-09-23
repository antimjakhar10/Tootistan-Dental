const Appointment = require("../models/Appointment");
const Contact = require("../models/Contact");
const Testimonial = require("../models/Testimonial");
const Gallery = require("../models/Gallery");
const Newsletter = require("../models/Newsletter");
const User = require("../models/User");

const getDashboardStats = async (req, res) => {
  try {
    const [
      totalAppointments,
      pendingAppointments,
      totalContacts,
      newContacts,
      totalTestimonials,
      publishedTestimonials,
      totalGallery,
      publishedGallery,
      totalSubscribers,
      totalUsers,
      recentAppointments,
      recentContacts,
    ] = await Promise.all([
      Appointment.countDocuments(),
      Appointment.countDocuments({ status: "pending" }),

      Contact.countDocuments(),
      Contact.countDocuments({ status: "new" }),

      Testimonial.countDocuments(),
      Testimonial.countDocuments({ isPublished: true }),

      Gallery.countDocuments(),
      Gallery.countDocuments({ isPublished: true }),

      Newsletter.countDocuments({ isActive: true }),

      User.countDocuments(),

      Appointment.find()
        .sort({ createdAt: -1 })
        .limit(5)
        .lean(),

      Contact.find()
        .sort({ createdAt: -1 })
        .limit(5)
        .lean(),
    ]);

    res.json({
      success: true,
      stats: {
        totalAppointments,
        pendingAppointments,
        totalContacts,
        newContacts,
        totalTestimonials,
        publishedTestimonials,
        totalGallery,
        publishedGallery,
        totalSubscribers,
        totalUsers,
      },
      recentAppointments,
      recentContacts,
    });
  } catch (error) {
    console.error("Dashboard Error:", error);

    res.status(500).json({
      success: false,
      message: "Unable to load dashboard",
    });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find()
      .select("-password")
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      count: users.length,
      users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to fetch users",
    });
  }
};

module.exports = {
  getDashboardStats,
  getUsers,
};