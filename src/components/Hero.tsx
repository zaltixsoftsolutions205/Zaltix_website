import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const navigate = useNavigate();

  const videos = [
    {
      id: 1,
      title: 'Cloud Services',
      url: '/videos/cloud.mp4',
      description: 'Scalable cloud solutions for modern businesses',
    },
    {
      id: 2,
      title: 'AI/ML Solutions',
      url: '/videos/ai.mp4',
      description: 'Intelligent systems powered by machine learning',
    },
    {
      id: 3,
      title: 'Cybersecurity',
      url: '/videos/cybersecurity.mp4',
      description: 'Comprehensive security solutions and protection',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const handleGetStarted = () => {
    navigate('/contact');
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Video Carousel */}
      <div className="absolute inset-0 z-0">
        {videos.map((video, index) => (
          <div
            key={video.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentVideo ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={video.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in leading-tight">
              <span>Your Future,</span>{' '}
              <span className="text-violet-500">Engineered.</span>
            </h1>

            <p className="text-base sm:text-xl md:text-2xl text-gray-200 animate-slide-in-right">
              {videos[currentVideo].description}
            </p>

            <div className="animate-fade-in delay-300 pt-2">
              <button
                onClick={handleGetStarted}
                className="glass-button text-white hover:text-gray-900 text-lg group"
              >
                Let's Build Your Solution
              </button>
            </div>

            {/* Video Navigation */}
            <div className="flex items-center gap-4 mt-8">
              <button
                onClick={prevVideo}
                className="glass-card p-3 rounded-full hover:scale-110 transition-all duration-300"
              >
                <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </button>

              <div className="flex gap-2">
                {videos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentVideo(index)}
                    className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                      index === currentVideo
                        ? 'bg-light-violet shadow-lg'
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextVideo}
                className="glass-card p-3 rounded-full hover:scale-110 transition-all duration-300"
              >
                <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <ArrowDown className="h-6 w-6 sm:h-8 sm:w-8 text-white/80" />
      </div>
    </section>
  );
};

export default Hero;
