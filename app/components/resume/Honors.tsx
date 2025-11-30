import React from 'react';
import { Trophy } from 'lucide-react';
import { SectionTitle } from './SectionTitle';
import { resumeData } from '@/data/resume';

export const Honors = () => (
    <section>
        <SectionTitle icon={Trophy} title="Honors" />
        <div className="space-y-4">
            {resumeData.honors.map((honor, idx) => (
                <div key={idx} className="group">
                    <div className="flex justify-between items-start">
                        <h3 className="font-semibold text-sm group-hover:text-blue-600 transition-colors">{honor.title}</h3>
                        <span className="text-xs text-slate-400 whitespace-nowrap ml-2">{honor.date}</span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                        {honor.description}
                    </p>
                </div>
            ))}
        </div>
    </section>
);
