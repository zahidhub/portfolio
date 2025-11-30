import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { resumeData } from '@/data/resume';

export const Header = () => {
    const { header } = resumeData;

    return (
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div className="space-y-1.5">
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                    {header.name}
                </h1>
                <p className="text-lg text-slate-500 dark:text-slate-400 font-medium">
                    {header.title}
                </p>
                <div className="flex flex-wrap gap-3 text-sm text-slate-500 dark:text-slate-400 mt-2">
                    <a href={`mailto:${header.email}`} className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                        <Mail size={14} />
                        {header.email}
                    </a>
                    <span className="hidden sm:inline">•</span>
                    <span className="flex items-center gap-1">
                        <Phone size={14} />
                        {header.phone}
                    </span>
                    <span className="hidden sm:inline">•</span>
                    <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {header.location}
                    </span>
                </div>

                {/* Social Links */}
                <div className="flex gap-3 mt-2">
                    {header.socials.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            className="p-1.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-100 hover:text-blue-700 dark:hover:bg-blue-900 dark:hover:text-blue-300 transition-colors"
                            title={social.name}
                        >
                            {social.icon === 'Github' ? <Github size={18} /> : <Linkedin size={18} />}
                        </a>
                    ))}
                </div>
            </div>

            {/* Avatar */}
            <div className="hidden md:block w-28 h-28 rounded-full bg-slate-200 dark:bg-slate-800 flex-shrink-0 border-2 border-slate-100 dark:border-slate-700 overflow-hidden relative">
                {/* @ts-ignore */}
                {header.avatarUrl ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                        /* @ts-ignore */
                        src={header.avatarUrl}
                        alt={header.name}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-400 text-xs text-center">
                        Profile Picture
                    </div>
                )}
            </div>
        </header>
    );
};
