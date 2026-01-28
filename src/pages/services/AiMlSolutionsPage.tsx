import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Brain, CheckCircle, ArrowLeft, Zap, Target, Users, Globe, Lightbulb, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AiMlSolutionsPage = () => {
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

  // Generalized business impacts instead of specific tech
  const impacts = [
    'Innovative AI-driven business solutions',
    'Enhanced decision-making through intelligent analysis',
    'Seamless automation of routine processes',
    'Personalized customer experiences powered by data insights',
    'Robust predictive capabilities for future-proofing',
    'Scalable AI integration for evolving needs',
    'Transformative impact across industries',
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Efficiency Boost',
      description: 'Automate repetitive tasks to save time and resources',
    },
    {
      icon: Target,
      title: 'Data-Driven Insights',
      description: 'Unlock actionable intelligence from your data',
    },
    {
      icon: Users,
      title: 'Tailored Experiences',
      description: 'Enhance engagement with personalized interactions',
    },
  ];

  const industryApplications = [
    {
      icon: Globe,
      title: 'Finance',
      description: 'Risk assessment, fraud detection, and algorithmic trading',
    },
    {
      icon: Lightbulb,
      title: 'Healthcare',
      description: 'Predictive diagnostics, patient care optimization',
    },
    {
      icon: ShieldCheck,
      title: 'Security',
      description: 'Threat detection, anomaly identification, cybersecurity',
    },
  ];

  return (
    <div className="min-h-screen bg-white page-background">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-violet-200/20 rounded-full animate-float-slow"></div>
        <div className="absolute top-40 right-16 w-24 h-24 bg-purple-200/25 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-40 left-16 w-28 h-28 bg-pink-200/20 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-32 w-20 h-20 bg-violet-300/30 rounded-full animate-float-slow"></div>
        {/* Floating Icons */}
        <div className="absolute top-1/4 left-1/4 animate-float">
          <Brain className="h-8 w-8 text-violet-200/40" />
        </div>
        <div className="absolute bottom-1/3 right-1/4 animate-float-delayed">
          <Zap className="h-6 w-6 text-purple-200/40" />
        </div>
      </div>

      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div
              id="hero-title"
              className={`hero-element ${visibleCards.has('hero-title') ? 'animate-fade-in-up' : 'opacity-0'}`}
            >
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 text-white mb-6">
                <Brain className="h-12 w-12" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-black">Transformative</span>{' '}
                <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                  AI & ML Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Empower your business with intelligent systems that adapt, learn, and drive innovation for lasting growth.
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

          {/* Hero Image */}
          <div
            id="hero-image"
            className={`hero-element ${visibleCards.has('hero-image') ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.3s' }}
          >
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1920&h=600"
                alt="AI & Machine Learning"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600/70 to-purple-600/70 flex items-center justify-center">
                <div className="text-center text-white">
                  <h2 className="text-3xl font-bold mb-4">Innovate Today for Tomorrow</h2>
                  <p className="text-xl">Harness AI-driven insights to gain a competitive advantage in your industry.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impacts Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-violet-50/40 to-purple-50/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-black">Business</span>{' '}
            <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">Impacts</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {impacts.map((impact, idx) => (
              <div
                key={idx}
                className="service-card bg-white/70 backdrop-blur-sm border border-violet-200 rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <CheckCircle className="h-10 w-10 text-violet-600 mb-4" />
                <p className="text-lg font-semibold text-gray-800">{impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-black">Industry</span>{' '}
            <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">Applications</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {industryApplications.map(({ icon: Icon, title, description }, idx) => (
              <div
                key={idx}
                className="service-card bg-white/80 backdrop-blur-sm border border-violet-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="p-4 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 text-white inline-flex mb-6">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-700">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-violet-50/40 to-purple-50/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">
            <span className="text-black">Why Choose</span>{' '}
            <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">Us</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {benefits.map(({ icon: Icon, title, description }, idx) => (
              <div
                key={idx}
                className="bg-white/90 backdrop-blur-sm rounded-2xl border border-violet-100 p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 text-white inline-flex">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{title}</h3>
                </div>
                <p className="text-gray-700">{description}</p>
              </div>
            ))}
          </div>
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
              <span className="text-black">Ready to Accelerate Growth with</span>{' '}
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">AI?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Partner with us to unlock the full potential of artificial intelligence and machine learning. Together,
              we'll craft innovative solutions tailored to your unique business challenges.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-violet-500/30 transition-all duration-300 hover:scale-105 transform"
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

export default AiMlSolutionsPage;
