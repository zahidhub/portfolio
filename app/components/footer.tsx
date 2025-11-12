import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";

type Contact = {
  email: string;
  github: string;
  linkedin: string;
};

interface FooterProps {
  name: string;
  contact: Contact;
}

export const Footer: React.FC<FooterProps> = ({ name, contact }) => {
  return (
    <footer className="py-12 md:py-20">
      {/* Match About Me card styling */}
      <section
        id="contact"
        className="bg-slate-100 dark:bg-slate-800 rounded-lg my-10 scroll-mt-20"
      >
        <div className="max-w-xl mx-auto text-center px-6 py-12 md:py-16">
          <h3 className="text-3xl md:text-4xl font-semibold mb-6">Get In Touch</h3>
          <p className="text-md md:text-lg text-slate-700 dark:text-slate-300 mb-8">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of something amazing. Feel free to reach out!
          </p>

          <div className="flex justify-center space-x-6">
            <a
              href={`mailto:${contact.email}`}
              className="text-slate-600 hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-400 transition-colors p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700"
              aria-label="Email"
            >
              <Mail className="w-8 h-8" />
            </a>
            <a
              href={`https://github.com/${contact.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-400 transition-colors p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700"
              aria-label="GitHub"
            >
              <Github className="w-8 h-8" />
            </a>
            <a
              href={`https://linkedin.com/in/${contact.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-400 transition-colors p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-8 h-8" />
            </a>
          </div>

          <p className="mt-8 text-sm text-slate-600 dark:text-slate-400">
            Email:{" "}
            <a
              href={`mailto:${contact.email}`}
              className="text-sky-600 dark:text-sky-400 hover:underline"
            >
              {contact.email}
            </a>
          </p>
        </div>
      </section>

      {/* Tiny copyright strip below the card */}
      <div className="text-center">
        <p className="text-sm text-slate-600 dark:text-slate-400">
          &copy; {new Date().getFullYear()} {name}. All rights reserved.
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
        </p>
      </div>
    </footer>
  );
};
