"use client";

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Printer, Sun, Moon } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { db } from '@/lib/firebase';
import { doc, getDoc, setDoc, updateDoc, increment } from 'firebase/firestore';
import { Header } from './Header';
import { About } from './About';
import { Skills } from './Skills';
import { Education } from './Education';
import { Experience } from './Experience';
import { Projects } from './Projects';
import { Honors } from './Honors';

export default function Resume() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [clickCount, setClickCount] = useState(0);
    const [viewCount, setViewCount] = useState<number | null>(null);

    useEffect(() => {
        setMounted(true);

        const trackView = async () => {
            const hasVisited = localStorage.getItem('hasVisited');
            if (!hasVisited) {
                try {
                    const docRef = doc(db, 'stats', 'views');
                    const docSnap = await getDoc(docRef);

                    if (docSnap.exists()) {
                        await updateDoc(docRef, { count: increment(1) });
                    } else {
                        await setDoc(docRef, { count: 1 });
                    }
                    localStorage.setItem('hasVisited', 'true');
                } catch (error) {
                    console.error("Error tracking view:", error);
                }
            }
        };

        trackView();
    }, []);

    if (!mounted) {
        return null;
    }

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };



    const handleSecretClick = async () => {
        const newCount = clickCount + 1;
        setClickCount(newCount);

        if (newCount === 5) {
            try {
                const docRef = doc(db, 'stats', 'views');
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setViewCount(docSnap.data().count);
                }
            } catch (error) {
                console.error("Error fetching view count:", error);
            }
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-300">

            {/* Navbar / Controls */}
            <div className="fixed top-0 right-0 p-4 flex gap-2 z-50 print:hidden">
                <a
                    href="/Hasan-Zahid-Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white dark:bg-slate-800 shadow-md hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-all inline-flex items-center justify-center"
                    title="View / Download Resume"
                >
                    <Printer size={20} className="text-slate-700 dark:text-slate-200" />
                </a>
                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-full bg-white dark:bg-slate-800 shadow-md hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-all"
                    title="Toggle Theme"
                >
                    {theme === 'dark' ? (
                        <Sun size={20} className="text-yellow-400" />
                    ) : (
                        <Moon size={20} className="text-slate-700" />
                    )}
                </button>
            </div>

            {/* Main Resume Container */}
            <main className="container mx-auto max-w-4xl py-8 px-4 sm:px-6 print:p-0 print:max-w-full">
                <Card className="p-6 md:p-12 print:shadow-none print:border-none print:p-0">
                    <Header />
                    <About />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="md:col-span-1 space-y-8 order-2 md:order-1">
                            <Skills />
                            <Honors />
                        </div>
                        <div className="md:col-span-2 space-y-8 order-1 md:order-2">
                            <Education />
                            <Experience />
                            <Projects />
                        </div>
                    </div>
                    <footer className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-slate-400 text-sm print:hidden">
                        <p onClick={handleSecretClick} className="cursor-pointer select-none hover:text-slate-500 transition-colors">
                            © {new Date().getFullYear()} Hasan Zahid.
                            {viewCount !== null && (
                                <span className="block mt-2 text-xs font-mono text-blue-500">
                                    Total Unique Views: {viewCount}
                                </span>
                            )}
                        </p>
                    </footer>
                </Card>
            </main>

            <style jsx global>{`
        @media print {
          @page { margin: 0; }
          body { -webkit-print-color-adjust: exact; }
          .print-hidden { display: none !important; }
        }
      `}</style>
        </div>
    );
}
