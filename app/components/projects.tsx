

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

// You can extract this data into a separate file later if needed
const projects = [
  {
    id: 1,
    title: "SpaceMonkey - NASA App Challenge",
    description: "Built a ML powered prediction system using Python, Django REST, and NASA Kepler data; implemented real time inference, and Agile teamwork across a 6 member team.",
    techStack: ["Python", "Django REST", "NASA Kepler data"],
    liveLink: "#",
    repoLink: "https://github.com/zahidhub/spacemonkeynasa",
  },
  {
    id: 2,
    title: "EnviroBaby",
    description: "Built a microcontroller based IoT monitoring system using C, Arduino, and MQTT; integrated with a JavaFX desktop client via pub/sub architecture and applied CI/CD (Continuous Integration and Continuous Development), Git workflows, Embedded System, Distributed System and Agile methods.",
    techStack: ["C", "Arduino", "MQTT", "JavaFX", "CI/CD", "Git"],
    liveLink: "#",
    repoLink: "https://github.com/zahidhub/EnviroBaby",
  },
  {
    id: 3,
    title: "ShadowRadar",
    description: "Simulated a radar detection system in C, focusing on signal processing and object tracking; emphasized real time logic and scalability for systems programming.",
    techStack: ["C", "Arduino"],
    liveLink: "#",
    repoLink: "https://github.com/zahidhub/ShadowRadar",
  },
  {
    id: 4,
    title: "Ghost-Comm",
    description: "Built a containerized Morse code encryption/decryption service using C and Docker; applied secure message protocols and modular command line tooling.",
    techStack: ["C", "Docker"],
    liveLink: "#",
    repoLink: "https://github.com/zahidhub/Ghost-Comm",
  },
  {
    id: 5,
    title: "SlitherySnake",
    description: "Designed an object oriented snake game in JavaFX with modular architecture and clean code practices; Agile sprints, retrospectives, and project tracking using Kanban boards.",
    techStack: ["JavaFX"],
    liveLink: "#",
    repoLink: "https://github.com/zahidhub/SlitherySnake",
  },
  {
    id: 6,
    title: "FlappyPole",
    description: "Developed an arcade style game in Godot (GDScript) with modular logic and collision handling; reinforced pedagogy through code clarity, Git collaboration, and peer feedback cycles.",
    techStack: ["Godot", "Git"],
    liveLink: "#",
    repoLink: "https://github.com/zahidhub/Flappy-pole",
  },
  {
    id: 7,
    title: "Egglu",
    description: "Created an interactive egg boiling assistant using React and JavaScript; built responsive UI with custom CSS, improved user experience, and managed iterations through Agile practices.",
    techStack: ["JavaScript", "React", "CSS", "UI"],
    liveLink: "#",
    repoLink: "https://github.com/zahidhub/egglu",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-12 md:py-20 scroll-mt-20 bg-transparent">
      <div className="container mx-auto px-4 md:px-8">
        <h3 className="text-3xl md:text-4xl font-semibold mb-10 text-center">My Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="bg-white dark:bg-slate-850 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <CardHeader>
                <CardTitle className="text-sky-700 dark:text-sky-500">
                  {project.title}
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2 font-medium">
                  Tech Stack:
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-sky-100 dark:bg-sky-800 text-sky-700 dark:text-sky-200 text-xs rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-start space-x-3 mt-auto">
                {project.liveLink !== "#" && (
                  <Button variant="link" asChild>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-600 dark:text-sky-400"
                    >
                      Live Demo
                    </a>
                  </Button>
                )}
                {project.repoLink !== "#" && (
                  <Button variant="outline" asChild>
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Repo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
