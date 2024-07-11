import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './ScreenshotSection.module.css';

import image1 from '@/assets/images/screenshots/1.png';
import image2 from '@/assets/images/screenshots/2.png';
import image3 from '@/assets/images/screenshots/3.png';
import image4 from '@/assets/images/screenshots/4.png';
import image5 from '@/assets/images/screenshots/5.png';
import image6 from '@/assets/images/screenshots/6.png';
import image7 from '@/assets/images/screenshots/7.png';
import image8 from '@/assets/images/screenshots/8.png';
import image9 from '@/assets/images/screenshots/9.png';

interface GalleryImage {
    src: string;
    alt: string;
}

const galleryImages: GalleryImage[] = [
    { src: image1.src, alt: "Control Override Screenshot 1" },
    { src: image2.src, alt: "Control Override Screenshot 2" },
    { src: image3.src, alt: "Control Override Screenshot 3" },
    { src: image4.src, alt: "Control Override Screenshot 4" },
    { src: image5.src, alt: "Control Override Screenshot 5" },
    { src: image6.src, alt: "Control Override Screenshot 6" },
    { src: image7.src, alt: "Control Override Screenshot 7" },
    { src: image8.src, alt: "Control Override Screenshot 8" },
    { src: image9.src, alt: "Control Override Screenshot 9" },
];


const ScreenshotSection = () => (
  <section id="screenshots" className="w-full min-h-screen flex flex-col items-center justify-center bg-[#0a0a0a] py-12">
    <h2 className="text-2xl md:text-3xl font-semibold text-center text-green-300 mb-10">SCREENSHOTS</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
      {galleryImages.map((image, index) => (
        <Link key={index} href={image.src} passHref>
          <div className={styles.galleryItem}>
            <div className={`${styles.imageContainer} border-green-500 border-2`}>
              <Image
                src={image.src}
                alt={image.alt}
                width={300}
                height={169}
                layout="responsive"
                className="transition duration-300 ease-in-out transform"
              />
            </div>
            <div className={styles.imageHoverOverlay}></div>
            <div className={styles.neonEffect}></div>
          </div>
        </Link>
      ))}
    </div>
  </section>
);

export default ScreenshotSection;
