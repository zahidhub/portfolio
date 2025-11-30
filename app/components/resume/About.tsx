import React from 'react';
import { SectionTitle } from './SectionTitle';
import { resumeData } from '@/data/resume';

export const About = () => (
    <section className="mb-8">
        <SectionTitle title="About Me" />
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            {resumeData.about}
        </p>
    </section>
);
