import Image from 'next/image';
import Link from 'next/link';
import banner from '@/assets/images/banner.png';

const HeroSection = () => {
  return (
    <section className="w-full flex items-center justify-center bg-black p-4 lg:h-screen md:h-2/3 sm:h-1/5">
      <div className="text-center max-w-lg mx-auto">
        <Image
          src={banner.src}
          alt="Control Override Cover Glow"
          width={600}
          height={200}
          priority
          className="mx-auto"
        />
        <h3 className="text-green-400 text-xl md:text-3xl lg:text-4xl my-5">
          PLAY AS A HACKER ON A MISSION TO TERMINATE A ROGUE AI
        </h3>
        <div className="flex justify-center space-x-4 mt-4">
          <Link href="https://store.steampowered.com/app/1406090/ControlOverride/">
            <span className="inline-block bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300">
              BUY NOW
            </span>
          </Link>
          <Link href="https://drive.google.com/drive/folders/1cInz9pylfEsPm-2y3p5G-49LSlsiVw44?fbclid=IwAR0v7tcjbP1m_3iQ28pPmFCh42VNuKjlOLlIOWQ3L-xipwj19-qnXvo8s58">
            <span className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
              PRESS KIT
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
