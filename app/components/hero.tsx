"use client"; // client side component

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Defining prop
interface HeroProps {
  name: string;  
  title: string;
}

// Export the hero componennt
export const Hero: React.FC<HeroProps> = ({ name, title }) => {
  // Handler to scroll smoothly to the projects section when the button is clicked
  const handleViewWorkClick = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    // Main container for padding and centering
    <main className="container mx-auto py-8 px-4 md:px-8">
      {/* Hero Section */}
      <section
        id="hero"
        className="text-center py-12 md:py-20 min-h-[calc(100vh-150px)] flex flex-col justify-center items-center"
      >
        <div>
          {/* Ggreeting with name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Hi, I’m{" "}
            <span className="text-sky-600 dark:text-sky-400">{name}</span>
          </h2>

          {/* subtitile */}
          <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            {title}
          </p>

          {/* button to navigate to projects */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button size="lg" onClick={handleViewWorkClick}>
              View Projects
            </Button>

            {/* Same style, opens PDF in new tab */}
            <Button size="lg" asChild>
              <Link
                href="/Hasan-Zahid-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open CV PDF in a new tab"
              >
                View CV .pdf
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};
