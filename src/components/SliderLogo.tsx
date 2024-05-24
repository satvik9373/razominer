"use client"
import React from 'react';

const videos = [
  { videoSrc: '/razominer.mp4', coverImage: '/intro.png' },
  { videoSrc: '/razominer.mp4', coverImage: '/gmaps.png' },
  { videoSrc: '/razominer.mp4', coverImage: '/yp thumbnail.png' },
  { videoSrc: '/razominer.mp4', coverImage: '/dubai.png' },
  { videoSrc: '/razominer.mp4', coverImage: '/coming soon.png' },
  { videoSrc: '/razominer.mp4', coverImage: '/coming soon.png' },
];

export const SliderLogo = () => {
  return (
    
    <div className="font-sans box-border m-0 p-0">
      <section className="min-h-screen flex flex-col items-center mt-3">
        <div className="container max-w-[1300px] w-full mx-auto px-4">
          <div className="flex flex-wrap -mx-2 justify-between">
            {videos.map((video, index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
                <div className="bg-white rounded-lg p-5 transition-all duration-300 border-2 border-transparent">
                  <div className="relative w-full h-auto rounded-md overflow-hidden">
                    
                    <img src={video.coverImage} alt="Cover" className="w-full h-full object-cover absolute inset-0" />
                    <video
                      id={`video-${index}`}
                      controls
                      loop
                      muted
                      className="w-full h-auto rounded-md"
                    >
                      <source src={video.videoSrc} type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
