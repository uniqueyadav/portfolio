"use client";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(135deg, #000000 0%, #1a1a1a 25%, #000000 50%, #0d0d0d 75%, #000000 100%),
            radial-gradient(circle at 20% 80%, rgba(255, 107, 53, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(247, 147, 30, 0.1) 0%, transparent 50%)
          `,
        }}
      />

      {/* Loading Content */}
      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <motion.h1
            animate={{
              textShadow: [
                "0 0 10px rgba(255, 107, 53, 0.5)",
                "0 0 20px rgba(255, 107, 53, 0.8)",
                "0 0 10px rgba(255, 107, 53, 0.5)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-pink-600"
          >
            Amit Yadav
          </motion.h1>
        </motion.div>

        <div className="flex justify-center mb-6">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-12 h-12 border-3 border-orange-500/30 border-t-orange-500 rounded-full"
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-gray-400 text-lg"
        >
          Loading awesome content...
        </motion.p>
      </div>
    </div>
  );
}