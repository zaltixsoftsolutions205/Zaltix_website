import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ArrowLeft, Smartphone, Check, Zap, Target, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AppDevelopmentPage = () => {
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

  // Generalized capabilities instead of specific technologies
  const capabilities = [
    'Custom Mobile App Development',
    'Cross-Platform Solutions',
    'Intuitive User Experience Design',
    'High Performance & Scalability',
    'App Deployment & Store Management',
    'Analytics & Performance Monitoring',
    'Ongoing Support & Maintenance',
    'Feature Enhancements & Updates'
  ];

  const steps = [
    {
      title: 'Discovery & Planning',
      color: 'purple',
      desc: 'Understand your business, goals, and app requirements to plan the perfect solution.'
    },
    {
      title: 'Design & Prototyping',
      color: 'blue',
      desc: 'Create visually appealing UI/UX designs and interactive prototypes for early feedback.'
    },
    {
      title: 'Development & Testing',
      color: 'purple',
      desc: 'Implement robust, high-performance code with continuous testing and quality assurance.'
    },
    {
      title: 'Launch & Support',
      color: 'blue',
      desc: 'Deploy the app to app stores and provide ongoing updates, monitoring, and support.'
    }
  ];

  const benefits = [
    'Reach users on multiple platforms',
    'Increase customer engagement',
    'Boost business efficiency',
    'Gather valuable analytics',
    'Enhance brand credibility'
  ];

  const whyChooseUs = [
    'Experienced development team',
    'Modern and scalable technology stack',
    'End-to-end project management',
    'Transparent communication and reporting',
    'Commitment to on-time delivery'
  ];

  return (
    <div className="min-h-screen bg-white page-background">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-24 left-16 w-32 h-32 bg-blue-200/20 rounded-full animate-float-slow"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-200/25 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-40 left-20 w-28 h-28 bg-pink-200/20 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-28 w-20 h-20 bg-blue-300/30 rounded-full animate-float-slow"></div>

        {/* Floating Icons */}
        <div className="absolute top-1/3 left-1/4 animate-float">
          <Smartphone className="h-8 w-8 text-blue-200/40" />
        </div>
        <div className="absolute bottom-1/3 right-1/4 animate-float-delayed">
          <Zap className="h-6 w-6 text-purple-200/40" />
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
              <Smartphone className="h-12 w-12" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-black">Mobile App</span>{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Development</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We provide end-to-end mobile app solutions for businesses of all sizes. From concept to launch, we ensure seamless user experiences and high performance.
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

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            id="process-section"
            className={`service-card ${visibleCards.has('process-section') ? 'animate-slide-in-right' : 'opacity-0'} space-y-6`}
          >
            <h2 className="text-4xl font-bold mb-8 text-center">
              <span className="text-black">Our</span>{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Process</span>
            </h2>
            {steps.map((step, i) => (
              <div key={i} className={`p-4 bg-${step.color}-50 rounded-xl`}>
                <h4 className={`text-lg font-semibold text-${step.color}-800 mb-1`}>{i + 1}. {step.title}</h4>
                <p className="text-gray-700">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold">
            <span className="text-black">Benefits of</span>{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Mobile Apps</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                <Check className="h-6 w-6 text-green-500 mr-3" />
                <span className="text-lg text-gray-800">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50/30 to-blue-50/20">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold">
            <span className="text-black">Why Choose</span>{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Us</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {whyChooseUs.map((item, idx) => (
              <div key={idx} className="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                <Users className="h-6 w-6 text-blue-500 mr-3" />
                <span className="text-lg text-gray-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div
            id="cta-section"
            className={`service-card ${visibleCards.has('cta-section') ? 'animate-fade-in-up' : 'opacity-0'}`}
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-black">Got an App Idea?</span>{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Let’s Build It</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Partner with us to bring your app vision to life with innovative technologies and world-class development.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 transform"
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

export default AppDevelopmentPage;
