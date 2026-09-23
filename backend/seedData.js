const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Testimonial = require("./models/Testimonial");
const Gallery = require("./models/Gallery");
const Video = require("./models/Video");
const Social = require("./models/Social");

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

const videosData = [
  {
    title: "What to Expect During Your First Dental Visit at Toothistan",
    category: "Patient Guides",
    videoType: "youtube",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnailUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop",
    duration: "3:15",
    description: "Walk through your initial dental consultation step by step. Learn how our digital scanning and painless care make your first appointment effortless.",
    isFeatured: true,
    isPublished: true,
    views: 1240,
  },
  {
    title: "Understanding Dental Implants: Step-by-Step Procedure",
    category: "Treatments & Procedures",
    videoType: "youtube",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnailUrl: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200&auto=format&fit=crop",
    duration: "4:40",
    description: "Discover how dental implants restore lost teeth with permanent stability, natural function, and aesthetic perfection.",
    isFeatured: false,
    isPublished: true,
    views: 980,
  },
  {
    title: "Invisalign vs Traditional Braces: Which is Right for You?",
    category: "Treatments & Procedures",
    videoType: "youtube",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnailUrl: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop",
    duration: "5:10",
    description: "Compare clear aligners and modern ceramic braces to choose the best option for comfortable, discreet smile alignment.",
    isFeatured: false,
    isPublished: true,
    views: 1560,
  },
  {
    title: "Daily Oral Hygiene Routine for Long-Lasting Healthy Teeth",
    category: "Oral Hygiene Tips",
    videoType: "youtube",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnailUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1200&auto=format&fit=crop",
    duration: "2:45",
    description: "Expert tips from our chief dental specialists on proper brushing technique, flossing habits, and protecting enamel.",
    isFeatured: false,
    isPublished: true,
    views: 2100,
  },
  {
    title: "Post-Op Care Guide After Wisdom Teeth & Dental Extractions",
    category: "Post-Op Care",
    videoType: "youtube",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnailUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop",
    duration: "3:30",
    description: "Essential home care instructions for fast, painless recovery after wisdom tooth extraction or minor oral surgery.",
    isFeatured: false,
    isPublished: true,
    views: 840,
  },
  {
    title: "Real Patient Stories: Life After Full Mouth Restoration",
    category: "Patient Stories",
    videoType: "youtube",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnailUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
    duration: "4:15",
    description: "Hear inspiring testimonials from real patients whose lives and confidence transformed after treatment at Toothistan.",
    isFeatured: false,
    isPublished: true,
    views: 3120,
  },
];

const Blog = require("./models/Blog");

const blogsData = [
  {
    title: "5 Simple Habits for Maintain Pearly White Teeth All Year Round",
    slug: "5-simple-habits-pearly-white-teeth",
    excerpt: "Discover daily oral hygiene habits, dietary choices, and professional whitening secrets that keep your smile bright, healthy, and stain-free.",
    content: "<h1>Achieving & Maintaining A Radiant White Smile</h1><p>A bright smile is often the first thing people notice about you. While professional teeth whitening offers instant transformation, daily habits play the biggest role in preserving that glow.</p><h2>1. Master Proper Brushing Techniques</h2><p>Brush twice a day using a soft-bristled toothbrush and fluoride toothpaste. Always hold your brush at a 45-degree angle to your gums and make gentle circular motions.</p><h2>2. Don't Skip Flossing</h2><p>Plaque buildup between teeth leads to discoloration along the edges. Flossing daily removes trapped food particles and bacteria before stain-causing plaque forms.</p><h2>3. Watch Stain-Causing Foods and Drinks</h2><p>Coffee, red wine, dark teas, and berry sauces contain strong pigments called chromogens. Use a straw when drinking iced coffee or tea to minimize direct contact with your teeth.</p><blockquote>&quot;Prevention is always easier than restoration. A 2-minute daily routine saves years of dental hassle.&quot;</blockquote>",
    coverImage: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=90",
    category: "Oral Hygiene & Care",
    author: "Dr. Toothistan",
    readTime: "5 min read",
    isPublished: true,
    seoTitle: "5 Habits for Pearly White Teeth | Toothistan Dental Clinic",
    seoDescription: "Learn 5 essential daily habits to keep your teeth sparkling white and healthy. Expert tips from Toothistan Dental Clinic.",
    seoKeywords: "teeth whitening, oral hygiene tips, bright smile, tooth care, dentist advice",
    views: 1420,
  },
  {
    title: "Everything You Need to Know About Invisible Dental Aligners",
    slug: "everything-about-invisible-dental-aligners",
    excerpt: "Thinking about straightening your teeth without traditional metal braces? Here is your complete guide to modern clear aligners.",
    content: "<h1>Clear Aligners: The Modern Way to Straighten Your Smile</h1><p>Gone are the days when straightening your teeth meant years of metal wires and brackets. Modern invisible aligners offer a discreet, comfortable alternative.</p><h2>Why Choose Clear Aligners?</h2><p>Aligners are virtually invisible, removable during meals, and custom engineered using 3D digital smile design scanners.</p>",
    coverImage: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=1200&q=90",
    category: "Orthodontics & Aligners",
    author: "Dr. Toothistan",
    readTime: "6 min read",
    isPublished: true,
    seoTitle: "Guide to Invisible Clear Aligners | Toothistan Dental",
    seoDescription: "Complete guide on clear aligners vs traditional braces. Benefits, process, and cost explained by Toothistan experts.",
    seoKeywords: "clear aligners, invisalign guide, teeth straightening, painless orthodontics",
    views: 980,
  },
];

