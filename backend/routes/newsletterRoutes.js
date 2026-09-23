const express = require("express");

const {
  subscribe,
  getSubscribers,
  deleteSubscriber,
} = require("../controllers/newsletterController");

const {
  protect,
  adminOnly,
} = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", subscribe);

router.get(
  "/",
  protect,
  adminOnly,
  getSubscribers
);

router.delete(
  "/:id",
  protect,
  adminOnly,
  deleteSubscriber
);

module.exports = router;