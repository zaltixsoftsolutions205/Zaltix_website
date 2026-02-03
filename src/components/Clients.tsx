import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const clients = [
  { logo: "/images/helprz-logo.png", url: "https://helprz.in" },
  { logo: "/images/dasah-media-works.png", url: "https://dasahmediaworks.com" },
  { logo: "/images/kalinga-university.png", url: "https://kiithydresourcecentre.com" },
  { logo: "/images/hans-design.png", url: "https://hansdesignstudio.com" },
  { logo: "/images/shubha-fertility.png", url: "https://shubhafertility.in/" },
  { logo: "/images/mami-physiocare.png", url: "https://mamiphysiocare.com/" },
  { logo: "/images/eshcul.png", url: "https://eshcul.com" },
  { logo: "/images/fyndom.png", url: "https://fyndom.in/" },
  { logo: "/images/barter-enterprises.png", url: "https://barterenterprises.com" },
];

const LOGO_WIDTH = 180; // px

const Clients = () => {
  const logoStripRef = useRef(null);

  const scroll = (direction) => {
    const { current } = logoStripRef;
    if (current) {
      current.scrollLeft += direction * LOGO_WIDTH * 2;
    }
  };

  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-black">We Collaborate & Create</span>{" "}
            <span className="text-violet-800">Digital Excellence</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At <span className="font-semibold text-violet-700">Zaltix Soft Solutions</span>, 
            we partner with visionary brands and organizations to build next-gen websites, 
            apps, and digital experiences that make an impact. 
          </p>
          <p className="text-md text-gray-500 mt-4 max-w-2xl mx-auto">
            We do things like crafting digital marketing strategies, developing modern web 
            applications, building scalable mobile apps, and designing brand identities — 
            everything your business needs to grow online.
          </p>
        </div>

        {/* Subheading */}
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Trusted by <span className="text-violet-800">Industry Leaders</span>
          </h3>
          <p className="text-gray-600 mt-2">
            Proudly working with clients from tech, education, healthcare, and creative industries.
          </p>
        </div>

        {/* Scrolling Logo Strip with Arrows */}
        <div className="relative">
          {/* Left Arrow Button */}
          <button
            type="button"
            aria-label="Scroll left"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-2 hover:bg-violet-100 transition"
            onClick={() => scroll(-1)}
          >
            <FaChevronLeft size={22} className="text-violet-800" />
          </button>

          {/* Logo Strip */}
          <div
            ref={logoStripRef}
            className="overflow-x-auto relative"
            style={{
              scrollBehavior: "smooth",
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <div className="flex animate-scroll-logos fast space-x-12 min-w-max py-4">
              {clients.concat(clients).map((client, index) => (
                <a
                  key={index}
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 glass-card p-6 rounded-2xl bg-white hover:scale-110 transition-transform duration-300 group min-w-[160px] hover:shadow-lg"
                >
                  <div className="flex items-center justify-center">
                    <img
                      src={client.logo}
                      alt={`Client Logo ${index + 1}`}
                      className="h-12 sm:h-16 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </a>
              ))}
            </div>

            {/* Hide scrollbar for Webkit browsers */}
            <style>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
          </div>

          {/* Right Arrow Button */}
          <button
            type="button"
            aria-label="Scroll right"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-2 hover:bg-violet-100 transition"
            onClick={() => scroll(1)}
          >
            <FaChevronRight size={22} className="text-violet-800" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Clients;
