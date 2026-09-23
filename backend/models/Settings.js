const mongoose = require("mongoose");

const settingsSchema = new mongoose.Schema(
  {
    phone: {
      type: String,
      default: "+91 81680 62414",
      trim: true,
    },

    altPhone: {
      type: String,
      default: "+91 81680 62414",
      trim: true,
    },

    whatsapp: {
      type: String,
      default: "918168062414",
      trim: true,
    },

    email: {
      type: String,
      default: "info@toothistan.com",
      trim: true,
    },

    address: {
      type: String,
      default: "Toothistan Dental Empire, Premium Healthcare Plaza, Main Road",
      trim: true,
    },

    cityState: {
      type: String,
      default: "Hisar, Haryana, India",
      trim: true,
    },

    weekdayHours: {
      type: String,
      default: "Mon - Tue: 9:00 AM - 6:00 PM",
      trim: true,
    },

    weekendHours: {
      type: String,
      default: "Wed - Sat: 8:00 AM - 5:00 PM",
      trim: true,
    },

    sundayHours: {
      type: String,
      default: "Sunday: Closed / Emergency Only",
      trim: true,
    },

    emergencyText: {
      type: String,
      default: "24/7 Emergency Dental Care Available",
      trim: true,
    },

    mapEmbedUrl: {
      type: String,
      default: "",
      trim: true,
    },

    instagramUrl: {
      type: String,
      default: "https://instagram.com",
      trim: true,
    },

    youtubeUrl: {
      type: String,
      default: "https://youtube.com",
      trim: true,
    },

    instagramHandle: {
      type: String,
      default: "@toothistan_dental",
      trim: true,
    },

    youtubeChannelName: {
      type: String,
      default: "Toothistan Dental",
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Settings", settingsSchema);
