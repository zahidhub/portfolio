"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Github, ExternalLink } from 'lucide-react';
import { useTheme } from 'next-themes';

export interface ContributionDay {
    contributionCount: number;
    date: string;
    color: string;
}

export interface ContributionWeek {
    contributionDays: ContributionDay[];
}

export interface ContributionData {
    total: number;
    weeks: ContributionWeek[];
}

// Map GitHub color levels to theme-aware colors
const getThemeColor = (githubColor: string, theme: string | undefined) => {
    const isDark = theme === 'dark';

    // GitHub colors and their theme equivalents
    const colorMap: { [key: string]: { light: string; dark: string } } = {
        '#ebedf0': { light: 'rgb(226, 232, 240)', dark: 'rgb(30, 41, 59)' },     // slate-200 / slate-800
        'transparent': { light: 'transparent', dark: 'transparent' },
        '#9be9a8': { light: 'rgb(167, 243, 208)', dark: 'rgb(6, 78, 59)' },      // emerald-200 / emerald-900
        '#40c463': { light: 'rgb(52, 211, 153)', dark: 'rgb(16, 185, 129)' },    // emerald-400 / emerald-500
        '#30a14e': { light: 'rgb(16, 185, 129)', dark: 'rgb(52, 211, 153)' },    // emerald-500 / emerald-400
        '#216e39': { light: 'rgb(5, 150, 105)', dark: 'rgb(110, 231, 183)' },    // emerald-600 / emerald-300
    };

    const colors = colorMap[githubColor];
    if (colors) {
        return isDark ? colors.dark : colors.light;
    }
    // Fallback for any unrecognized color
    return githubColor;
};

interface GithubActivityProps {
    data: ContributionData | null;
}

export function GithubActivity({ data }: GithubActivityProps) {
    const { theme } = useTheme();
    const scrollContainerRef = React.useRef<HTMLDivElement>(null);

    // Scroll to the end (newest data) on mount
    React.useEffect(() => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft = scrollContainerRef.current.scrollWidth;
        }
    }, [data]);

    if (!data) return null;

    // Pad weeks to always have 7 days
    const padWeek = (days: ContributionDay[], weekIndex: number, totalWeeks: number) => {
        const paddedDays = [...days];
        if (weekIndex === 0 && days.length < 7) {
            const emptyCount = 7 - days.length;
            for (let i = 0; i < emptyCount; i++) {
                paddedDays.unshift({ contributionCount: -1, date: `empty-start-${i}`, color: 'transparent' });
            }
        } else if (weekIndex === totalWeeks - 1 && days.length < 7) {
            const emptyCount = 7 - days.length;
            for (let i = 0; i < emptyCount; i++) {
                paddedDays.push({ contributionCount: -1, date: `empty-end-${i}`, color: 'transparent' });
            }
        }
        return paddedDays;
    };

    const numWeeks = data.weeks.length || 52;

    return (
        <Card className="p-4 w-full">
            <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold flex items-center gap-2 text-slate-700 dark:text-slate-200">
                    <Github className="w-4 h-4" />
                    GitHub
                </h3>
                <a
                    href="https://github.com/zahidhub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-400 hover:text-emerald-500 flex items-center gap-1 transition-colors"
                >
                    zahidhub <ExternalLink size={10} />
                </a>
            </div>

            <div className="relative w-full">
                {/* Scrollable Container */}
                <div
                    ref={scrollContainerRef}
                    className="flex gap-[3px] overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-700 scrollbar-track-transparent"
                >
                    {/* Standard LTR layout */}
                    <div className="flex gap-[3px] flex-nowrap">
                        {data.weeks.map((week, weekIndex) => (
                            <div key={weekIndex} className="flex flex-col gap-[3px]">
                                {padWeek(week.contributionDays, weekIndex, data.weeks.length).map((day) => (
                                    <div
                                        key={`${weekIndex}-${day.date}`}
                                        className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-[1px] transition-colors cursor-pointer hover:ring-1 hover:ring-emerald-400"
                                        style={{
                                            backgroundColor: getThemeColor(day.color, theme),
                                        }}
                                        title={day.contributionCount >= 0 ? `${day.contributionCount} contributions on ${day.date}` : ''}
                                    ></div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-2 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>
                    {data.weeks.reduce((acc, week) => acc + week.contributionDays.reduce((dAcc, day) => dAcc + Math.max(0, day.contributionCount), 0), 0)} contributions in last {numWeeks} weeks
                </span>
                <div className="flex items-center gap-1">
                    <span className="text-[10px]">Less</span>
                    <div className="w-2.5 h-2.5 rounded-[1px] bg-slate-200 dark:bg-slate-800"></div>
                    <div className="w-2.5 h-2.5 rounded-[1px] bg-emerald-200 dark:bg-emerald-900"></div>
                    <div className="w-2.5 h-2.5 rounded-[1px] bg-emerald-400 dark:bg-emerald-500"></div>
                    <div className="w-2.5 h-2.5 rounded-[1px] bg-emerald-600 dark:bg-emerald-300"></div>
                    <span className="text-[10px]">More</span>
                </div>
            </div>
        </Card>
    );
}
