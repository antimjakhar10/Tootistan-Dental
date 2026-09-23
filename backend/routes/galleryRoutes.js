const express = require("express");

const {
  createGallery,
  getPublicGallery,
  getAllGallery,
  updateGallery,
  deleteGallery,
} = require("../controllers/galleryController");

const {
  protect,
  adminOnly,
} = require("../middleware/authMiddleware");

const upload = require("../middleware/uploadMiddleware");

const router = express.Router();

router.get("/public", getPublicGallery);

router.post(
  "/",
  protect,
  adminOnly,
  upload.fields([
    { name: "beforeImage", maxCount: 1 },
    { name: "afterImage", maxCount: 1 },
  ]),
  createGallery
);

router.get(
  "/",
  protect,
  adminOnly,
  getAllGallery
);

router.put(
  "/:id",
  protect,
  adminOnly,
  upload.fields([
    { name: "beforeImage", maxCount: 1 },
    { name: "afterImage", maxCount: 1 },
  ]),
  updateGallery
);

router.delete(
  "/:id",
  protect,
  adminOnly,
  deleteGallery
);

module.exports = router;