import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Settings, CheckCircle, Star, ArrowLeft, Code, Cog, Layers, Target, Globe, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CustomSoftwarePage = () => {
  const navigate = useNavigate();
  const [visibleCards, setVisibleCards] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.service-card, .hero-element');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  // Generalized capabilities/features
  const capabilities = [
    'Requirements Analysis & Planning',
    'Custom Software Architecture',
    'Full-Stack Development',
    'Database Design & Integration',
    'API Development & Integration',
    'Quality Assurance & Testing',
    'Deployment & Maintenance',
    'Ongoing Support & Updates',
    'Performance Optimization',
    'User Experience Design',
    'Cloud & DevOps Integration'
  ];

  const benefits = [
    {
      icon: Code,
      title: 'Tailored Solutions',
      description: 'Software built specifically for your unique business needs.'
    },
    {
      icon: Cog,
      title: 'Seamless Integration',
      description: 'Perfect integration with your existing systems and workflows.'
    },
    {
      icon: Layers,
      title: 'Scalable Architecture',
      description: 'Built to grow with your business requirements.'
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Every solution designed to achieve your business objectives efficiently.'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Optimized and fast solutions for better user experience.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Build software that supports international standards and scalability.'
    }
  ];

  return (
    <div className="min-h-screen bg-white page-background">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-violet-200/20 rounded-full animate-float-slow"></div>
        <div className="absolute top-40 right-16 w-24 h-24 bg-purple-200/25 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-40 left-16 w-28 h-28 bg-pink-200/20 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-32 w-20 h-20 bg-purple-300/30 rounded-full animate-float-slow"></div>

        {/* Floating Icons */}
        <div className="absolute top-1/4 left-1/4 animate-float">
          <Settings className="h-8 w-8 text-violet-200/40" />
        </div>
        <div className="absolute bottom-1/3 right-1/4 animate-float-delayed">
          <Code className="h-6 w-6 text-purple-200/40" />
        </div>
      </div>

      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto text-center">
          <div
            id="hero-title"
            className={`hero-element ${visibleCards.has('hero-title') ? 'animate-fade-in-up' : 'opacity-0'}`}
          >
            <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 text-white mb-6">
              <Settings className="h-12 w-12" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-black">Custom Software</span>{' '}
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We create software that fits your business like a glove — scalable, secure, and designed for success.
            </p>
            <button
              onClick={() => navigate('/services')}
              className="group bg-white text-violet-600 border-2 border-violet-600 px-6 py-3 rounded-full font-semibold hover:bg-violet-600 hover:text-white transition-all duration-300 hover:scale-105 transform flex items-center space-x-2 mx-auto"
            >
              <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Services</span>
            </button>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-violet-50/30 to-purple-50/20">
        <div className="max-w-7xl mx-auto">
          <div
            id="capabilities-section"
            className={`service-card ${visibleCards.has('capabilities-section') ? 'animate-slide-in-left' : 'opacity-0'}`}
          >
            <h2 className="text-4xl font-bold mb-8 text-center">
              <span className="text-black">Our</span>{' '}
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">Capabilities</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {capabilities.map((cap, idx) => (
                <div key={idx} className="flex items-center p-4 bg-white/80 backdrop-blur-sm border border-gray-100 rounded-xl hover:bg-purple-50/60 transition-all duration-300">
                  <CheckCircle className="h-6 w-6 text-violet-600 mr-3" />
                  <span className="text-lg text-gray-800">{cap}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div
            id="benefits-section"
            className={`service-card ${visibleCards.has('benefits-section') ? 'animate-fade-in-up' : 'opacity-0'}`}
          >
            <h2 className="text-4xl font-bold mb-8 text-center">
              <span className="text-black">Why</span>{' '}
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">Choose Us?</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {benefits.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/80 backdrop-blur-sm border border-violet-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-violet-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">
            <span className="text-black">Our Approach</span>
          </h2>
          <p className="text-lg text-gray-700 mb-6 text-center">
            We follow a structured approach to deliver software solutions that align with your business goals. Our team combines strategy, design, and technology to create applications that are not only functional but also intuitive and user-friendly.
          </p>
          <p className="text-lg text-gray-700 mb-6 text-center">
            From initial planning and design to deployment and ongoing support, we ensure that every step of the development process is transparent and collaborative. Our solutions are scalable, secure, and optimized for performance.
          </p>
          <p className="text-lg text-gray-700 text-center">
            Partner with us to transform your ideas into impactful software that empowers your business and enhances your operations.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-violet-50/30 to-purple-50/20">
        <div className="max-w-4xl mx-auto text-center">
          <div
            id="cta-section"
            className={`service-card ${visibleCards.has('cta-section') ? 'animate-fade-in-up' : 'opacity-0'}`}
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-black">Ready to Build Your</span>{' '}
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">Custom Solution?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss your unique requirements and create software that works exactly how you need it to.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-violet-500/30 transition-all duration-300 hover:scale-105 transform"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CustomSoftwarePage;
