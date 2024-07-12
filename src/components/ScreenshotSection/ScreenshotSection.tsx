"use client"

// Import necessary libraries and components
import React, { useState } from 'react';
import Image from 'next/image';
import { AiOutlineClose, AiOutlineShareAlt, AiOutlineLeft, AiOutlineRight, AiOutlineZoomIn, AiOutlineZoomOut } from 'react-icons/ai';
import { FaFacebook, FaTwitter, FaPinterestP } from 'react-icons/fa';
import { BiDownload } from 'react-icons/bi';
import styles from './ScreenshotSection.module.css';

// Define the type for the images used in the gallery
interface GalleryImage {
  src: string;
  alt: string;
}

// Import the images
import image1 from '@/assets/images/screenshots/1.png';
import image2 from '@/assets/images/screenshots/2.png';
import image3 from '@/assets/images/screenshots/3.png';
import image4 from '@/assets/images/screenshots/4.png';
import image5 from '@/assets/images/screenshots/5.png';
import image6 from '@/assets/images/screenshots/6.png';
import image7 from '@/assets/images/screenshots/7.png';
import image8 from '@/assets/images/screenshots/8.png';
import image9 from '@/assets/images/screenshots/9.png';

// Create an array of gallery images
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

const ScreenshotSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
    setShowShareOptions(false);
    setZoomLevel(1); // Reset zoom level when opening modal
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleShareOptions = () => {
    setShowShareOptions(!showShareOptions);
  };

  const handlePrevious = () => {
    setZoomLevel(1);
    setSelectedImageIndex((selectedImageIndex + galleryImages.length - 1) % galleryImages.length);
  };

  const handleNext = () => {
    setZoomLevel(1);
    setSelectedImageIndex((selectedImageIndex + 1) % galleryImages.length);
  };

  const handleZoomIn = () => {
    setZoomLevel((prevZoomLevel) => Math.min(prevZoomLevel + 0.1, 3)); // Maximum zoom level of 3
  };

  const handleZoomOut = () => {
    setZoomLevel((prevZoomLevel) => Math.max(prevZoomLevel - 0.4, 1)); // Minimum zoom level of 1
  };

  return (
    <section id="screenshots" className="w-full min-h-screen flex flex-col items-center justify-center py-12">
      <h2 className="text-2xl md:text-3xl font-semibold text-center text-color mb-10">SCREENSHOTS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
        {galleryImages.map((image, index) => (
          <div key={index} className={styles.galleryItem} onClick={() => openModal(index)}>
            <div className={`${styles.imageContainer} border-green-500 border-2`}>
              <Image
                src={image.src}
                alt={image.alt}
                width={300}
                height={169}
                layout="responsive"
                className="transition duration-300 ease-in-out transform hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white neon-bg p-8 rounded-lg shadow-lg relative max-w-3xl w-full">
            <button onClick={closeModal} className="absolute top-2 right-2 text-2xl text-black"><AiOutlineClose /></button>
            <div className="relative overflow-hidden">
              <Image src={galleryImages[selectedImageIndex].src} style={{ transform: `scale(${zoomLevel})` }} alt={galleryImages[selectedImageIndex].alt} width={800} height={480} layout="intrinsic" className="rounded-lg" />
            </div>
            <div className="absolute top-2 right-right8% flex space-x-2">
              <button onClick={handleZoomIn} className="text-2xl text-black"><AiOutlineZoomIn /></button>
              <button onClick={handleZoomOut} className="text-2xl text-black"><AiOutlineZoomOut /></button>
            </div>
            <button onClick={toggleShareOptions} className="absolute top-2 right-10 text-2xl text-black"><AiOutlineShareAlt /></button>
            <button onClick={handlePrevious} className="absolute left-2 bottom-bottonMiddle text-xl text-black h-6 "><AiOutlineLeft /></button>
            <button onClick={handleNext} className="absolute right-2 bottom-bottonMiddle text-xl text-black h-6"><AiOutlineRight /></button>
            {showShareOptions && (
              <div className="absolute top-12 right-2 bg-white shadow-lg rounded-lg py-2 text-black">
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.origin + galleryImages[selectedImageIndex].src)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 hover:bg-gray-100">
                  <FaFacebook className="text-facebook mr-2" />
                  Share on Facebook
                </a>
                <a href={`https://twitter.com/intent/tweet?text=Check out this amazing screenshot!&url=${encodeURIComponent(window.location.origin + galleryImages[selectedImageIndex].src)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 hover:bg-gray-100">
                  <FaTwitter className="text-twitter mr-2" />
                  Share on Twitter
                </a>
                <a href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(window.location.origin + galleryImages[selectedImageIndex].src)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 hover:bg-gray-100">
                  <FaPinterestP className="text-pinterest mr-2" />
                  Pin it
                </a>
                <a href={`${window.location.origin + galleryImages[selectedImageIndex].src}`}
                  download
                  className="flex items-center px-4 py-2 hover:bg-gray-100">
                  <BiDownload className="text-download mr-2" />
                  Download image
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default ScreenshotSection;
