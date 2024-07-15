// components/GameSection.tsx
import { FC } from 'react';
import Link from 'next/link';

const GameSection: FC = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-semibold my-4 text-color">PLAY THE GAME NOW</h2>
        </div>
      </div>
      <div className="w-3/4 mx-auto">
        <div className="hidden lg:flex w-full justify-center">
          <iframe
            src="https://store.steampowered.com/widget/1406090/"
            frameBorder="0"
            width="646"
            height="190"
            allowFullScreen
          ></iframe>
        </div>
        <div className="hidden sm:flex lg:hidden w-full justify-center">
          <iframe
            src="https://store.steampowered.com/widget/1406090/"
            frameBorder="0"
            width="646"
            height="210"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex sm:hidden w-full justify-center">
          <iframe
            src="https://store.steampowered.com/widget/1406090/"
            frameBorder="0"
            width="320"
            height="200"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="flex justify-center mt-4 sm:hidden">
        <Link href="https://studio-23.xyz/contact/" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
          CONTACT US
        </Link>
      </div>
    </section>
  );
};

export default GameSection;
