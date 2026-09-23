const dotenv = require("dotenv");
const bcrypt = require("bcryptjs");

const connectDB = require("./config/db");
const User = require("./models/User");

dotenv.config();

const createAdmin = async () => {
  try {
    await connectDB();

    const email = process.env.ADMIN_EMAIL.toLowerCase().trim();

    const existingAdmin = await User.findOne({ email });

    if (existingAdmin) {
      console.log("Admin already exists.");

      process.exit(0);
    }

    const hashedPassword = await bcrypt.hash(
      process.env.ADMIN_PASSWORD,
      12
    );

    const admin = await User.create({
      name: process.env.ADMIN_NAME,
      email,
      password: hashedPassword,
      role: "admin",
      isActive: true,
    });

    console.log("Admin created successfully.");
    console.log(`Admin Email: ${admin.email}`);

    process.exit(0);
  } catch (error) {
    console.error("Admin Creation Error:", error.message);

    process.exit(1);
  }
};

createAdmin();