
import React from 'react';

interface HeaderProps {
  name: string;
}

export const Header: React.FC<HeaderProps> = ({ name }) => {
  return (
    <header className="py-6 px-4 md:px-8 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-950">
          {name}
        </h1>
        <nav className="space-x-4">
          <a href="#about" className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors">
            About
            </a>

          <a href="#projects" className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors">
            Projects
            </a>
          
          <a href="#contact" className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors">
            Contact
            </a>
        </nav>
      </div>
    </header>
  );
};