const Testimonial = require("../models/Testimonial");
const fs = require("fs");
const path = require("path");

const createTestimonial = async (req, res) => {
  try {
    const {
      name,
      review,
      rating,
      treatment,
      isPublished,
    } = req.body;

    if (!name || !review) {
      return res.status(400).json({
        success: false,
        message: "Name and review are required",
      });
    }

    const image = req.file
      ? `/uploads/${req.file.filename}`
      : "";

    const testimonial = await Testimonial.create({
      name: name.trim(),
      review: review.trim(),
      rating: Number(rating) || 5,
      treatment: treatment?.trim() || "",
      image,
      isPublished:
        isPublished === undefined
          ? true
          : isPublished === "true" || isPublished === true,
    });

    res.status(201).json({
      success: true,
      message: "Testimonial created successfully",
      testimonial,
    });
  } catch (error) {
    console.error("Create Testimonial Error:", error);

    res.status(500).json({
      success: false,
      message: "Unable to create testimonial",
    });
  }
};

const getPublicTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find({
      isPublished: true,
    }).sort({ createdAt: -1 });

    res.json({
      success: true,
      testimonials,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to fetch testimonials",
    });
  }
};

const getAllTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find()
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      count: testimonials.length,
      testimonials,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to fetch testimonials",
    });
  }
};

const updateTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.findById(
      req.params.id
    );

    if (!testimonial) {
      return res.status(404).json({
        success: false,
        message: "Testimonial not found",
      });
    }

    const {
      name,
      review,
      rating,
      treatment,
      isPublished,
    } = req.body;

    if (name !== undefined) testimonial.name = name.trim();
    if (review !== undefined) testimonial.review = review.trim();
    if (rating !== undefined) testimonial.rating = Number(rating);
    if (treatment !== undefined)
      testimonial.treatment = treatment.trim();

    if (isPublished !== undefined) {
      testimonial.isPublished =
        isPublished === "true" || isPublished === true;
    }

    if (req.file) {
      if (testimonial.image) {
        const oldPath = path.join(
          __dirname,
          "..",
          testimonial.image.replace(/^\/+/, "")
        );

        if (fs.existsSync(oldPath)) {
          fs.unlinkSync(oldPath);
        }
      }

      testimonial.image = `/uploads/${req.file.filename}`;
    } else if (req.body.removeImage === "true" || req.body.removeImage === true) {
      if (testimonial.image) {
        const oldPath = path.join(
          __dirname,
          "..",
          testimonial.image.replace(/^\/+/, "")
        );

        if (fs.existsSync(oldPath)) {
          fs.unlinkSync(oldPath);
        }
      }

      testimonial.image = "";
    }

    await testimonial.save();

    res.json({
      success: true,
      message: "Testimonial updated successfully",
      testimonial,
    });
  } catch (error) {
    console.error("Update Testimonial Error:", error);

    res.status(500).json({
      success: false,
      message: "Unable to update testimonial",
    });
  }
};

const deleteTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.findByIdAndDelete(
      req.params.id
    );

    if (!testimonial) {
      return res.status(404).json({
        success: false,
        message: "Testimonial not found",
      });
    }

    res.json({
      success: true,
      message: "Testimonial deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to delete testimonial",
    });
  }
};

module.exports = {
  createTestimonial,
  getPublicTestimonials,
  getAllTestimonials,
  updateTestimonial,
  deleteTestimonial,
};