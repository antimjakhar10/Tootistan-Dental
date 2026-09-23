const Social = require("../models/Social");

// Helper to extract YouTube embed URL
const getYouTubeEmbedUrl = (url) => {
  if (!url) return "";
  if (url.includes("youtube.com/embed/")) return url;

  let videoId = "";
  if (url.includes("youtu.be/")) {
    videoId = url.split("youtu.be/")[1]?.split("?")[0]?.split("&")[0];
  } else if (url.includes("youtube.com/watch")) {
    const urlObj = new URL(url);
    videoId = urlObj.searchParams.get("v");
  } else if (url.includes("youtube.com/shorts/")) {
    videoId = url.split("youtube.com/shorts/")[1]?.split("?")[0]?.split("&")[0];
  }

  return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
};

// GET /api/socials/public
const getPublicSocials = async (req, res) => {
  try {
    const socials = await Social.find({ isPublished: true }).sort({
      createdAt: -1,
    });
    res.json({ success: true, count: socials.length, socials });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET /api/socials (Admin)
const getAllSocials = async (req, res) => {
  try {
    const socials = await Social.find({}).sort({ createdAt: -1 });
    res.json({ success: true, count: socials.length, socials });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET /api/socials/:id
const getSocialById = async (req, res) => {
  try {
    const social = await Social.findById(req.params.id);
    if (!social) {
      return res
        .status(404)
        .json({ success: false, message: "Social item not found" });
    }
    res.json({ success: true, social });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// POST /api/socials (Admin)
const createSocial = async (req, res) => {
  try {
    const {
      platform,
      postType,
      title,
      caption,
      postUrl,
      thumbnailUrl: bodyThumbnailUrl,
      category,
      likes,
      views,
      isFeatured,
      isPublished,
    } = req.body;

    if (!platform || !title || !postUrl) {
      return res.status(400).json({
        success: false,
        message: "Platform, Title, and Post URL are required fields",
      });
    }

    let finalThumbnail = bodyThumbnailUrl || "";
    if (req.file) {
      finalThumbnail = `/uploads/${req.file.filename}`;
    }

    let computedEmbedUrl = "";
    if (platform === "youtube") {
      computedEmbedUrl = getYouTubeEmbedUrl(postUrl);
    }

    const newSocial = await Social.create({
      platform,
      postType: postType || "post",
      title,
      caption: caption || "",
      postUrl,
      embedUrl: computedEmbedUrl,
      thumbnailUrl: finalThumbnail,
      category: category || "Dental Tips",
      likes: likes || "0",
      views: views || "0",
      isFeatured: isFeatured === "true" || isFeatured === true,
      isPublished:
        isPublished === undefined
          ? true
          : isPublished === "true" || isPublished === true,
    });

    res.status(201).json({
      success: true,
      message: "Social post created successfully",
      social: newSocial,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// PUT /api/socials/:id (Admin)
const updateSocial = async (req, res) => {
  try {
    const social = await Social.findById(req.params.id);
    if (!social) {
      return res
        .status(404)
        .json({ success: false, message: "Social item not found" });
    }

    const {
      platform,
      postType,
      title,
      caption,
      postUrl,
      thumbnailUrl: bodyThumbnailUrl,
      category,
      likes,
      views,
      isFeatured,
      isPublished,
    } = req.body;

    if (platform) social.platform = platform;
    if (postType) social.postType = postType;
    if (title) social.title = title;
    if (caption !== undefined) social.caption = caption;
    if (postUrl) {
      social.postUrl = postUrl;
      if (social.platform === "youtube") {
        social.embedUrl = getYouTubeEmbedUrl(postUrl);
      }
    }
    if (category) social.category = category;
    if (likes !== undefined) social.likes = likes;
    if (views !== undefined) social.views = views;

    if (isFeatured !== undefined) {
      social.isFeatured = isFeatured === "true" || isFeatured === true;
    }
    if (isPublished !== undefined) {
      social.isPublished = isPublished === "true" || isPublished === true;
    }

    if (req.file) {
      social.thumbnailUrl = `/uploads/${req.file.filename}`;
    } else if (bodyThumbnailUrl !== undefined) {
      social.thumbnailUrl = bodyThumbnailUrl;
    }

    await social.save();

    res.json({
      success: true,
      message: "Social item updated successfully",
      social,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// DELETE /api/socials/:id (Admin)
const deleteSocial = async (req, res) => {
  try {
    const social = await Social.findById(req.params.id);
    if (!social) {
      return res
        .status(404)
        .json({ success: false, message: "Social item not found" });
    }

    await Social.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Social item deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// PATCH /api/socials/:id/publish (Admin)
const togglePublished = async (req, res) => {
  try {
    const social = await Social.findById(req.params.id);
    if (!social) {
      return res
        .status(404)
        .json({ success: false, message: "Social item not found" });
    }

    social.isPublished = !social.isPublished;
    await social.save();

    res.json({
      success: true,
      message: `Status changed to ${social.isPublished ? "Published" : "Draft"}`,
      social,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// PATCH /api/socials/:id/feature (Admin)
const toggleFeatured = async (req, res) => {
  try {
    const social = await Social.findById(req.params.id);
    if (!social) {
      return res
        .status(404)
        .json({ success: false, message: "Social item not found" });
    }

    social.isFeatured = !social.isFeatured;
    await social.save();

    res.json({
      success: true,
      message: `Featured status updated`,
      social,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getPublicSocials,
  getAllSocials,
  getSocialById,
  createSocial,
  updateSocial,
  deleteSocial,
  togglePublished,
  toggleFeatured,
};
