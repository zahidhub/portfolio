import React from 'react';
import { Code } from 'lucide-react';
import { SectionTitle } from './SectionTitle';
import { resumeData } from '@/data/resume';

export const Projects = () => (
    <section>
        <SectionTitle icon={Code} title="Projects" />
        <div className="space-y-5">
            {resumeData.projects.map((project, idx) => (
                <div key={idx} className="rounded-lg bg-slate-50 dark:bg-slate-900/50 p-4 border border-slate-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-900 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                            {project.name}
                        </h3>
                        {/* Tags as subtitle */}
                        <div className="text-xs text-slate-400 text-right max-w-[50%]">
                            {project.tech}
                        </div>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {project.description}
                    </p>
                </div>
            ))}
        </div>
    </section>
);
