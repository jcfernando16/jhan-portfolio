// File: src/sections/Skills.jsx
import React from "react";
import ArrowDown from "../components/ArrowDown";
import ArrowUp from "../components/ArrowUp";
import SectionWrapper from "../components/SectionWrapper";

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <div className="bg-white p-10 rounded-2xl shadow-md">
        <ArrowUp to="experience" />
        <h3 className="text-2xl font-semibold mb-4">Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "JavaScript", "React", "Angular", "HTML", "CSS",
            "API Testing", "Git", "Jenkins", "SQL",
            "Manual Testing", "Microsoft Apps (Power BI)", "CMS",
            "WordPress", "Wix", "Shopify"
          ].map(skill => (
            <span
              key={skill}
              className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm text-center"
            >
              {skill}
            </span>
          ))}
        </div>
        <ArrowDown to="contact" />
      </div>
    </SectionWrapper>
  );
}
