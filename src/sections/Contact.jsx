// File: src/sections/Contact.jsx
import React from "react";
import ArrowUp from "../components/ArrowUp";
import SectionWrapper from "../components/SectionWrapper";

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="bg-white p-10 rounded-2xl shadow-md">
        <ArrowUp to="skills" />
        <h3 className="text-2xl font-semibold mb-4">Contact</h3>
        <p>Email: <a href="mailto:jcfernando367@gmail.com" className="text-blue-600">jcfernando367@gmail.com</a></p>
        <p>Phone: <a href="tel:+639184313775" className="text-blue-600">+639184313775</a></p>
      </div>
    </SectionWrapper>
  );
}