import React from 'react';
import classes from './FeaturesSection.module.css';

const FeaturesSection: React.FC = () => {
    return (
        <section className="bg-black" id="features">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="flex flex-col lg:flex-row md:flex-column items-center justify-between">
                    <div className="w-3/5">
                        <video
                            controls
                            autoPlay
                            loop
                            muted
                            playsInline
                            className={`w-full h-auto ${classes['neon-shadow']}`}
                            >
                            <source src="/videos/not-a-gif-no-mouse.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="lg:w-1/2 mt-10 lg:mt-0 lg:ml-10 text-green-400">
                        <h2 className="text-3xl font-bold mb-6 text-center lg:text-left">KEY FEATURES</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Simple mechanics. Unexpected consequences.</li>
                            <li>Physics defying puzzles.</li>
                            <li>A generous rewind mechanic that lets you fix your mistakes. Problem-solving is an iterative process.</li>
                            <li>A minimalist neon art style.</li>
                            <li>An intriguing story of a hacker who hacked an AI of his own creation.</li>
                            <li>Multiple endings that form a jigsaw puzzle-like narrative.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
