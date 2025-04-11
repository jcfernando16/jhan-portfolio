import React from "react";
import ArrowDown from "../components/ArrowDown";
import SectionWrapper from "../components/SectionWrapper";

export default function Home() {
  return (
    <SectionWrapper id="home">
      <div className="bg-white p-10 rounded-2xl shadow-md text-center">
        <img
          src="/profile.png"
          alt="profile"
          className="w-32 h-32 mx-auto rounded-full mb-4 object-cover border-4 border-blue-100"
        />
        <h2 className="text-4xl font-bold mb-2">Jhan Cedric M. Fernando</h2>
        <p className="text-xl text-blue-600 mb-4">Front-End Software Engineer</p>
        <a
          href="https://www.linkedin.com/in/jcfernando16"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:no-underline"
        >
          LinkedIn Profile
        </a>
        <ArrowDown to="about" />
        <p className="text-xs text-gray-400 mt-6">
          This portfolio is made with React.js and Tailwind CSS
        </p>
      </div>
    </SectionWrapper>
  );
}