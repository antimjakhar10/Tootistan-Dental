const express = require("express");

const {
  createTestimonial,
  getPublicTestimonials,
  getAllTestimonials,
  updateTestimonial,
  deleteTestimonial,
} = require("../controllers/testimonialController");

const {
  protect,
  adminOnly,
} = require("../middleware/authMiddleware");

const upload = require("../middleware/uploadMiddleware");

const router = express.Router();

router.get("/public", getPublicTestimonials);

router.post(
  "/",
  protect,
  adminOnly,
  upload.single("image"),
  createTestimonial
);

router.get(
  "/",
  protect,
  adminOnly,
  getAllTestimonials
);

router.put(
  "/:id",
  protect,
  adminOnly,
  upload.single("image"),
  updateTestimonial
);

router.delete(
  "/:id",
  protect,
  adminOnly,
  deleteTestimonial
);

module.exports = router;