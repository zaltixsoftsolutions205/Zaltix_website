import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Anjaneyulu',
      company: 'Helprz',
      testimonial:
        "Zaltix transformed our entire digital infrastructure. Their cloud solutions reduced our operational costs by 40% while improving performance significantly. The team's expertise and dedication are unmatched.",
      rating: 5,
    },
    {
      name: 'Raj Reddy',
      company: 'Eshcul',
      testimonial:
        'The mobile app developed by Zaltix exceeded our expectations. The user experience is seamless, and the performance is outstanding. Our customer engagement increased by 300% after launch.',
      rating: 5,
    },
    {
      name: 'Ganesh',
      company: 'Dasah Media Works',
      testimonial:
        'Working with Zaltix was a game-changer for our media company. Their AI/ML solutions automated our content curation process, saving us countless hours while improving content quality.',
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-gradient-to-br from-light-violet/10 via-white to-light-pink/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-black">What Our</span>{' '}
            <span className="text-violet-600">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from the companies we've helped transform
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Left Arrow */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 glass-card p-4 rounded-full hover:scale-110 transition-all duration-300 shadow-lg"
          >
            <ChevronLeft className="h-8 w-8 text-light-violet" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 glass-card p-4 rounded-full hover:scale-110 transition-all duration-300 shadow-lg"
          >
            <ChevronRight className="h-8 w-8 text-light-violet" />
          </button>

          {/* Testimonial Card */}
          <div className="glass-card p-12 rounded-3xl mx-16 transition-all duration-300 hover:shadow-[0_0_25px_rgba(139,92,246,0.4)] hover:border hover:border-violet-300">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, index) => (
                  <Star key={index} className="h-6 w-6 text-bold-yellow fill-current" />
                ))}
              </div>

              <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                "{testimonials[currentTestimonial].testimonial}"
              </blockquote>
            </div>

            <div className="flex items-center justify-center">
              <div className="text-center">
                <h4 className="text-xl font-semibold text-gray-900 mb-1">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-light-violet font-medium">
                  {testimonials[currentTestimonial].company}
                </p>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-light-violet shadow-lg scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Rating Summary */}
        <div className="mt-16 text-center">
          <div className="inline-block glass-card p-6 rounded-2xl">
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-violet-600">4.9/5</div>
                <div className="text-sm text-gray-800">Average Rating</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-600">100%</div>
                <div className="text-sm text-gray-600">Project Success</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-bold-yellow">95%</div>
                <div className="text-sm text-gray-600">Client Retention</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
