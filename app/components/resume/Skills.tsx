import React from 'react';
import { Cpu } from 'lucide-react';
import { SectionTitle } from './SectionTitle';
import { Badge } from '@/components/ui/badge';
import { resumeData } from '@/data/resume';

export const Skills = () => (
    <section>
        <SectionTitle icon={Cpu} title="Skills" />
        <div className="space-y-4">
            {Object.entries(resumeData.skills).map(([category, items]) => (
                <div key={category}>
                    <h3 className="text-xs font-bold uppercase text-slate-400 mb-2">{category}</h3>
                    <div className="flex flex-wrap gap-1.5">
                        {items.map((skill) => (
                            <Badge key={skill}>{skill}</Badge>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </section>
);
