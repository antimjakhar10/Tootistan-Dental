import React from "react";
import { motion } from "framer-motion";

// Helper component for floating subtle sparkles
const FloatingSparkles = ({ color = "#e5b757" }) => (
  <g className="pointer-events-none opacity-60">
    <motion.path
      d="M30 25 L32 18 L34 25 L41 27 L34 29 L32 36 L30 29 L23 27 Z"
      fill={color}
      animate={{
        scale: [0.7, 1.1, 0.7],
        opacity: [0.2, 0.7, 0.2],
        rotate: [0, 45, 90],
      }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.path
      d="M130 35 L131.5 30 L133 35 L138 36.5 L133 38 L131.5 43 L130 38 L125 36.5 Z"
      fill={color}
      animate={{
        scale: [1, 0.7, 1],
        opacity: [0.3, 0.8, 0.3],
        rotate: [0, -30, 0],
      }}
      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
    />
  </g>
);

// Soft stroke color for light background aesthetics
const STROKE_COLOR = "#786857";

// 1. Tooth Brushing Character (Light Background Version)
export const ToothBrushingMascot = ({ className = "h-20 w-20", animate = true }) => {
  return (
    <motion.div
      animate={
        animate
          ? {
              y: [0, -10, 0],
              rotate: [0, 2, -2, 0],
            }
          : {}
      }
      transition={{
        duration: 4.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`relative inline-block ${className}`}
    >
      <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full opacity-90">
        <FloatingSparkles color="#38bdf8" />

        {/* Floating Foam Bubbles */}
        <motion.circle
          cx="62"
          cy="34"
          r="9"
          fill="#f0f9ff"
          stroke={STROKE_COLOR}
          strokeWidth="1.8"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="80"
          cy="26"
          r="11"
          fill="#e0f2fe"
          stroke={STROKE_COLOR}
          strokeWidth="2"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        />
        <motion.circle
          cx="98"
          cy="32"
          r="8"
          fill="#f0f9ff"
          stroke={STROKE_COLOR}
          strokeWidth="1.8"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 2.3, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        />

        {/* Tooth Body */}
        <path
          d="M50 52 C45 38, 60 34, 80 36 C100 34, 115 38, 110 52 C120 72, 118 98, 105 124 C98 137, 88 134, 82 117 C80 113, 80 113, 78 117 C72 134, 62 137, 55 124 C42 98, 40 72, 50 52 Z"
          fill="#ffffff"
          stroke={STROKE_COLOR}
          strokeWidth="2.8"
          strokeLinejoin="round"
        />

        {/* Gloss Curve */}
        <path d="M54 62 C50 76, 50 92, 56 106" stroke="#f4ebd5" strokeWidth="2.5" strokeLinecap="round" />

        {/* Eyes */}
        <ellipse cx="66" cy="66" rx="3.5" ry="5.5" fill={STROKE_COLOR} />
        <ellipse cx="94" cy="66" rx="3.5" ry="5.5" fill={STROKE_COLOR} />
        <circle cx="65" cy="64" r="1.2" fill="#ffffff" />
        <circle cx="93" cy="64" r="1.2" fill="#ffffff" />

        {/* Rosy Cheeks */}
        <ellipse cx="57" cy="73" rx="4" ry="2.5" fill="#fca5a5" opacity="0.7" />
        <ellipse cx="103" cy="73" rx="4" ry="2.5" fill="#fca5a5" opacity="0.7" />

        {/* Smile */}
        <path d="M70 76 Q80 87 90 76" stroke={STROKE_COLOR} strokeWidth="2.8" strokeLinecap="round" fill="none" />

        {/* Animated Toothbrush & Arm */}
        <motion.g
          animate={animate ? { rotate: [0, -12, 6, 0], x: [0, -2, 2, 0] } : {}}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M48 76 C35 73, 28 62, 36 49" stroke={STROKE_COLOR} strokeWidth="2.8" strokeLinecap="round" fill="none" />
          <rect x="18" y="54" width="46" height="7" rx="3.5" transform="rotate(-36 18 54)" fill="#c48f32" stroke={STROKE_COLOR} strokeWidth="1.8" />
          <rect x="40" y="32" width="13" height="7" rx="2" transform="rotate(-36 40 32)" fill="#38bdf8" stroke={STROKE_COLOR} strokeWidth="1.8" />
        </motion.g>   

        {/* Right Thumbs Up Arm */}
        <motion.g
          animate={animate ? { rotate: [0, 6, -3, 0] } : {}}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M110 76 C122 74, 128 80, 126 88" stroke={STROKE_COLOR} strokeWidth="2.8" strokeLinecap="round" fill="none" />
          <circle cx="127" cy="83" r="4" fill="#ffffff" stroke={STROKE_COLOR} strokeWidth="1.8" />
          <path d="M127 79 L127 74" stroke={STROKE_COLOR} strokeWidth="2" strokeLinecap="round" />
        </motion.g>
      </svg>
    </motion.div>
  );
};

// 2. King Tooth Mascot (Light Background Version)
export const ToothKingMascot = ({ className = "h-20 w-20", animate = true }) => {
  return (
    <motion.div
      animate={
        animate
          ? {
              y: [0, -10, 0],
              rotate: [0, 2, -2, 0],
            }
          : {}
      }
      transition={{
        duration: 4.8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`relative inline-block ${className}`}
    >
      <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full opacity-90">
        <FloatingSparkles color="#e5b757" />

        {/* Cape */}
        <path
          d="M48 65 C30 80, 18 125, 45 140 C55 144, 105 144, 115 140 C142 125, 130 80, 112 65 Z"
          fill="#d9a34a"
          opacity="0.85"
          stroke={STROKE_COLOR}
          strokeWidth="2.2"
          strokeLinejoin="round"
        />

        {/* Crown */}
        <motion.g
          animate={animate ? { y: [0, -2, 0] } : {}}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <path
            d="M56 38 L62 18 L72 32 L80 14 L88 32 L98 18 L104 38 Z"
            fill="#e5b757"
            stroke={STROKE_COLOR}
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <circle cx="62" cy="18" r="2.5" fill="#ef4444" stroke={STROKE_COLOR} strokeWidth="1.2" />
          <circle cx="80" cy="14" r="3.5" fill="#3b82f6" stroke={STROKE_COLOR} strokeWidth="1.2" />
          <circle cx="98" cy="18" r="2.5" fill="#ef4444" stroke={STROKE_COLOR} strokeWidth="1.2" />
        </motion.g>

        {/* Tooth Body */}
        <path
          d="M50 48 C45 35, 60 31, 80 33 C100 31, 115 35, 110 48 C120 68, 118 94, 105 120 C98 133, 88 130, 82 113 C80 109, 80 109, 78 113 C72 130, 62 133, 55 120 C42 94, 40 68, 50 48 Z"
          fill="#ffffff"
          stroke={STROKE_COLOR}
          strokeWidth="2.8"
          strokeLinejoin="round"
        />

        {/* Eyes */}
        <ellipse cx="66" cy="62" rx="3.5" ry="5" fill={STROKE_COLOR} />
        <circle cx="66" cy="60" r="1.2" fill="#ffffff" />
        <path d="M89 63 Q95 56 101 63" stroke={STROKE_COLOR} strokeWidth="2.5" strokeLinecap="round" fill="none" />

        {/* Rosy Cheeks */}
        <ellipse cx="58" cy="70" rx="3.5" ry="2" fill="#fca5a5" opacity="0.7" />
        <ellipse cx="102" cy="70" rx="3.5" ry="2" fill="#fca5a5" opacity="0.7" />

        {/* Smile */}
        <path d="M72 73 Q80 82 88 73" stroke={STROKE_COLOR} strokeWidth="2.5" strokeLinecap="round" fill="none" />

        {/* Waving Arm */}
        <motion.path
          d="M108 70 C122 63, 130 50, 126 40"
          stroke={STROKE_COLOR}
          strokeWidth="2.8"
          strokeLinecap="round"
          fill="none"
          animate={animate ? { rotate: [0, 10, -5, 0] } : {}}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <circle cx="126" cy="39" r="4" fill="#ffffff" stroke={STROKE_COLOR} strokeWidth="2" />
      </svg>
    </motion.div>
  );
};

// 3. Tooth Doctor Mascot (Light Background Version)
export const ToothDoctorMascot = ({ className = "h-20 w-20", animate = true }) => {
  return (
    <motion.div
      animate={
        animate
          ? {
              y: [0, -10, 0],
              rotate: [0, 2, -2, 0],
            }
          : {}
      }
      transition={{
        duration: 4.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`relative inline-block ${className}`}
    >
      <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full opacity-90">
        <FloatingSparkles color="#14b8a6" />

        {/* Headband & Lens */}
        <rect x="52" y="32" width="56" height="4" rx="2" fill={STROKE_COLOR} />
        <circle cx="80" cy="32" r="7" fill="#e2e8f0" stroke={STROKE_COLOR} strokeWidth="1.8" />
        <circle cx="80" cy="32" r="3.5" fill="#38bdf8" />

        {/* Tooth Body */}
        <path
          d="M48 45 C42 32, 58 28, 80 30 C102 28, 118 32, 112 45 C122 65, 120 90, 106 115 C98 128, 88 125, 82 108 C80 104, 80 104, 78 108 C72 125, 62 128, 54 115 C40 90, 38 65, 48 45 Z"
          fill="#ffffff"
          stroke={STROKE_COLOR}
          strokeWidth="2.8"
          strokeLinejoin="round"
        />

        {/* Eyes */}
        <circle cx="64" cy="53" r="4" fill={STROKE_COLOR} />
        <circle cx="64" cy="51" r="1.2" fill="#ffffff" />
        <circle cx="96" cy="53" r="4" fill={STROKE_COLOR} />
        <circle cx="96" cy="51" r="1.2" fill="#ffffff" />

        {/* Doctor Mask */}
        <rect x="52" y="63" width="56" height="24" rx="5" fill="#2dd4bf" opacity="0.85" stroke={STROKE_COLOR} strokeWidth="2" />
        <line x1="52" y1="68" x2="38" y2="58" stroke={STROKE_COLOR} strokeWidth="1.5" />
        <line x1="52" y1="82" x2="38" y2="86" stroke={STROKE_COLOR} strokeWidth="1.5" />
        <line x1="108" y1="68" x2="122" y2="58" stroke={STROKE_COLOR} strokeWidth="1.5" />
        <line x1="108" y1="82" x2="122" y2="86" stroke={STROKE_COLOR} strokeWidth="1.5" />

        {/* Left Arm Explorer */}
        <path d="M48 78 C35 76, 28 64, 32 50" stroke={STROKE_COLOR} strokeWidth="2.8" strokeLinecap="round" fill="none" />
        <line x1="30" y1="65" x2="25" y2="35" stroke={STROKE_COLOR} strokeWidth="2.2" strokeLinecap="round" />
        <path d="M25 35 Q20 28 26 23" stroke={STROKE_COLOR} strokeWidth="2" fill="none" strokeLinecap="round" />

        {/* Right Arm Dental Mirror */}
        <motion.g
          animate={animate ? { rotate: [0, 6, -3, 0] } : {}}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M112 78 C125 76, 132 64, 128 50" stroke={STROKE_COLOR} strokeWidth="2.8" strokeLinecap="round" fill="none" />
          <line x1="130" y1="65" x2="135" y2="35" stroke={STROKE_COLOR} strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="137" cy="30" r="6.5" fill="#e5b757" stroke={STROKE_COLOR} strokeWidth="1.8" />
          <circle cx="137" cy="30" r="4" fill="#ffffff" />
        </motion.g>
      </svg>
    </motion.div>
  );
};

// 4. Tooth Fairy Mascot (Light Background Version)
export const ToothFairyMascot = ({ className = "h-20 w-20", animate = true }) => {
  return (
    <motion.div
      animate={
        animate
          ? {
              y: [0, -12, 0],
              rotate: [0, 2, -2, 0],
            }
          : {}
      }
      transition={{
        duration: 4.2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`relative inline-block ${className}`}
    >
      <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full opacity-90">
        <FloatingSparkles color="#ec4899" />

        {/* Fairy Wings */}
        <motion.g
          animate={animate ? { scaleX: [1, 1.1, 0.95, 1] } : {}}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <path
            d="M48 60 C20 40, 5 70, 30 90 C15 105, 30 120, 48 100 Z"
            fill="#fbcfe8"
            opacity="0.75"
            stroke={STROKE_COLOR}
            strokeWidth="2"
          />
          <path
            d="M112 60 C140 40, 155 70, 130 90 C145 105, 130 120, 112 100 Z"
            fill="#fbcfe8"
            opacity="0.75"
            stroke={STROKE_COLOR}
            strokeWidth="2"
          />
        </motion.g>

        {/* Tiara */}
        <path
          d="M62 36 L68 24 L76 32 L80 20 L84 32 L92 24 L98 36 Z"
          fill="#f472b6"
          stroke={STROKE_COLOR}
          strokeWidth="1.8"
        />

        {/* Tooth Body */}
        <path
          d="M50 48 C45 35, 60 31, 80 33 C100 31, 115 35, 110 48 C120 68, 118 94, 105 120 C98 133, 88 130, 82 113 C80 109, 80 109, 78 113 C72 130, 62 133, 55 120 C42 94, 40 68, 50 48 Z"
          fill="#ffffff"
          stroke={STROKE_COLOR}
          strokeWidth="2.8"
          strokeLinejoin="round"
        />

        {/* Eyes */}
        <circle cx="66" cy="62" r="4" fill={STROKE_COLOR} />
        <circle cx="66" cy="60" r="1.2" fill="#ffffff" />
        <ellipse cx="94" cy="62" rx="3.5" ry="5" fill={STROKE_COLOR} />
        <circle cx="94" cy="60" r="1.2" fill="#ffffff" />

        {/* Rosy Cheeks */}
        <ellipse cx="58" cy="70" rx="3.5" ry="2" fill="#f472b6" opacity="0.6" />
        <ellipse cx="102" cy="70" rx="3.5" ry="2" fill="#f472b6" opacity="0.6" />

        {/* Smile */}
        <path d="M72 72 Q80 80 88 72" stroke={STROKE_COLOR} strokeWidth="2.5" strokeLinecap="round" fill="none" />

        {/* Wand Arm */}
        <motion.g
          animate={animate ? { rotate: [0, -8, 4, 0] } : {}}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M48 74 C36 70, 26 58, 30 45" stroke={STROKE_COLOR} strokeWidth="2.8" strokeLinecap="round" fill="none" />
          <line x1="28" y1="50" x2="16" y2="24" stroke="#c48f32" strokeWidth="2.2" strokeLinecap="round" />
          <polygon
            points="16,14 19,21 26,22 21,27 22,34 16,30 10,34 11,27 6,22 13,21"
            fill="#e5b757"
            stroke={STROKE_COLOR}
            strokeWidth="1.2"
          />
        </motion.g>
      </svg>
    </motion.div>
  );
};

// 5. Superhero Shield Tooth Mascot (Light Background Version)
export const ToothShieldMascot = ({ className = "h-20 w-20", animate = true }) => {
  return (
    <motion.div
      animate={
        animate
          ? {
              y: [0, -10, 0],
              rotate: [0, -2, 2, 0],
            }
          : {}
      }
      transition={{
        duration: 4.6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`relative inline-block ${className}`}
    >
      <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full opacity-90">
        <FloatingSparkles color="#6366f1" />

        {/* Cape */}
        <path
          d="M45 60 C25 75, 15 120, 40 135 C50 138, 110 138, 120 135 C145 120, 135 75, 115 60 Z"
          fill="#60a5fa"
          opacity="0.8"
          stroke={STROKE_COLOR}
          strokeWidth="2.2"
        />

        {/* Tooth Body */}
        <path
          d="M50 48 C45 35, 60 31, 80 33 C100 31, 115 35, 110 48 C120 68, 118 94, 105 120 C98 133, 88 130, 82 113 C80 109, 80 109, 78 113 C72 130, 62 133, 55 120 C42 94, 40 68, 50 48 Z"
          fill="#ffffff"
          stroke={STROKE_COLOR}
          strokeWidth="2.8"
          strokeLinejoin="round"
        />

        {/* Headband */}
        <rect x="52" y="52" width="56" height="17" rx="4" fill="#3b82f6" opacity="0.85" stroke={STROKE_COLOR} strokeWidth="1.8" />
        <circle cx="66" cy="60" r="3" fill="#ffffff" />
        <circle cx="94" cy="60" r="3" fill="#ffffff" />

        {/* Smile */}
        <path d="M72 78 Q80 85 88 78" stroke={STROKE_COLOR} strokeWidth="2.5" strokeLinecap="round" fill="none" />

        {/* Shield */}
        <motion.g
          animate={animate ? { scale: [1, 1.04, 1] } : {}}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <path
            d="M95 65 L125 65 C125 90, 110 105, 110 105 C110 105, 95 90, 95 65 Z"
            fill="#e5b757"
            stroke={STROKE_COLOR}
            strokeWidth="2.2"
          />
          <polygon
            points="110,73 112,78 117,79 113,83 114,88 110,85 106,88 107,83 103,79 108,78"
            fill="#ffffff"
            stroke={STROKE_COLOR}
            strokeWidth="1.2"
          />
        </motion.g>
      </svg>
    </motion.div>
  );
};

// 6. Cool Sunglasses Tooth Mascot (Light Background Version)
export const ToothCoolMascot = ({ className = "h-20 w-20", animate = true }) => {
  return (
    <motion.div
      animate={
        animate
          ? {
              y: [0, -10, 0],
              rotate: [0, 2, -2, 0],
            }
          : {}
      }
      transition={{
        duration: 4.4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`relative inline-block ${className}`}
    >
      <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full opacity-90">
        <FloatingSparkles color="#f59e0b" />

        {/* Tooth Body */}
        <path
          d="M50 48 C45 35, 60 31, 80 33 C100 31, 115 35, 110 48 C120 68, 118 94, 105 120 C98 133, 88 130, 82 113 C80 109, 80 109, 78 113 C72 130, 62 133, 55 120 C42 94, 40 68, 50 48 Z"
          fill="#ffffff"
          stroke={STROKE_COLOR}
          strokeWidth="2.8"
          strokeLinejoin="round"
        />

        {/* Sunglasses */}
        <motion.g
          animate={animate ? { y: [0, -1, 0] } : {}}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M46 56 H114 L108 72 H52 Z" fill="#334155" stroke={STROKE_COLOR} strokeWidth="2.2" strokeLinejoin="round" />
          <line x1="72" y1="56" x2="88" y2="56" stroke={STROKE_COLOR} strokeWidth="3" />
          <line x1="52" y1="60" x2="68" y2="68" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
          <line x1="88" y1="60" x2="104" y2="68" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
        </motion.g>

        {/* Cheeks */}
        <ellipse cx="56" cy="78" rx="4" ry="2.5" fill="#fca5a5" opacity="0.7" />
        <ellipse cx="104" cy="78" rx="4" ry="2.5" fill="#fca5a5" opacity="0.7" />

        {/* Smile */}
        <path d="M68 80 Q80 91 92 80" stroke={STROKE_COLOR} strokeWidth="2.8" strokeLinecap="round" fill="none" />

        {/* Peace Arm */}
        <path d="M48 76 C36 74, 28 66, 32 54" stroke={STROKE_COLOR} strokeWidth="2.8" strokeLinecap="round" fill="none" />
        <circle cx="32" cy="52" r="4" fill="#ffffff" stroke={STROKE_COLOR} strokeWidth="1.8" />
        <line x1="30" y1="48" x2="26" y2="40" stroke={STROKE_COLOR} strokeWidth="2" strokeLinecap="round" />
        <line x1="34" y1="48" x2="36" y2="39" stroke={STROKE_COLOR} strokeWidth="2" strokeLinecap="round" />
      </svg>
    </motion.div>
  );
};

// 7. Heart Love Tooth Mascot (Light Background Version)
export const ToothLoveMascot = ({ className = "h-20 w-20", animate = true }) => {
  return (
    <motion.div
      animate={
        animate
          ? {
              y: [0, -8, 0],
              scale: [1, 1.02, 1],
            }
          : {}
      }
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`relative inline-block ${className}`}
    >
      <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full opacity-90">
        {/* Floating Heart */}
        <motion.path
          d="M130 40 C130 35, 122 30, 118 35 C114 30, 106 35, 106 40 C106 48, 118 54, 118 54 C118 54, 130 48, 130 40 Z"
          fill="#fb7185"
          opacity="0.75"
          animate={{ y: [0, -8, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Tooth Body */}
        <path
          d="M50 48 C45 35, 60 31, 80 33 C100 31, 115 35, 110 48 C120 68, 118 94, 105 120 C98 133, 88 130, 82 113 C80 109, 80 109, 78 113 C72 130, 62 133, 55 120 C42 94, 40 68, 50 48 Z"
          fill="#ffffff"
          stroke={STROKE_COLOR}
          strokeWidth="2.8"
          strokeLinejoin="round"
        />

        {/* Eyes */}
        <path d="M60 60 Q66 54 72 60" stroke={STROKE_COLOR} strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M88 60 Q94 54 100 60" stroke={STROKE_COLOR} strokeWidth="2.5" strokeLinecap="round" fill="none" />

        {/* Cheeks */}
        <ellipse cx="56" cy="67" rx="4.5" ry="2.5" fill="#fb7185" opacity="0.75" />
        <ellipse cx="104" cy="67" rx="4.5" ry="2.5" fill="#fb7185" opacity="0.75" />

        <ellipse cx="80" cy="68" rx="2.5" ry="3.5" fill={STROKE_COLOR} />

        {/* Hugged Heart */}
        <motion.path
          d="M96 74 C106 60, 122 72, 104 94 C96 102, 80 114, 80 114 C80 114, 64 102, 56 94 C38 72, 54 60, 64 74 C70 82, 80 86, 80 86 C80 86, 90 82, 96 74 Z"
          fill="#f43f5e"
          opacity="0.85"
          stroke={STROKE_COLOR}
          strokeWidth="2.2"
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />

        <path d="M48 76 Q60 88 72 84" stroke={STROKE_COLOR} strokeWidth="2.8" strokeLinecap="round" fill="none" />
        <path d="M112 76 Q100 88 88 84" stroke={STROKE_COLOR} strokeWidth="2.8" strokeLinecap="round" fill="none" />
      </svg>
    </motion.div>
  );
};

// 8. Dental Floss Dancing Tooth Mascot (Light Background Version)
export const ToothFlossMascot = ({ className = "h-20 w-20", animate = true }) => {
  return (
    <motion.div
      animate={
        animate
          ? {
              y: [0, -10, 0],
              rotate: [0, 3, -3, 0],
            }
          : {}
      }
      transition={{
        duration: 4.2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`relative inline-block ${className}`}
    >
      <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full opacity-90">
        <FloatingSparkles color="#10b981" />

        {/* Tooth Body */}
        <path
          d="M50 48 C45 35, 60 31, 80 33 C100 31, 115 35, 110 48 C120 68, 118 94, 105 120 C98 133, 88 130, 82 113 C80 109, 80 109, 78 113 C72 130, 62 133, 55 120 C42 94, 40 68, 50 48 Z"
          fill="#ffffff"
          stroke={STROKE_COLOR}
          strokeWidth="2.8"
          strokeLinejoin="round"
        />

        {/* Eyes */}
        <ellipse cx="66" cy="62" rx="3.5" ry="5" fill={STROKE_COLOR} />
        <circle cx="66" cy="60" r="1.2" fill="#ffffff" />
        <ellipse cx="94" cy="62" rx="3.5" ry="5" fill={STROKE_COLOR} />
        <circle cx="94" cy="60" r="1.2" fill="#ffffff" />

        {/* Cheeks */}
        <ellipse cx="58" cy="70" rx="3.5" ry="2" fill="#fca5a5" opacity="0.7" />
        <ellipse cx="102" cy="70" rx="3.5" ry="2" fill="#fca5a5" opacity="0.7" />

        {/* Smile */}
        <path d="M70 73 Q80 84 90 73 Z" fill={STROKE_COLOR} />

        {/* Mint Floss Ribbon */}
        <motion.path
          d="M25 85 C40 105, 80 115, 135 75"
          stroke="#10b981"
          strokeWidth="3.2"
          strokeLinecap="round"
          fill="none"
          opacity="0.8"
        />
        <circle cx="25" cy="85" r="3.5" fill="#34d399" stroke={STROKE_COLOR} strokeWidth="1.2" />
        <circle cx="135" cy="75" r="3.5" fill="#34d399" stroke={STROKE_COLOR} strokeWidth="1.2" />
      </svg>
    </motion.div>
  );
};

// 9. Healthy Apple Tooth Mascot (Light Background Version)
export const ToothHealthyMascot = ({ className = "h-20 w-20", animate = true }) => {
  return (
    <motion.div
      animate={
        animate
          ? {
              y: [0, -10, 0],
              rotate: [0, -2, 2, 0],
            }
          : {}
      }
      transition={{
        duration: 4.6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`relative inline-block ${className}`}
    >
      <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full opacity-90">
        <FloatingSparkles color="#22c55e" />

        {/* Leaf Cap */}
        <path
          d="M75 32 C65 18, 85 10, 95 24 C105 18, 115 32, 95 36 Z"
          fill="#22c55e"
          opacity="0.85"
          stroke={STROKE_COLOR}
          strokeWidth="1.8"
        />

        {/* Tooth Body */}
        <path
          d="M50 48 C45 35, 60 31, 80 33 C100 31, 115 35, 110 48 C120 68, 118 94, 105 120 C98 133, 88 130, 82 113 C80 109, 80 109, 78 113 C72 130, 62 133, 55 120 C42 94, 40 68, 50 48 Z"
          fill="#ffffff"
          stroke={STROKE_COLOR}
          strokeWidth="2.8"
          strokeLinejoin="round"
        />

        {/* Eyes */}
        <ellipse cx="66" cy="62" rx="3.5" ry="5" fill={STROKE_COLOR} />
        <circle cx="66" cy="60" r="1.2" fill="#ffffff" />
        <ellipse cx="94" cy="62" rx="3.5" ry="5" fill={STROKE_COLOR} />
        <circle cx="94" cy="60" r="1.2" fill="#ffffff" />

        {/* Cheeks */}
        <ellipse cx="58" cy="70" rx="3.5" ry="2" fill="#fca5a5" opacity="0.7" />
        <ellipse cx="102" cy="70" rx="3.5" ry="2" fill="#fca5a5" opacity="0.7" />

        {/* Smile */}
        <path d="M72 73 Q80 82 88 73" stroke={STROKE_COLOR} strokeWidth="2.5" strokeLinecap="round" fill="none" />

        {/* Apple */}
        <motion.g
          animate={animate ? { y: [0, -2, 0] } : {}}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M108 72 C122 70, 128 80, 124 90" stroke={STROKE_COLOR} strokeWidth="2.8" strokeLinecap="round" fill="none" />
          <circle cx="128" cy="88" r="11" fill="#ef4444" opacity="0.85" stroke={STROKE_COLOR} strokeWidth="1.8" />
          <path d="M128 77 Q130 74 132 73" stroke={STROKE_COLOR} strokeWidth="1.8" strokeLinecap="round" />
        </motion.g>
      </svg>
    </motion.div>
  );
};

// Subtle Light Background Mascot Container (No badge text, no heavy glow rings, low opacity)
export const FloatingMascotSticker = ({
  MascotComponent,
  className = "",
  sizeClassName = "h-20 w-20 sm:h-24 sm:w-24",
  opacityClass = "opacity-25 sm:opacity-35",
}) => {
  return (
    <div className={`pointer-events-none relative inline-flex items-center justify-center transition-opacity duration-500 ${opacityClass} ${className}`}>
      <MascotComponent className={sizeClassName} />
    </div>
  );
};
