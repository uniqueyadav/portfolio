"use client";
import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconHome, IconRefresh, IconBugOff } from "@tabler/icons-react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 glow-text">
              Something Went Wrong
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-2">
              It's not you, it's us! We're working on fixing this.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => reset()}
              className="btn-enhanced text-white px-8 py-3 rounded-full font-medium text-base relative overflow-hidden flex items-center gap-2 group"
            >
              <IconRefresh size={20} />
              Try Again
            </motion.button>
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-effect text-white px-8 py-3 rounded-full font-medium text-base border border-orange-500/30 hover:border-orange-500/50"
              >
                Go Home
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}