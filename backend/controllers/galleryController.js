const Gallery = require("../models/Gallery");
const fs = require("fs");
const path = require("path");

const deleteFile = (fileUrl) => {
  if (!fileUrl) return;

  const filePath = path.join(
    __dirname,
    "..",
    fileUrl.replace(/^\/+/, "")
  );

  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }
};

const createGallery = async (req, res) => {
  try {
    const {
      title,
      category,
      description,
      isPublished,
    } = req.body;

    if (!title || !category) {
      return res.status(400).json({
        success: false,
        message: "Title and category are required",
      });
    }

    if (!req.files?.beforeImage?.[0] || !req.files?.afterImage?.[0]) {
      return res.status(400).json({
        success: false,
        message: "Before and After images are required",
      });
    }

    const beforeImage = `/uploads/${req.files.beforeImage[0].filename}`;
    const afterImage = `/uploads/${req.files.afterImage[0].filename}`;

    const gallery = await Gallery.create({
      title: title.trim(),
      category: category.trim(),
      description: description?.trim() || "",
      beforeImage,
      afterImage,
      isPublished:
        isPublished === undefined
          ? true
          : isPublished === "true" || isPublished === true,
    });

    res.status(201).json({
      success: true,
      message: "Gallery item created successfully",
      gallery,
    });
  } catch (error) {
    console.error("Create Gallery Error:", error);

    res.status(500).json({
      success: false,
      message: "Unable to create gallery item",
    });
  }
};

const getPublicGallery = async (req, res) => {
  try {
    const gallery = await Gallery.find({
      isPublished: true,
    }).sort({ createdAt: -1 });

    res.json({
      success: true,
      gallery,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to fetch gallery",
    });
  }
};

const getAllGallery = async (req, res) => {
  try {
    const gallery = await Gallery.find()
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      count: gallery.length,
      gallery,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to fetch gallery",
    });
  }
};

const updateGallery = async (req, res) => {
  try {
    const gallery = await Gallery.findById(req.params.id);

    if (!gallery) {
      return res.status(404).json({
        success: false,
        message: "Gallery item not found",
      });
    }

    const {
      title,
      category,
      description,
      isPublished,
    } = req.body;

    if (title !== undefined) gallery.title = title.trim();
    if (category !== undefined)
      gallery.category = category.trim();
    if (description !== undefined)
      gallery.description = description.trim();

    if (isPublished !== undefined) {
      gallery.isPublished =
        isPublished === "true" || isPublished === true;
    }

    if (req.files?.beforeImage?.[0]) {
      deleteFile(gallery.beforeImage);

      gallery.beforeImage =
        `/uploads/${req.files.beforeImage[0].filename}`;
    }

    if (req.files?.afterImage?.[0]) {
      deleteFile(gallery.afterImage);

      gallery.afterImage =
        `/uploads/${req.files.afterImage[0].filename}`;
    }

    await gallery.save();

    res.json({
      success: true,
      message: "Gallery item updated successfully",
      gallery,
    });
  } catch (error) {
    console.error("Update Gallery Error:", error);

    res.status(500).json({
      success: false,
      message: "Unable to update gallery",
    });
  }
};

const deleteGallery = async (req, res) => {
  try {
    const gallery = await Gallery.findByIdAndDelete(
      req.params.id
    );

    if (!gallery) {
      return res.status(404).json({
        success: false,
        message: "Gallery item not found",
      });
    }

    deleteFile(gallery.beforeImage);
    deleteFile(gallery.afterImage);

    res.json({
      success: true,
      message: "Gallery item deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to delete gallery item",
    });
  }
};

module.exports = {
  createGallery,
  getPublicGallery,
  getAllGallery,
  updateGallery,
  deleteGallery,
};