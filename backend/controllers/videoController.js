const fs = require("fs");
const path = require("path");
const Video = require("../models/Video");

// Get all published videos for public site
const getPublicVideos = async (req, res) => {
  try {
    const { category, search } = req.query;

    let query = { isPublished: true };

    if (category && category !== "All" && category !== "all") {
      query.category = category;
    }

    if (search && search.trim() !== "") {
      query.$or = [
        { title: { $regex: search.trim(), $options: "i" } },
        { description: { $regex: search.trim(), $options: "i" } },
      ];
    }

    const videos = await Video.find(query).sort({
      isFeatured: -1,
      createdAt: -1,
    });

    res.json({
      success: true,
      count: videos.length,
      videos,
    });
  } catch (error) {
    console.error("Get Public Videos Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch public videos",
      error: error.message,
    });
  }
};

// Increment view count
const incrementViews = async (req, res) => {
  try {
    const video = await Video.findByIdAndUpdate(
      req.params.id,
      { $inc: { views: 1 } },
      { new: true }
    );

    if (!video) {
      return res.status(404).json({
        success: false,
        message: "Video not found",
      });
    }

    res.json({
      success: true,
      views: video.views,
    });
  } catch (error) {
    console.error("Increment Views Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to increment view count",
    });
  }
};

// Admin: Get all videos (including hidden)
const getAllVideos = async (req, res) => {
  try {
    const videos = await Video.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      count: videos.length,
      videos,
    });
  } catch (error) {
    console.error("Get All Videos Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch videos",
      error: error.message,
    });
  }
};

// Admin: Get single video by ID
const getVideoById = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);

    if (!video) {
      return res.status(404).json({
        success: false,
        message: "Video not found",
      });
    }

    res.json({
      success: true,
      video,
    });
  } catch (error) {
    console.error("Get Video By ID Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch video",
      error: error.message,
    });
  }
};

// Admin: Create video
const createVideo = async (req, res) => {
  try {
    const {
      title,
      category,
      videoType,
      videoUrl,
      duration,
      description,
      isFeatured,
      isPublished,
      views,
    } = req.body;

    let thumbnailUrl = req.body.thumbnailUrl || "";
    let videoFile = "";

    // Handle files if uploaded via multer fields
    if (req.files) {
      if (req.files.thumbnail && req.files.thumbnail[0]) {
        thumbnailUrl = `/uploads/${req.files.thumbnail[0].filename}`;
      }
      if (req.files.videoFile && req.files.videoFile[0]) {
        videoFile = `/uploads/${req.files.videoFile[0].filename}`;
      }
    } else if (req.file) {
      thumbnailUrl = `/uploads/${req.file.filename}`;
    }

    const video = new Video({
      title,
      category: category || "Patient Guides",
      videoType: videoType || "youtube",
      videoUrl: videoUrl || "",
      videoFile,
      thumbnailUrl,
      duration: duration || "2:30",
      description: description || "",
      isFeatured: isFeatured === "true" || isFeatured === true,
      isPublished: isPublished === undefined ? true : (isPublished === "true" || isPublished === true),
      views: views ? parseInt(views) : 0,
    });

    await video.save();

    res.status(201).json({
      success: true,
      message: "Video created successfully",
      video,
    });
  } catch (error) {
    console.error("Create Video Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create video",
      error: error.message,
    });
  }
};

// Admin: Update video
const updateVideo = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);

    if (!video) {
      return res.status(404).json({
        success: false,
        message: "Video not found",
      });
    }

    const {
      title,
      category,
      videoType,
      videoUrl,
      duration,
      description,
      isFeatured,
      isPublished,
      views,
      thumbnailUrl,
    } = req.body;

    if (title !== undefined) video.title = title;
    if (category !== undefined) video.category = category;
    if (videoType !== undefined) video.videoType = videoType;
    if (videoUrl !== undefined) video.videoUrl = videoUrl;
    if (duration !== undefined) video.duration = duration;
    if (description !== undefined) video.description = description;
    if (isFeatured !== undefined)
      video.isFeatured = isFeatured === "true" || isFeatured === true;
    if (isPublished !== undefined)
      video.isPublished = isPublished === "true" || isPublished === true;
    if (views !== undefined) video.views = parseInt(views);
    if (thumbnailUrl !== undefined) video.thumbnailUrl = thumbnailUrl;

    // Handle newly uploaded files
    if (req.files) {
      if (req.files.thumbnail && req.files.thumbnail[0]) {
        video.thumbnailUrl = `/uploads/${req.files.thumbnail[0].filename}`;
      }
      if (req.files.videoFile && req.files.videoFile[0]) {
        video.videoFile = `/uploads/${req.files.videoFile[0].filename}`;
      }
    } else if (req.file) {
      video.thumbnailUrl = `/uploads/${req.file.filename}`;
    }

    await video.save();

    res.json({
      success: true,
      message: "Video updated successfully",
      video,
    });
  } catch (error) {
    console.error("Update Video Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update video",
      error: error.message,
    });
  }
};

// Admin: Delete video
const deleteVideo = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);

    if (!video) {
      return res.status(404).json({
        success: false,
        message: "Video not found",
      });
    }

    // Clean up local uploaded files if any
    const uploadsDir = path.join(__dirname, "../uploads");

    if (video.thumbnailUrl && video.thumbnailUrl.startsWith("/uploads/")) {
      const thumbFileName = video.thumbnailUrl.replace("/uploads/", "");
      const thumbPath = path.join(uploadsDir, thumbFileName);
      if (fs.existsSync(thumbPath)) {
        fs.unlinkSync(thumbPath);
      }
    }

    if (video.videoFile && video.videoFile.startsWith("/uploads/")) {
      const videoFileName = video.videoFile.replace("/uploads/", "");
      const videoFilePath = path.join(uploadsDir, videoFileName);
      if (fs.existsSync(videoFilePath)) {
        fs.unlinkSync(videoFilePath);
      }
    }

    await Video.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Video deleted successfully",
    });
  } catch (error) {
    console.error("Delete Video Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to delete video",
      error: error.message,
    });
  }
};

module.exports = {
  getPublicVideos,
  incrementViews,
  getAllVideos,
  getVideoById,
  createVideo,
  updateVideo,
  deleteVideo,
};
