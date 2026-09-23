const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Testimonial = require("./models/Testimonial");
const Gallery = require("./models/Gallery");

dotenv.config();

const testimonialsData = [
  {
    name: "Rahul Sharma",
    treatment: "Smile Transformation",
    rating: 5,
    review:
      "The entire experience at Toothistan felt completely different from a regular dental clinic. The team was professional, gentle, and made me feel comfortable throughout my treatment.",
    isPublished: true,
  },
  {
    name: "Neha Kapoor",
    treatment: "Dental Cleaning",
    rating: 5,
    review:
      "Beautiful clinic, caring doctors and a very calm environment. Everything was explained clearly and the treatment was handled with great attention to detail.",
    isPublished: true,
  },
  {
    name: "Amit Verma",
    treatment: "Dental Implants",
    rating: 5,
    review:
      "I was quite nervous before my treatment, but the doctors made the entire process comfortable. The technology and hygiene standards were impressive.",
    isPublished: true,
  },
  {
    name: "Pooja Mehta",
    treatment: "Cosmetic Dentistry",
    rating: 5,
    review:
      "I absolutely loved the personalised approach. My smile looks natural and I finally feel confident about it. Highly recommended.",
    isPublished: true,
  },
  {
    name: "Rohan Malhotra",
    treatment: "Invisalign Alignment",
    rating: 5,
    review:
      "Invisalign treatment at Toothistan was smooth, transparent, and completely hassle-free. Highly satisfied with my results!",
    isPublished: true,
  },
];

const galleryData = [
  {
    title: "Dental Implants",
    category: "Dental Implants",
    beforeImage:
      "https://toothistan.com/wp-content/uploads/2025/08/dental-implants1.png",
    afterImage:
      "https://toothistan.com/wp-content/uploads/2025/08/dental-implants1.png",
    description:
      "A natural-looking smile transformation with carefully planned dental implant treatment.",
    isPublished: true,
  },
  {
    title: "Cosmetic Dentistry",
    category: "Cosmetic Dentistry",
    beforeImage:
      "https://toothistan.com/wp-content/uploads/2025/08/cosmetic-dentistry.png",
    afterImage:
      "https://toothistan.com/wp-content/uploads/2025/08/cosmetic-dentistry.png",
    description:
      "Cosmetic dental care designed to create a cleaner, brighter and more confident smile.",
    isPublished: true,
  },
  {
    title: "Porcelain Veneers",
    category: "Porcelain Veneers",
    beforeImage:
      "https://toothistan.com/wp-content/uploads/2025/08/porcelain-veneers-a.png",
    afterImage:
      "https://toothistan.com/wp-content/uploads/2025/08/porcelain-veneers-a.png",
    description: "A refined smile transformation using cosmetic veneer treatment.",
    isPublished: true,
  },
  {
    title: "Gum Care",
    category: "Gum Care",
    beforeImage:
      "https://toothistan.com/wp-content/uploads/2025/08/gum-disease.png",
    afterImage:
      "https://toothistan.com/wp-content/uploads/2025/08/gum-disease.png",
    description:
      "Focused dental care to improve the appearance and health of the gums.",
    isPublished: true,
  },
  {
    title: "Full Mouth Reconstruction",
    category: "Full Mouth Reconstruction",
    beforeImage:
      "https://toothistan.com/wp-content/uploads/2025/08/full-mouth-reconstruction-e1754477376665.png",
    afterImage:
      "https://toothistan.com/wp-content/uploads/2025/08/full-mouth-reconstruction-e1754477376665.png",
    description:
      "Comprehensive dental treatment planned around the patient's overall smile and oral health.",
    isPublished: true,
  },
];

const seedDB = async () => {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected.");

    const countTestimonials = await Testimonial.countDocuments();
    if (countTestimonials === 0) {
      console.log("Seeding Testimonials...");
      await Testimonial.insertMany(testimonialsData);
      console.log(`Inserted ${testimonialsData.length} Testimonials successfully!`);
    } else {
      console.log(`Testimonials collection already has ${countTestimonials} items.`);
    }

    const countGallery = await Gallery.countDocuments();
    if (countGallery === 0) {
      console.log("Seeding Gallery Items...");
      await Gallery.insertMany(galleryData);
      console.log(`Inserted ${galleryData.length} Gallery items successfully!`);
    } else {
      console.log(`Gallery collection already has ${countGallery} items.`);
    }

    console.log("Seeding process completed!");
    process.exit(0);
  } catch (error) {
    console.error("Seeding Error:", error);
    process.exit(1);
  }
};

seedDB();
