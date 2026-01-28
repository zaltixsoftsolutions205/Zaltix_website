import React from 'react';
import { Shield, Users, Zap, Clock, Code, Award } from 'lucide-react';

const WhyZaltix = () => {
  const features = [
    {
      icon: Shield,
      title: 'We Build Scalable & Secure Systems',
      description: 'We create enterprise-grade secure systems that grow seamlessly with your business.'
    },
    {
      icon: Users,
      title: 'We Have a Top-Tier Expert Team',
      description: 'Our experienced professionals bring deep expertise in cutting-edge technologies.'
    },
    {
      icon: Zap,
      title: 'We Use the Latest Tech Stack',
      description: 'We leverage modern frameworks and tools to deliver state-of-the-art solutions.'
    },
    {
      icon: Clock,
      title: 'We Provide Round-the-Clock Support',
      description: 'Our 24/7 technical support ensures your systems run smoothly without interruptions.'
    },
    {
      icon: Code,
      title: 'We Deliver Tailored Software Engineering',
      description: 'We custom-build solutions designed specifically for your unique business needs.'
    },
    {
      icon: Award,
      title: 'We Have a Proven Track Record',
      description: 'We consistently deliver high-quality projects with measurable business impact.'
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-padding bg-gradient-to-br from-light-violet/5 via-white to-light-pink/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-black">We Do These Things at</span>{' '}
            <span className="text-violet-600">Zaltix</span>
          </h2>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto font-medium">
            Combining technical excellence and business insight, we deliver solutions that drive real results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-light-violet/30 backdrop-blur-md border border-light-violet/40 rounded-2xl shadow-xl p-8 hover:scale-105 hover:bg-yellow-100 transition-all duration-500 animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-6">
                <div className="bg-light-violet rounded-2xl p-4 w-fit transition-all duration-500 group-hover:bg-violet-600">
                  {React.createElement(feature.icon, {
                    className:
                      'h-6 w-6 text-gray-800 transition-colors duration-500 group-hover:text-white fill-current'
                  })}
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-light-pink to-bold-yellow rounded-full opacity-20 group-hover:opacity-60 transition-opacity duration-500"></div>
                <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-gradient-to-r from-light-violet to-light-pink rounded-full opacity-30 group-hover:opacity-80 transition-opacity duration-500"></div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-black group-hover:font-bold transition-all duration-300">
                {feature.title}
              </h3>

              <p className="text-gray-800 leading-relaxed group-hover:text-black group-hover:font-semibold transition-all duration-300">
                {feature.description}
              </p>

              {/* Hover Line */}
              <div className="mt-6 h-1 w-0 bg-gradient-to-r from-light-violet to-light-pink rounded-full group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 relative">
          {/* Background Glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[1000px] h-[800px] bg-gradient-to-r from-light-violet/20 via-bold-yellow/15 to-light-pink/20 rounded-full blur-3xl animate-pulse"></div>
          </div>

          {/* Geometric Shapes */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[600px] h-[400px] border border-light-violet/30 rounded-3xl animate-float opacity-30"></div>
            <div
              className="w-[400px] h-[600px] border border-bold-yellow/30 rounded-3xl animate-float opacity-20"
              style={{ animationDelay: '1s' }}
            ></div>
          </div>

          {/* Floating Particles */}
          <div
            className="absolute top-1/4 left-1/4 w-4 h-4 bg-light-violet/40 rounded-full blur-sm animate-float"
            style={{ animationDelay: '0.5s' }}
          ></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-6 h-6 bg-bold-yellow/40 rounded-full blur-sm animate-float"
            style={{ animationDelay: '1.5s' }}
          ></div>
          <div
            className="absolute top-1/3 right-1/3 w-3 h-3 bg-light-pink/40 rounded-full blur-sm animate-float"
            style={{ animationDelay: '2s' }}
          ></div>
          <div
            className="absolute bottom-1/3 left-1/3 w-5 h-5 bg-light-violet/30 rounded-full blur-sm animate-float"
            style={{ animationDelay: '2.5s' }}
          ></div>

          <div className="relative z-10">
            <div className="glass-card p-12 max-w-2xl mx-auto backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl">
              <h3 className="text-3xl font-bold mb-6">
                <span className="text-black">Ready to Transform</span>{' '}
                <span className="text-violet-600">Your Business?</span>
              </h3>
              <p className="text-gray-800 mb-8 text-lg font-semibold">
                Let’s discuss how our expertise can help you achieve your digital transformation goals.
              </p>
              <button
                onClick={scrollToContact}
                className="bg-gradient-to-r from-purple-700 to-yellow-500 text-white px-12 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-purple-400/30 transition-all duration-300 hover:scale-105 transform group"
              >
                Start Your Project
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyZaltix;
