"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { LuSofa } from 'react-icons/lu';
import { FaHeadset } from 'react-icons/fa';



function LatestCollection() {
  const [activeTab, setActiveTab] = useState('why-choose-us');

  const tabContent = {
    'why-choose-us': {
      title: "WE'RE ONLINE FURNITURE SELLER",
      description:
        "Our entire design process is fueled by a powerful combination: almost a decade of deep industry knowledge and real-world feedback from thousands of UK customers. This allows us to create innovative, high-performance \"Ultra\" boards that are truly built to last—we don’t call them \"Ultra\" by chance. The ultimate proof is in time. See for yourself how our products stand the test of years in the video and images below, featuring a real UK project still thriving after 5+ years.",
      features: [
        {
          icon: <LuSofa className='text-white text-2xl' />, 
          heading: 'PURE FURNISHED TABLE',
          text: 'Understanding the sometimes harmful methods of modern agriculture, we started a niche for quality',
        },
        {
          icon: <FaHeadset className='text-white text-2xl' />, // Added text-gray-700 for icon color
          heading: '24/7 SUPPORT SERVICES',
          text: 'Understanding the sometimes harmful methods of modern agriculture, we started a niche for quality',
        },
      ],
      imageSrc: '/images/COLLECTION.png',
    },
    'installation-guide': {
      title: "EASY INSTALLATION GUIDE",
      description:
        "Our comprehensive installation guide ensures a smooth setup process for all our furniture. From unboxing to final assembly, we provide clear, step-by-step instructions. You'll find detailed diagrams and helpful tips to get your new furniture ready in no time. For complex items, video tutorials are also available to walk you through each stage.",
      features: [
        {
          icon: <LuSofa className='text-text-white text-2xl' />, // Placeholder icon
          heading: 'DETAILED INSTRUCTIONS',
          text: 'Clear, concise steps for every assembly stage.',
        },
        {
          icon: <FaHeadset className='text-text-white text-2xl' />, // Placeholder icon
          heading: 'VIDEO TUTORIALS',
          text: 'Visual guides for complex assemblies.',
        },
      ],
      imageSrc: '/images/COLLECTION.png',
    },
    'accessories': {
      title: "PERFECT ACCESSORIES FOR YOUR HOME",
      description:
        "Complete your living space with our carefully curated collection of home accessories. From decorative accents and cozy throws to elegant lighting and functional storage solutions, we have everything you need to add the finishing touches. Our accessories are designed to complement our furniture ranges, ensuring a cohesive and stylish look throughout your home.",
        features: [
        {
          icon: <LuSofa className='text-text-white text-2xl' />, // Placeholder icon
          heading: 'DECORATIVE ACCENTS',
          text: 'Enhance your space with stylish details.',
        },
        {
          icon: <FaHeadset className='text-text-white text-2xl' />, // Placeholder icon
          heading: 'FUNCTIONAL STORAGE',
          text: 'Smart solutions to keep your home tidy.',
        },
      ],
      imageSrc: '/images/COLLECTION.png',
    },
  };

  const currentContent = tabContent[activeTab];

  return (
    <section className="bg-white py-16">
      <div className=""> {/* Centralized container for entire section */}
        <h2 className="text-center text-4xl font-semibold text-gray-800 mb-8 tracking-wide">
          OUR LATEST COLLECTION
        </h2>

        <div className="container mx-auto px-4 flex justify-center space-x-2 md:space-x-4 mb-12 flex-wrap gap-y-4"> {/* Added flex-wrap and gap-y for small screens */}
          <button
            onClick={() => setActiveTab('why-choose-us')}
            className={`px-4 py-2 md:px-6 md:py-3 text-sm font-medium rounded-md transition duration-300 whitespace-nowrap
              ${activeTab === 'why-choose-us' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            WHY CHOOSE US
          </button>
          <button
            onClick={() => setActiveTab('installation-guide')}
            className={`px-4 py-2 md:px-6 md:py-3 text-sm font-medium rounded-md transition duration-300 whitespace-nowrap
              ${activeTab === 'installation-guide' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            INSTALLATION GUIDE
          </button>
          <button
            onClick={() => setActiveTab('accessories')}
            className={`px-4 py-2 md:px-6 md:py-3 text-sm font-medium rounded-md transition duration-300 whitespace-nowrap
              ${activeTab === 'accessories' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            ACCESSORIES
          </button>
        </div>

        <div className="flex flex-col lg:flex-row   overflow-hidden ">
          <div className="lg:w-1/2 w-full relative">
            {/* Added an aspect ratio for the image container to prevent collapsing on smaller screens */}
            {/* On small screens, fixed aspect ratio. On large screens, height is defined by sibling flex item */}
            <div className="relative pt-[75%] lg:pt-[unset] lg:h-full">
              <Image
                src={currentContent.imageSrc}
                alt="Furniture Collection"
                layout="fill"
                objectFit="cover"
                priority
                className="rounded-lg lg:rounded-none" // Apply rounded corners only on smaller screens
              />
            </div>
          </div>
          <div className="lg:w-1/2 w-full p-8 lg:p-12 bg-gray-800 text-white flex flex-col justify-center container mx-auto px-4">
            {/* Removed fixed height 'h-80 lg:h-[500px]' from this div
                to allow its height to adjust naturally,
                which then dictates the image height on larger screens */}
            <h3 className="text-3xl font-bold mb-4 tracking-wide">
              {currentContent.title}
            </h3>
            <p className="text-gray-300 text-base leading-relaxed mb-6">
              {currentContent.description}
            </p>

            <div className="space-y-6">
              {currentContent.features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 p-3 bg-gray-700 rounded-full mr-4 flex items-center justify-center"> {/* Added flex for centering icon */}
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">{feature.heading}</h4>
                    <p className="text-gray-400 text-sm">{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LatestCollection;