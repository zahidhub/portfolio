import React from 'react';
import { GraduationCap } from 'lucide-react';
import { SectionTitle } from './SectionTitle';
import { resumeData } from '@/data/resume';

export const Education = () => (
    <section>
        <SectionTitle icon={GraduationCap} title="Education" />
        <div className="space-y-4">
            {resumeData.education.map((edu, idx) => (
                <div key={idx} className="relative pl-3 border-l-2 border-slate-200 dark:border-slate-800">
                    <h3 className="font-semibold text-sm">{edu.degree}</h3>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{edu.school}</div>
                    <div className="text-xs text-blue-600 dark:text-blue-400 font-medium mt-1">{edu.period}</div>
                    {edu.description && (
                        <p
                            className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: edu.description }}
                        />
                    )}
                </div>
            ))}
        </div>
    </section>
);
