// File: src/components/Navbar.jsx
import React from "react";
import { motion } from "framer-motion";

export default function Navbar({ activeSection }) {
  return (
    <motion.header
      className="bg-white shadow-md sticky top-0 z-50"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-lg font-bold">Welcome to Jhan's Portfolio</h1>
        <ul className="flex gap-6 text-sm font-medium text-gray-600">
          {["home", "about", "experience", "skills", "blog", "contact"].map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`transition ${
                  activeSection === id
                    ? "text-blue-600 font-semibold"
                    : "hover:text-blue-600"
                }`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
