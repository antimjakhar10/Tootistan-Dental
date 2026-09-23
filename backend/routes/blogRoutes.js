const express = require("express");
const {
  getPublicBlogs,
  getSingleBlog,
  getAllAdminBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController");

const { protect, adminOnly } = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

const router = express.Router();

// Public routes
router.get("/public", getPublicBlogs);
router.get("/public/:slugOrId", getSingleBlog);

// Admin routes
router.get("/admin/all", protect, adminOnly, getAllAdminBlogs);
router.post("/", protect, adminOnly, upload.single("coverImage"), createBlog);
router.put("/:id", protect, adminOnly, upload.single("coverImage"), updateBlog);
router.delete("/:id", protect, adminOnly, deleteBlog);

module.exports = router;
