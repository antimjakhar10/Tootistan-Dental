const express = require("express");
const router = express.Router();

const {
  getPublicVideos,
  incrementViews,
  getAllVideos,
  getVideoById,
  createVideo,
  updateVideo,
  deleteVideo,
} = require("../controllers/videoController");

const { protect, adminOnly } = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

const cpUpload = upload.fields([
  { name: "thumbnail", maxCount: 1 },
  { name: "videoFile", maxCount: 1 },
]);

// Public API routes
router.get("/public", getPublicVideos);
router.post("/public/:id/view", incrementViews);

// Protected Admin routes
router.use(protect, adminOnly);

router.get("/", getAllVideos);
router.get("/:id", getVideoById);
router.post("/", cpUpload, createVideo);
router.put("/:id", cpUpload, updateVideo);
router.delete("/:id", deleteVideo);

module.exports = router;
