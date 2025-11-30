import React from 'react';
import { Briefcase } from 'lucide-react';
import { SectionTitle } from './SectionTitle';
import { resumeData } from '@/data/resume';

export const Experience = () => (
    <section>
        <SectionTitle icon={Briefcase} title="Work Experience" />
        <div className="space-y-6">
            {resumeData.experience.map((exp, idx) => (
                <div key={idx} className="relative">
                    {/* Check if it's a multi-role entry (Promotion Trail) */}
                    {'roles' in exp ? (
                        <div className="mb-6">
                            <div className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-4">
                                {exp.company}
                            </div>
                            {/* The Trail Line */}
                            <div className="border-l-2 border-slate-200 dark:border-slate-700 ml-3 space-y-8 pl-6 relative">
                                {exp.roles?.map((role, rIdx) => (
                                    <div key={rIdx} className="relative">
                                        {/* Dot on the line */}
                                        <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-white dark:border-slate-900 bg-slate-300 dark:bg-slate-600" />

                                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                                            <h3 className="font-bold text-slate-900 dark:text-slate-100">{role.role}</h3>
                                            <span className="text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                                                {role.period}
                                            </span>
                                        </div>
                                        {role.description && (
                                            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                                {role.description}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        /* Original Single Role Rendering */
                        <div className="mb-6">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                                <h3 className="font-bold text-slate-900 dark:text-slate-100">{exp.role}</h3>
                                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                                    {exp.period}
                                </span>
                            </div>
                            <div className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">
                                {exp.company}
                            </div>
                            {exp.description && (
                                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                    {exp.description}
                                </p>
                            )}
                        </div>
                    )}
                </div>
            ))}
        </div>
    </section>
);
