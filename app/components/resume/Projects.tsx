import React, { useState } from 'react';
import { Code, X, Github, Maximize2 } from 'lucide-react';
import { SectionTitle } from './SectionTitle';
import { resumeData } from '@/data/resume';

export const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<typeof resumeData.projects[0] | null>(null);

    return (
        <section>
            <SectionTitle icon={Code} title="Projects" />
            <div className="space-y-5">
                {resumeData.projects.map((project, idx) => (
                    <div
                        key={idx}
                        onClick={() => setSelectedProject(project)}
                        className="group rounded-lg bg-slate-50 dark:bg-slate-900/50 p-4 border border-slate-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-900 transition-all cursor-pointer hover:shadow-md hover:scale-[1.01]"
                    >
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                                {project.name}
                                <Maximize2 size={14} className="text-slate-400 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity" />
                            </h3>
                            {/* Tags as subtitle */}
                            <div className="text-xs text-slate-400 text-right max-w-[50%]">
                                {project.tech}
                            </div>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                            {project.description}
                        </p>
                        <div className="mt-3 text-xs font-medium text-blue-600 dark:text-blue-400 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                            Click to view details →
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={() => setSelectedProject(null)}>
                    <div
                        className="bg-white dark:bg-slate-900 rounded-xl shadow-2xl w-full max-w-lg p-6 relative border border-slate-200 dark:border-slate-800"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                        >
                            <X size={20} />
                        </button>

                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                            {selectedProject.name}
                        </h3>
                        <div className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-4">
                            {selectedProject.tech}
                        </div>

                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                            {selectedProject.description}
                        </p>

                        <div className="flex gap-3">
                            {selectedProject.link && (
                                <a
                                    href={selectedProject.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-medium hover:opacity-90 transition-opacity"
                                >
                                    <Github size={18} />
                                    View Code
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};
