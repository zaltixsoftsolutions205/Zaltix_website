import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ArrowLeft, Globe, Check, Zap, ShieldCheck, Server, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const WebDevelopmentPage = () => {
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

  // Generalized capabilities instead of listing specific tech
  const capabilities = [
    'Custom Web Development',
    'Responsive & Mobile-Friendly Design',
    'E-commerce & CMS Solutions',
    'API & Third-Party Integrations',
    'SEO & Performance Optimization',
    'Progressive Web Apps',
    'Maintenance & Support',
    'Scalable & Secure Architecture'
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'High Speed',
      description: 'Fast-loading, optimized websites built for performance.'
    },
    {
      icon: ShieldCheck,
      title: 'Secure by Design',
      description: 'Websites designed with security best practices in mind.'
    },
    {
      icon: Server,
      title: 'Scalable Systems',
      description: 'Web solutions that grow seamlessly with your business.'
    }
  ];

  return (
    <div className="min-h-screen bg-white page-background">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-violet-200/20 rounded-full animate-float-slow"></div>
        <div className="absolute top-40 right-16 w-24 h-24 bg-blue-200/25 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-40 left-16 w-28 h-28 bg-pink-200/20 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-32 w-20 h-20 bg-purple-300/30 rounded-full animate-float-slow"></div>

        {/* Floating Icons */}
        <div className="absolute top-1/4 left-1/4 animate-float">
          <Globe className="h-8 w-8 text-blue-200/40" />
        </div>
        <div className="absolute bottom-1/3 right-1/4 animate-float-delayed">
          <Server className="h-6 w-6 text-violet-200/40" />
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
            <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white mb-6">
              <Globe className="h-12 w-12" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-black">Web Development</span>{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We deliver modern, responsive websites and web apps that are secure, scalable, and optimized for performance.
            </p>
            <button
              onClick={() => navigate('/services')}
              className="group bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105 transform flex items-center space-x-2 mx-auto"
            >
              <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Services</span>
            </button>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50/30 to-purple-50/20">
        <div className="max-w-7xl mx-auto">
          <div
            id="capabilities-section"
            className={`service-card ${visibleCards.has('capabilities-section') ? 'animate-slide-in-left' : 'opacity-0'}`}
          >
            <h2 className="text-4xl font-bold mb-8 text-center">
              <span className="text-black">Our</span>{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Capabilities</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {capabilities.map((cap, idx) => (
                <div key={idx} className="flex items-center p-4 bg-white/80 backdrop-blur-sm border border-gray-100 rounded-xl hover:bg-blue-50/60 transition-all">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-lg text-gray-800">{cap}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div
            id="benefits-section"
            className={`service-card ${visibleCards.has('benefits-section') ? 'animate-fade-in-up' : 'opacity-0'}`}
          >
            <h2 className="text-4xl font-bold mb-8 text-center">
              <span className="text-black">Why</span>{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Choose Us?</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {benefits.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/80 backdrop-blur-sm border border-violet-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white">
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

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <div
            id="cta-section"
            className={`service-card ${visibleCards.has('cta-section') ? 'animate-fade-in-up' : 'opacity-0'}`}
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-black">Ready to Launch</span>{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Your Website?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get a custom quote for your web project and turn your vision into reality.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 transform"
            >
              Get Custom Quote
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebDevelopmentPage;
