import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      { threshold: [0.3, 0.5, 0.7] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div className="font-sans bg-gray-50 text-gray-800 min-h-screen scroll-smooth relative">
      <Navbar activeSection={activeSection} />
      
      {/* Floating Note */}
      <div className="fixed top-16 left-1/2 transform -translate-x-1/2 z-50 bg-white px-4 py-1 text-xs text-gray-500 shadow rounded-md">
        This portfolio is made with React.js and Tailwind CSS
      </div>

      <main className="max-w-4xl mx-auto px-6 py-10 space-y-16">
        <Home />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}