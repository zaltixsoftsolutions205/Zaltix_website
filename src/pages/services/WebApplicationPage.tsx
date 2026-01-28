import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ArrowLeft, Globe, Check, Server, Zap, ShieldCheck, Cpu, Users, Briefcase } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const WebApplicationPage = () => {
  const navigate = useNavigate();
  const [visibleCards, setVisibleCards] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.service-card, .hero-element');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const services = [
    'Custom Web Applications Tailored to Your Business',
    'Seamless User Experiences Across Devices',
    'Interactive and Engaging Interfaces',
    'Integrated Solutions to Simplify Workflows',
    'Reliable and Consistent Performance',
    'Flexible Designs that Grow with Your Needs',
    'Easy-to-Managing Applications for Teams',
    'Focused on Business Results and Customer Satisfaction',
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Fast & Smooth Experience',
      description: 'Web applications designed to be quick, responsive, and intuitive for every user.',
    },
    {
      icon: ShieldCheck,
      title: 'Safe & Secure',
      description: 'Protect your users and business data with strong security and privacy measures.',
    },
    {
      icon: Server,
      title: 'Scalable for Growth',
      description: 'Applications that adapt and grow as your business expands and evolves.',
    },
  ];

  const industries = [
    {
      icon: Briefcase,
      title: 'Corporate Businesses',
      description: 'Helping companies streamline operations and improve team collaboration.',
    },
    {
      icon: Globe,
      title: 'E-Commerce',
      description: 'Enhancing online shopping experiences to increase customer engagement and sales.',
    },
    {
      icon: Users,
      title: 'Community & Social Platforms',
      description: 'Creating spaces where users connect, interact, and share content seamlessly.',
    },
  ];

  return (
    <div className="min-h-screen bg-white page-background">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-violet-200/20 rounded-full animate-float-slow"></div>
        <div className="absolute top-40 right-16 w-24 h-24 bg-purple-200/25 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-40 left-16 w-28 h-28 bg-pink-200/20 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-32 w-20 h-20 bg-violet-300/30 rounded-full animate-float-slow"></div>

        {/* Floating Icons */}
        <div className="absolute top-1/4 left-1/4 animate-float">
          <Cpu className="h-8 w-8 text-violet-200/40" />
        </div>
        <div className="absolute bottom-1/3 right-1/4 animate-float-delayed">
          <Server className="h-6 w-6 text-purple-200/40" />
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
              <Cpu className="h-12 w-12" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-black">Beautifully Crafted</span>{' '}
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                Web Applications
              </span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              We build web applications that delight your users, simplify your business processes, and drive growth. 
              Our solutions are easy to use, visually appealing, and designed to make a real impact on your business.
            </p>
            <button
              onClick={() => navigate('/services')}
              className="group bg-white text-purple-600 border-2 border-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300 hover:scale-105 transform flex items-center space-x-2 mx-auto"
            >
              <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Services</span>
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-violet-50/30 to-purple-50/20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div
            id="services-section"
            className={`service-card ${visibleCards.has('services-section') ? 'animate-slide-in-left' : 'opacity-0'}`}
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-black">Our</span>{' '}
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                Offerings
              </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {services.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center bg-white/70 border border-gray-200 p-3 rounded-xl backdrop-blur-sm hover:bg-violet-50 transition-all"
                >
                  <Check className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-800">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div
            id="benefits-section"
            className={`service-card ${visibleCards.has('benefits-section') ? 'animate-slide-in-right' : 'opacity-0'} space-y-6`}
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-black">Why Choose</span>{' '}
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                Us
              </span>
            </h2>
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm border border-violet-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-700">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">
            <span className="text-black">Industries</span>{' '}
            <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              We Serve
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {industries.map(({ icon: Icon, title, description }, idx) => (
              <div
                key={idx}
                className={`service-card bg-white/90 backdrop-blur-sm border border-violet-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                  visibleCards.has(`industry-${idx}`) ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                id={`industry-${idx}`}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-4 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 text-white inline-flex">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold">{title}</h3>
                </div>
                <p className="text-gray-700">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-violet-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <div
            id="cta-section"
            className={`service-card ${visibleCards.has('cta-section') ? 'animate-fade-in-up' : 'opacity-0'}`}
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-black">Ready to Build</span>{' '}
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                Your Web Application?
              </span>
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Let's work together to create a beautiful, easy-to-use, and impactful web application that brings value to your business and delight to your users.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105 transform"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebApplicationPage;
