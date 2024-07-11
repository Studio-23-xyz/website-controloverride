import { FC } from 'react';
import classes from './VideoSection.module.css';

export interface VideoProps {
    videoId: string;
    autoplay: number;
    controls: number;
}

const VideoSection: FC<VideoProps> = ({ videoId, autoplay, controls }) => {
    return (
        <section className="w-full flex items-center justify-center lg:h-screen md:h-2/3 sm:h-1/5">
            <div className={`container w-3/4`}>
                <div className={classes.iframeContainer}>
                    <iframe
                        className={`w-full aspect-video ${classes.iframeBase}`}
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=${autoplay}&controls=${controls}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="YouTube Video Player"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
