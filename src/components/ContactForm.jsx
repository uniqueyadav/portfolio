"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (result) {
      const timer = setTimeout(() => {
        setResult(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [result]);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    const now = new Date();
    const time = now.toLocaleString();

    emailjs
      .sendForm(
        "service_76srbng",
        "template_zce5ju8",
        form.current,
        "zrIfLSyo7Vo5DmBJ6",
        { time }
      )
      .then(
        () => {
          setResult({ success: true, message: "Message sent successfully!" });
          form.current.reset();
        },
        () => {
          setResult({
            success: false,
            message: "Failed to send message. Please try again.",
          });
        }
      )
      .finally(() => setLoading(false));
  };

   return (
    <form ref={form} onSubmit={sendEmail} className="space-y-6">
      <div>
        <label className="block text-white font-medium mb-2">Name</label>
        <input
          name="name"
          type="text"
          required
          className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/50 transition-colors"
          placeholder="Your name"
        />
      </div>
      <div>
        <label className="block text-white font-medium mb-2">Email</label>
        <input
          name="email"
          type="email"
          required
          className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/50 transition-colors"
          placeholder="your.email@example.com"
        />
      </div>
      <div>
        <label className="block text-white font-medium mb-2">Subject</label>
        <input
          name="title"
          type="text"
          required
          className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/50 transition-colors"
          placeholder="Subject"
        />
      </div>
      <div>
        <label className="block text-white font-medium mb-2">Message</label>
        <textarea
          name="message"
          rows={5}
          required
          className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/50 transition-colors resize-none"
          placeholder="Tell me about your project..."
        />
      </div>
      <motion.button
        type="submit"
        className="w-full py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={loading}
      >
        {loading ? "Sending..." : "Send Message"}
      </motion.button>
      {result && (
        <div
          className={`mt-4 text-center font-medium ${
            result.success ? "text-green-400" : "text-red-400"
          }`}
        >
          {result.message}
        </div>
      )}
    </form>
  );
}