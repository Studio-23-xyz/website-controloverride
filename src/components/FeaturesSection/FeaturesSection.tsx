import React from 'react';
import { FaCaretSquareDown, FaCaretSquareLeft, FaCaretSquareUp } from 'react-icons/fa';
import classes from './FeaturesSection.module.css';


const FeaturesSection: React.FC = () => {
    return (
        <section className="bg-black" id="features">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <h2 className="text-3xl font-bold mb-6 text-center text-color">KEY FEATURES</h2>
                <div className="flex flex-col lg:flex-row md:flex-column items-center justify-between">
                    <div className="w-11/12 lg:w-3/5">
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
                    <div className="lg:w-1/2 mt-10 lg:mt-0 lg:ml-10 text-color">
                       <ul className={`list-none pl-5 space-y-2 ${classes.customTextDesign}`}>
                        <li className="ml-10 lg:ml-0 lg:py-item-padding-10y lg:px-item-padding-x flex items-center">
                            <FaCaretSquareDown size={'20px'} className="mr-2" aria-hidden="true" />
                            <span className={classes.textSize}>
                                Simple mechanics. Unexpected consequences.
                            </span>
                        </li>
                        <li className="ml-10 lg:ml-0 lg:py-item-padding-10y lg:px-item-padding-x flex items-center">
                            <FaCaretSquareLeft size={'20px'} className="mr-2" aria-hidden="true" />
                            <span className={classes.textSize}>
                            Physics defying puzzles.
                            </span>
                        </li>
                        <li className="ml-10 lg:ml-0 lg:py-item-padding-10y lg:px-item-padding-x flex items-center">
                            <FaCaretSquareUp size={'40px'} className="mr-2" aria-hidden="true" />
                            <span className={classes.textSize}>
                            A generous rewind mechanic that lets you fix your mistakes. Problem-solving is an iterative process.
                            </span>
                        </li>
                        <li className="ml-10 lg:ml-0 lg:py-item-padding-10y lg:px-item-padding-x flex items-center">
                            <FaCaretSquareDown size={'20px'} className="mr-2" aria-hidden="true" />
                            <span className={classes.textSize}>
                                A minimalist neon art style.
                            </span>
                        </li>
                        <li className="ml-10 lg:ml-0 lg:py-item-padding-10y lg:px-item-padding-x flex items-center">
                            <FaCaretSquareLeft size={'30px'} className="mr-2" aria-hidden="true" />
                            <span className={classes.textSize}>
                                An intriguing story of a hacker who hacked an AI of his own creation.
                            </span>
                        </li>
                        <li className="ml-10 lg:ml-0 lg:py-item-padding-10y lg:px-item-padding-x flex items-center">
                            <FaCaretSquareUp size={'20px'} className="mr-2" aria-hidden="true" />
                            <span className={classes.textSize}>
                                Multiple endings that form a jigsaw puzzle-like narrative.
                            </span>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
