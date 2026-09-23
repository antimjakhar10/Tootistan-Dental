const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
      trim: true,
      default: "Patient Guides",
    },

    videoType: {
      type: String,
      enum: ["youtube", "vimeo", "direct", "upload"],
      default: "youtube",
    },

    videoUrl: {
      type: String,
      default: "",
      trim: true,
    },

    videoFile: {
      type: String,
      default: "",
    },

    thumbnailUrl: {
      type: String,
      default: "",
    },

    duration: {
      type: String,
      default: "2:30",
      trim: true,
    },

    description: {
      type: String,
      default: "",
      trim: true,
    },

    isFeatured: {
      type: Boolean,
      default: false,
    },

    isPublished: {
      type: Boolean,
      default: true,
    },

    views: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Video", videoSchema);
