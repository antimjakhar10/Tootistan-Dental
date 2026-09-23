const mongoose = require("mongoose");

const socialSchema = new mongoose.Schema(
  {
    platform: {
      type: String,
      enum: ["instagram", "youtube"],
      required: true,
    },

    postType: {
      type: String,
      enum: ["post", "reel", "video", "short"],
      default: "post",
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    caption: {
      type: String,
      default: "",
      trim: true,
    },

    postUrl: {
      type: String,
      required: true,
      trim: true,
    },

    embedUrl: {
      type: String,
      default: "",
      trim: true,
    },

    thumbnailUrl: {
      type: String,
      default: "",
      trim: true,
    },

    category: {
      type: String,
      default: "Dental Tips",
      trim: true,
    },

    likes: {
      type: String,
      default: "0",
      trim: true,
    },

    views: {
      type: String,
      default: "0",
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
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Social", socialSchema);
