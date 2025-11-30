import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SectionTitleProps {
    icon?: LucideIcon;
    title: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ icon: Icon, title }) => (
    <div className="flex items-center gap-2 mb-4 border-b border-slate-200 dark:border-slate-800 pb-2">
        {Icon && <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />}
        <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            {title}
        </h2>
    </div>
);
