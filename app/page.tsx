"use client";

import React from 'react';
import { Header } from './components/header';
import { Hero } from './components/hero';
import { AboutMe } from './components/aboutMe';

// for merging Tailwind classes
function cn(...inputs: (string | undefined | null | false)[]): string {
  return inputs.filter(Boolean).join(' ');
}

export default function PortfolioPage() {
  
  const portfolioData = {
    name: "Hasan Zahid",
    title: "Software Engineering Student at CHALMERS | GU",
    bio: "Software Engineering student at CHALMERS | GU with a strong interest in the intersection of software and hardware. I am passionate about building innovative tech solutions and driven by a long term goal: to make a meaningful mark in the tech world by creating something truly impactful."
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50 font-sans">
      <Header name={portfolioData.name} />
      <Hero name={portfolioData.name} title= {portfolioData.title} />
      <AboutMe bio={portfolioData.bio}/>
    </div>
  );
}