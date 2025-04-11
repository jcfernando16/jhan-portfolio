// File: src/components/SectionWrapper.jsx
import React from "react";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const SectionWrapper = ({ id, children }) => (
  <motion.section
    id={id}
    className="min-h-screen pt-24 pb-24 scroll-mt-20"
    variants={sectionVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    {children}
  </motion.section>
);

export default SectionWrapper;