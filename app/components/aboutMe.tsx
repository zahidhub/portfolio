import React from "react"; 


interface AboutProps{
    bio: string;
}

export const AboutMe: React.FC<AboutProps> = ({ bio }) => {
    
    return (
        <section id="about" className="py-12 md:py-20 bg-slate-100 dark:bg-slate-800 rounded-lg my-10 scroll-mt-20">
        <div className="max-w-3xl mx-auto px-6">
            <h3 className="text-3xl md:text-4xl font-semibold mb-6 text-center">About Me</h3>
            <p className="text-md md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
                {bio}
            </p>
        </div>
    </section>
    );
};