// File: src/sections/About.jsx
import React from "react";
import ArrowDown from "../components/ArrowDown";
import ArrowUp from "../components/ArrowUp";
import SectionWrapper from "../components/SectionWrapper";

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="bg-white p-10 rounded-2xl shadow-md">
        <ArrowUp to="home" />
        <h3 className="text-2xl font-semibold mb-4">About Me</h3>
        <p>
          Graduated with Bachelors of Science in Information Technology and been working
          since August 2022 as a developer who optimize UI/UX of websites or an application
          using JavaScript, HTML, CSS, Angular, React, etc.
        </p>
        <ArrowDown to="experience" />
      </div>
    </SectionWrapper>
  );
}