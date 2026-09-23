const Blog = require("../models/Blog");

// Helper to create URL-friendly slug
const generateSlug = (text) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
};

// @desc    Get public published blogs (with optional category & search filter)
// @route   GET /api/blogs/public
// @access  Public
const getPublicBlogs = async (req, res) => {
  try {
    const { category, search, page = 1, limit = 12 } = req.query;

    const query = { isPublished: true };

    if (category && category !== "All") {
      query.category = category;
    }

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { excerpt: { $regex: search, $options: "i" } },
        { content: { $regex: search, $options: "i" } },
        { seoKeywords: { $regex: search, $options: "i" } },
      ];
    }

    const skip = (Number(page) - 1) * Number(limit);
    const total = await Blog.countDocuments(query);

    const blogs = await Blog.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(Number(limit));

    res.json({
      success: true,
      count: blogs.length,
      total,
      page: Number(page),
      pages: Math.ceil(total / Number(limit)),
      blogs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

// @desc    Get single blog by slug or ID
// @route   GET /api/blogs/public/:slugOrId
// @access  Public
const getSingleBlog = async (req, res) => {
  try {
    const { slugOrId } = req.params;

    let blog = await Blog.findOne({
      $or: [{ slug: slugOrId.toLowerCase() }, { _id: slugOrId.match(/^[0-9a-fA-F]{24}$/) ? slugOrId : null }],
      isPublished: true,
    });

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog post not found",
      });
    }

    // Increment view counter
    blog.views = (blog.views || 0) + 1;
    await blog.save();

    // Fetch related articles (same category, excluding current blog)
    const relatedBlogs = await Blog.find({
      category: blog.category,
      _id: { $ne: blog._id },
      isPublished: true,
    })
      .sort({ createdAt: -1 })
      .limit(3);

    res.json({
      success: true,
      blog,
      relatedBlogs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

// @desc    Get all blogs for Admin (including drafts)
// @route   GET /api/blogs/admin/all
// @access  Private/Admin
const getAllAdminBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({}).sort({ createdAt: -1 });

    res.json({
      success: true,
      count: blogs.length,
      blogs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

// @desc    Create a new blog post
// @route   POST /api/blogs
// @access  Private/Admin
const createBlog = async (req, res) => {
  try {
    const {
      title,
      slug,
      excerpt,
      content,
      category,
      author,
      readTime,
      tags,
      isPublished,
      seoTitle,
      seoDescription,
      seoKeywords,
    } = req.body;

    if (!title || !content) {
      return res.status(400).json({
        success: false,
        message: "Title and Content are required",
      });
    }

    let finalSlug = slug ? generateSlug(slug) : generateSlug(title);

    // Check slug collision
    const existingBlog = await Blog.findOne({ slug: finalSlug });
    if (existingBlog) {
      finalSlug = `${finalSlug}-${Date.now()}`;
    }

    let coverImage = "";
    if (req.file) {
      coverImage = `/uploads/${req.file.filename}`;
    } else if (req.body.coverImage) {
      coverImage = req.body.coverImage;
    }

    const blog = await Blog.create({
      title,
      slug: finalSlug,
      excerpt: excerpt || title,
      content,
      coverImage,
      category: category || "Dental Care",
      author: author || "Dr. Toothistan",
      readTime: readTime || "5 min read",
      tags: tags ? (Array.isArray(tags) ? tags : tags.split(",").map((t) => t.trim())) : [],
      isPublished: isPublished === undefined ? true : Boolean(isPublished === "true" || isPublished === true),
      seoTitle: seoTitle || title,
      seoDescription: seoDescription || excerpt || title,
      seoKeywords: seoKeywords || "",
    });

    res.status(201).json({
      success: true,
      message: "Blog post created successfully",
      blog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error creating blog",
      error: error.message,
    });
  }
};

// @desc    Update blog post
// @route   PUT /api/blogs/:id
// @access  Private/Admin
const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;

    let blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog post not found",
      });
    }

    const {
      title,
      slug,
      excerpt,
      content,
      category,
      author,
      readTime,
      tags,
      isPublished,
      seoTitle,
      seoDescription,
      seoKeywords,
    } = req.body;

    if (title) blog.title = title;
    if (slug) {
      const newSlug = generateSlug(slug);
      if (newSlug !== blog.slug) {
        const slugExists = await Blog.findOne({ slug: newSlug, _id: { $ne: id } });
        blog.slug = slugExists ? `${newSlug}-${Date.now()}` : newSlug;
      }
    }
    if (excerpt !== undefined) blog.excerpt = excerpt;
    if (content) blog.content = content;
    if (category) blog.category = category;
    if (author) blog.author = author;
    if (readTime) blog.readTime = readTime;

    if (tags !== undefined) {
      blog.tags = Array.isArray(tags) ? tags : tags.split(",").map((t) => t.trim());
    }

    if (isPublished !== undefined) {
      blog.isPublished = Boolean(isPublished === "true" || isPublished === true);
    }

    if (seoTitle !== undefined) blog.seoTitle = seoTitle;
    if (seoDescription !== undefined) blog.seoDescription = seoDescription;
    if (seoKeywords !== undefined) blog.seoKeywords = seoKeywords;

    if (req.file) {
      blog.coverImage = `/uploads/${req.file.filename}`;
    } else if (req.body.coverImage) {
      blog.coverImage = req.body.coverImage;
    }

    await blog.save();

    res.json({
      success: true,
      message: "Blog post updated successfully",
      blog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error updating blog",
      error: error.message,
    });
  }
};

// @desc    Delete blog post
// @route   DELETE /api/blogs/:id
// @access  Private/Admin
const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog post not found",
      });
    }

    await blog.deleteOne();

    res.json({
      success: true,
      message: "Blog post deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error deleting blog",
      error: error.message,
    });
  }
};

module.exports = {
  getPublicBlogs,
  getSingleBlog,
  getAllAdminBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
};
