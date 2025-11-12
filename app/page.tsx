"use client";

import React from 'react';
import { Header } from './components/header';
import { Hero } from './components/hero';
import { AboutMe } from './components/aboutMe';
import ProjectsSection from './components/projects';
import { Footer } from './components/footer';

export default function PortfolioPage() {
  
  const portfolioData = {
    name: "Hasan Zahid",
    title: "Software Engineering Student at CHALMERS | GU",
    bio: "Software Engineering student at CHALMERS | GU with interest in the integration of software and hardware. Currently, I am into software development, and constantly trying to improve myself in low level language and agile software development practices (Git, CI/CD). My motto is building innovative tech solutions and driven by a long term goal: to make a meaningful mark in the tech world by creating something truly impactful.",
    contact: {
    email: "zahiduniversity@gmail.com",
    github: "zahidhub",
    linkedin: "hasan-zahid-292541244"
  }

  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50 font-sans">
      <Header name={portfolioData.name} />
      <Hero name={portfolioData.name} title= {portfolioData.title} />
      <AboutMe bio={portfolioData.bio}/>
      <ProjectsSection />
      <Footer name={portfolioData.name} contact={portfolioData.contact} />
    </div>
  );
}