const Newsletter = require("../models/Newsletter");

const subscribe = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }

    const cleanEmail = email.toLowerCase().trim();

    const existing = await Newsletter.findOne({
      email: cleanEmail,
    });

    if (existing) {
      if (!existing.isActive) {
        existing.isActive = true;
        await existing.save();
      }

      return res.json({
        success: true,
        message: "You are already subscribed",
      });
    }

    await Newsletter.create({
      email: cleanEmail,
    });

    res.status(201).json({
      success: true,
      message: "Subscribed successfully",
    });
  } catch (error) {
    console.error("Newsletter Error:", error);

    res.status(500).json({
      success: false,
      message: "Unable to subscribe",
    });
  }
};

const getSubscribers = async (req, res) => {
  try {
    const subscribers = await Newsletter.find()
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      count: subscribers.length,
      subscribers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to fetch subscribers",
    });
  }
};

const deleteSubscriber = async (req, res) => {
  try {
    const subscriber =
      await Newsletter.findByIdAndDelete(req.params.id);

    if (!subscriber) {
      return res.status(404).json({
        success: false,
        message: "Subscriber not found",
      });
    }

    res.json({
      success: true,
      message: "Subscriber deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to delete subscriber",
    });
  }
};

module.exports = {
  subscribe,
  getSubscribers,
  deleteSubscriber,
};