const express = require("express");
const router = express.Router();

const {
  getPublicSocials,
  getAllSocials,
  getSocialById,
  createSocial,
  updateSocial,
  deleteSocial,
  togglePublished,
  toggleFeatured,
} = require("../controllers/socialController");

const { protect, adminOnly } = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

// Public API route
router.get("/public", getPublicSocials);

// Protected Admin routes
router.use(protect, adminOnly);

router.get("/", getAllSocials);
router.get("/:id", getSocialById);
router.post("/", upload.single("thumbnail"), createSocial);
router.put("/:id", upload.single("thumbnail"), updateSocial);
router.delete("/:id", deleteSocial);
router.patch("/:id/publish", togglePublished);
router.patch("/:id/feature", toggleFeatured);

module.exports = router;