const socialsData = [
  {
    platform: "instagram",
    postType: "reel",
    title: "Behind the Scenes: Painless Root Canal Experience ✨",
    caption:
      "See how modern laser dentistry makes root canals painless and comfortable! Our patients leave with a smile. #Toothistan #DentalCare #PainlessDentistry",
    postUrl: "https://www.instagram.com/p/C3x9189xL12/",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
    category: "Treatments & Tech",
    likes: "2.4k",
    views: "18.5k",
    isFeatured: true,
    isPublished: true,
  },
  {
    platform: "instagram",
    postType: "post",
    title: "5 Daily Habits for a Brighter, Healthier Smile 🦷",
    caption:
      "Simple changes in your daily routine can double your dental health! Swipe left to learn Dr. Toothistan's top 5 recommendations.",
    postUrl: "https://www.instagram.com/p/C2a8710yM34/",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=800&q=80",
    category: "Oral Hygiene Tips",
    likes: "1.8k",
    views: "9.2k",
    isFeatured: false,
    isPublished: true,
  },
  {
    platform: "youtube",
    postType: "video",
    title: "Complete Guide to Dental Implants | Procedure & Recovery",
    caption:
      "Are dental implants right for you? Watch Dr. Toothistan break down step-by-step how dental implants work, lifespan, and post-procedure care.",
    postUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
    category: "Patient Guides",
    likes: "3.1k",
    views: "42.8k",
    isFeatured: true,
    isPublished: true,
  },
  {
    platform: "youtube",
    postType: "short",
    title: "How Clear Aligners Straighten Teeth in 6 Months ⚡",
    caption:
      "Watch 3D time-lapse transformation of Invisalign clear aligners! #Shorts #Invisalign #SmileMakeover",
    postUrl: "https://www.youtube.com/shorts/dQw4w9WgXcQ",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80",
    category: "Orthodontics",
    likes: "4.9k",
    views: "88.1k",
    isFeatured: true,
    isPublished: true,
  },
  {
    platform: "instagram",
    postType: "reel",
    title: "Smile Makeover Patient Reaction & Transformation ❤️",
    caption:
      "Tears of joy after seeing her brand new smile makeover with porcelain veneers! Thank you for trusting Toothistan.",
    postUrl: "https://www.instagram.com/p/C1z9876xP90/",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=800&q=80",
    category: "Transformations",
    likes: "5.6k",
    views: "34.2k",
    isFeatured: false,
    isPublished: true,
  },
  {
    platform: "youtube",
    postType: "video",
    title: "Top 3 Mistakes to Avoid When Brushing Your Teeth",
    caption:
      "Did you know pressing too hard with your toothbrush damages your gum line? Learn proper technique in this quick 4-minute tutorial.",
    postUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
    category: "Oral Hygiene Tips",
    likes: "2.1k",
    views: "15.4k",
    isFeatured: false,
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

    const countVideos = await Video.countDocuments();
    if (countVideos === 0) {
      console.log("Seeding Video Library...");
      await Video.insertMany(videosData);
      console.log(`Inserted ${videosData.length} Video items successfully!`);
    } else {
      console.log(`Video collection already has ${countVideos} items.`);
    }

    const countBlogs = await Blog.countDocuments();
    if (countBlogs === 0) {
      console.log("Seeding Blogs...");
      await Blog.insertMany(blogsData);
      console.log(`Inserted ${blogsData.length} Blog posts successfully!`);
    } else {
      console.log(`Blog collection already has ${countBlogs} items.`);
    }

    const countSocials = await Social.countDocuments();
    if (countSocials === 0) {
      console.log("Seeding Socials...");
      await Social.insertMany(socialsData);
      console.log(`Inserted ${socialsData.length} Social posts successfully!`);
    } else {
      console.log(`Social collection already has ${countSocials} items.`);
    }

    console.log("Seeding process completed!");
    process.exit(0);
  } catch (error) {
    console.error("Seeding Error:", error);
    process.exit(1);
  }
};

seedDB();
