"use client";

import React from "react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  name: string;
  title: string;
}

export const Hero: React.FC<HeroProps> = ({ name, title }) => {
  const handleViewWorkClick = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="container mx-auto py-8 px-4 md:px-8">
      <section
        id="hero"
        className="text-center py-12 md:py-20 min-h-[calc(100vh-150px)] flex flex-col justify-center items-center">
        <div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Hi, I’m{" "}
            <span className="text-sky-600 dark:text-sky-400">{name}</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            {title}
          </p>
          <Button size="lg" onClick={handleViewWorkClick}>
            View My Projects
          </Button>
        </div>
      </section>
    </main>
  );
};
