"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconHome, IconArrowLeft } from "@tabler/icons-react";

export default function NotFound() {
  return (
    <div className="min-h-screen relative overflow-hidden particles-container">
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(135deg, #000000 0%, #1a1a1a 25%, #000000 50%, #0d0d0d 75%, #000000 100%)
          `,
        }}
      />
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <motion.div
              className="text-8xl md:text-9xl font-bold mb-4"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 glow-text">
                404
              </span>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 glow-text">
              Oops! Page Not Found
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-2">
              The page you're looking for seems to have wandered off.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-enhanced text-white px-8 py-3 rounded-full font-medium text-base relative overflow-hidden flex items-center gap-2 group"
              >
                <IconHome size={20} />
                Go Home
              </motion.button>
            </Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.history.back()}
              className="glass-effect text-white px-8 py-3 rounded-full font-medium text-base border border-orange-500/30"
            >
              Go Back
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}