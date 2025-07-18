"use client";

import React from 'react';
import { Header } from './components/header';
import { Hero } from './components/hero';


export default function PortfolioPage() {
  
  const portfolioData = {
    name: "Hasan Zahid",
    title: "Software Engineering Student at CHALMERS | GU"
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50 font-sans">
      <Header name={portfolioData.name} />
      <Hero name={portfolioData.name} title= {portfolioData.title} />
    </div>
  );
}