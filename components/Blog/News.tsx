import Link from 'next/link';
import React from 'react';
import { FaArrowRight, FaMedal } from 'react-icons/fa';
import { MdOutlineDateRange } from 'react-icons/md';

const newsArticles = [
    {
        id: 1,
        imageSrc: '/images/news-image-1.png', // Example image URL
        altText: 'Decorated living room with couch and colorful pillows',
        date: 'March 15, 2022',
        category: 'OIL CHANGE',
        title: 'HOW TO DECORATE YOUR CAR FOR HALLOWEEN',
        readMoreLink: '#',
    },
    {
        id: 2,
        imageSrc: '/images/news-image-1.png', // Example image URL
        altText: 'Modern living room with light grey couch and colorful pillows',
        date: 'March 15, 2022',
        category: 'OIL CHANGE',
        title: 'HOW TO DECORATE YOUR CAR FOR HALLOWEEN',
        readMoreLink: '#',
    },
    {
        id: 3,
        imageSrc: '/images/news-image-1.png', // Example image URL
        altText: 'Decorated living room with couch and colorful pillows',
        date: 'March 15, 2022',
        category: 'OIL CHANGE',
        title: 'HOW TO DECORATE YOUR CAR FOR HALLOWEEN',
        readMoreLink: '#',
    },
];

function News() {
    return (
        <div className="container mx-auto px-4 py-20">
            <h2 className="text-center text-4xl font-semibold mb-8">OUR LATEST NEWS INSIGHT</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {newsArticles.map((article) => (
                    <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img
                            src={article.imageSrc}
                            alt={article.altText}
                            className="w-full h-auto object-cover"
                        />
                        <div className="p-4 pb-6">
                            <div className="flex items-center text-[#74787C] text-sm mb-2">
                                <span className="mr-3 flex items-center gap-1">
                                    <MdOutlineDateRange className='text-[#121314] text-xl' />
                                    {article.date}
                                </span>
                                <span className="mr-3 flex items-center  gap-1">
                                    <FaMedal className='text-[#121314] text-md mt-1' />
                                    {article.category}
                                </span>
                            </div>
                            <h3 className="text-2xl font-semibold mb-3">{article.title}</h3>
                            <div className='border border-[#EAEAEA] mb-5 mt-5'></div>
                            <div className="flex items-center gap-2 text-[#121314] ">
                                <Link href={article.readMoreLink} className="  font-semibold ">
                                    Read More

                                </Link>
                                <FaArrowRight className='mt-1' />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default News;