// File: src/components/ArrowDown.jsx
import React from "react";
import { motion } from "framer-motion";

const ArrowDown = ({ to }) => (
  <a href={`#${to}`} className="flex justify-center mt-10">
    <motion.div
      className="text-5xl text-gray-500 hover:text-blue-500 transition"
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={3}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </motion.div>
  </a>
);

export default ArrowDown;