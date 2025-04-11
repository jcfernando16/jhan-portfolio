// File: src/sections/Experience.jsx
import React from "react";
import ArrowDown from "../components/ArrowDown";
import ArrowUp from "../components/ArrowUp";
import SectionWrapper from "../components/SectionWrapper";

export default function Experience() {
  const experiences = [
    {
      date: "August 2022",
      role: "Associate Front-End Software Engineer",
      company: "Manulife IT Delivery Center Asia",
    },
    {
      date: "March 2022",
      role: "QA Analyst Intern",
      company: "NeoDocto Inc.",
    },
    {
      date: "February 2020",
      role: "Marketing Ministry SocMed",
      company: "Elevate Manila",
    },
  ];

  return (
    <SectionWrapper id="experience">
      <div className="bg-white p-10 rounded-2xl shadow-md">
        <ArrowUp to="about" />
        <h3 className="text-2xl font-semibold mb-8 text-center">Experience</h3>
        <div className="relative pl-8 border-l-4 border-blue-300 space-y-10">
          {experiences.map((item, index) => (
            <div key={index} className="relative ml-4">
              <div className="absolute -left-8 top-1 w-5 h-5 bg-blue-500 border-4 border-white rounded-full shadow-md"></div>
              <p className="text-sm text-gray-500">{item.date}</p>
              <h4 className="text-lg font-semibold">{item.role}</h4>
              <p className="text-gray-700">{item.company}</p>
            </div>
          ))}
        </div>
        <ArrowDown to="skills" />
      </div>
    </SectionWrapper>
  );
}
