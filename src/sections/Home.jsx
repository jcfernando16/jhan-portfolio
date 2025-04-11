import React from "react";
import ArrowDown from "../components/ArrowDown";
import SectionWrapper from "../components/SectionWrapper";

export default function Home() {
  return (
    <SectionWrapper id="home">
      <div className="bg-white p-10 rounded-2xl shadow-md text-center">
        {/* 👤 Profile Image */}
        <img
          src="/profile.png" // Place your image in /public/profile.jpg
          alt="Jhan Cedric M. Fernando"
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-md"
        />
        
        <h2 className="text-4xl font-bold mb-2">Jhan Cedric M. Fernando</h2>
        <p className="text-xl text-blue-600 mb-4">Front-End Software Engineer</p>
        <a
          href="https://www.linkedin.com/in/jcfernando16"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          LinkedIn Profile
        </a>
        <ArrowDown to="about" />
      </div>
    </SectionWrapper>
  );
}