const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

const connectDB = require("./config/db");
const contactRoutes = require("./routes/contactRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const authRoutes = require("./routes/authRoutes");

const testimonialRoutes = require("./routes/testimonialRoutes");
const galleryRoutes = require("./routes/galleryRoutes");
const newsletterRoutes = require("./routes/newsletterRoutes");
const adminRoutes = require("./routes/adminRoutes");

dotenv.config();

const app = express();

// MongoDB
connectDB();

// CORS
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Uploads
app.use(
  "/uploads",
  express.static(path.join(__dirname, "uploads"))
);

// Health Check
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Toothistan Backend API is running",
  });
});

// API Routes
app.use("/api/auth", authRoutes);

app.use("/api/contact", contactRoutes);
app.use("/api/appointments", appointmentRoutes);

app.use("/api/testimonials", testimonialRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/newsletter", newsletterRoutes);

app.use("/api/admin", adminRoutes);

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});