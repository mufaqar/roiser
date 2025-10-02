"use client"
import React, { useRef } from 'react';

// Array of video data
const dailyUpdatesVideos = [
  {
    id: 1,
    videoSrc: 'https://www.w3schools.com/html/mov_bbb.mp4', // Replace with your video URL
    posterSrc: 'https://via.placeholder.com/200x350?text=Video+1+Poster', // Optional: Image to display before video loads
    altText: 'Man walking towards a modern sofa',
    views: '1.2K', // Example view count
    likes: '450', // Example like count (could be represented by the heart icon count)
    caption: 'You know that moment... end the day\'s grind and the perfect calling?',
  },
  {
    id: 2,
    videoSrc: 'https://www.w3schools.com/html/movie.mp4', // Replace with your video URL
    posterSrc: 'https://via.placeholder.com/200x350?text=Video+2+Poster',
    altText: 'Cinema style reclining chairs with special effects',
    views: '987',
    likes: '321',
    caption: 'Why settle for a traditional 3+2 sofa setup',
  },
  {
    id: 3,
    videoSrc: 'https://www.w3schools.com/html/mov_bbb.mp4', // Replace with your video URL
    posterSrc: 'https://via.placeholder.com/200x350?text=Video+3+Poster',
    altText: 'Woman relaxing in a reclining chair in a green-paneled room',
    views: '1.5K',
    likes: '418',
    caption: 'You know that one corner of the house that just look different...',
  },
  {
    id: 4,
    videoSrc: 'https://www.w3schools.com/html/movie.mp4', // Replace with your video URL
    posterSrc: 'https://via.placeholder.com/200x350?text=Video+4+Poster',
    altText: 'Woman showing a sofa hack',
    views: '1.8K',
    likes: '393',
    caption: 'Designers hate this one sofa hack 😂',
  },
  {
    id: 5,
    videoSrc: 'https://www.w3schools.com/html/mov_bbb.mp4', // Replace with your video URL
    posterSrc: 'https://via.placeholder.com/200x350?text=Video+5+Poster',
    altText: 'Man looking at a reclining chair intensely',
    views: '1.1K',
    likes: '149',
    caption: 'WAIT.. WHAT IS BRO DOING 🤯',
  },
  {
    id: 6,
    videoSrc: 'https://www.w3schools.com/html/movie.mp4', // Replace with your video URL
    posterSrc: 'https://via.placeholder.com/200x350?text=Video+6+Poster',
    altText: 'Another view of reclining chairs',
    views: '800',
    likes: '100',
    caption: 'Comfort at home.',
  },
];

function DailyUpdate() {
  const scrollContainerRef = useRef(null);

  const scroll = (direction:any) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300; // Adjust scroll amount as needed
      if (direction === 'left') {
        scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className=" py-8">
      <h2 className="text-center text-6xl font-semibold mb-8">DAILY UPDATES</h2>
      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-4 py-4 scrollbar-hide" // scrollbar-hide utility might need to be configured or implemented for some browsers
          style={{ scrollSnapType: 'x mandatory' }} // Optional: for snapping effect
        >
          {dailyUpdatesVideos.map((video) => (
            <div
              key={video.id}
              className="relative flex-shrink-0 w-64 h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg"
              style={{ scrollSnapAlign: 'start' }} // Optional: for snapping effect
            >
              <video
                src={video.videoSrc}
                poster={video.posterSrc} // Image to show before video loads
                className="w-full h-full object-cover"
                controls={false} // Hide default controls for a cleaner look, you can add custom ones
                autoPlay={false} // Don't autoplay all videos at once
                loop // Loop the video
                muted // Mute by default for autoplay scenarios or on hover
              >
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>

              {/* Top-right views/likes icons */}
              <div className="absolute top-2 right-2 flex space-x-2 text-white text-sm">
                <span className="flex items-center bg-black bg-opacity-50 px-2 py-1 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  {video.views}
                </span>
                <span className="flex items-center bg-black bg-opacity-50 px-2 py-1 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                  {video.likes}
                </span>
              </div>

              {/* Bottom caption */}
              <div className="absolute bottom-0 left-0 p-4 text-white text-sm">
                <p>{video.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-75 focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-75 focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default DailyUpdate;