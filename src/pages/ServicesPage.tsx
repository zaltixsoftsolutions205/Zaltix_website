import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Cloud, Smartphone, Globe, Brain, Shield, Settings, ArrowDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ServicesPage = () => {
  const navigate = useNavigate();

  // Updated services list matching the style and order from the above reference
  const services = [
    {
      slug: 'ai-ml-solutions',
      icon: Brain,
      title: 'AI & Machine Learning Solutions',
      description: 'Smart systems that help automate tasks, analyze data, and make better business decisions.',
      features: [
        'Advanced data processing and analysis',
        'Automated decision-making workflows',
        'Customizable intelligent models',
        'Scalable and adaptable system design',
      ],
    },
    {
      slug: 'cloud-services',
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Fast, secure, and scalable cloud solutions to run your apps and store data — anytime, anywhere.',
      features: [
        'Robust infrastructure management',
        'Seamless resource scaling and optimization',
        'High-availability and redundancy',
        'Continuous performance monitoring and security',
      ],
    },
    {
      slug: 'web-application',
      icon: Globe,
      title: 'Web Application Development',
      description: 'Custom web-based software to manage your business, serve your users, or offer online services.',
      features: [
        'Intuitive user interface design',
        'Efficient backend service integration',
        'Responsive and accessible solutions',
        'Secure and maintainable code architecture',
      ],
    },
    {
      slug: 'app-development',
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'User-friendly apps for Android and iOS that connect with your customers on the go.',
      features: [
        'Cross-platform compatible solutions',
        'Optimized for performance and battery efficiency',
        'Seamless user experience and interface',
        'Robust integration with device capabilities',
      ],
    },
    {
      slug: 'web-development',
      icon: Settings,
      title: 'Website Design & Development',
      description: 'Beautiful, responsive websites that showcase your brand and work on all devices.',
      features: [
        'Visually compelling and modern design',
        'Adaptive layouts across devices and screens',
        'Optimized content management workflows',
        'SEO-conscious and performance focused',
      ],
    },
    {
      slug: 'digital-marketing',
      icon: Shield, // Using Shield icon since Megaphone is not imported, but can replace with proper icon if available
      title: 'Digital Marketing',
      description: 'Online marketing strategies to grow your brand, reach more customers, and boost sales.',
      features: [
        'Data-driven campaign planning',
        'Targeted audience engagement',
        'Continuous performance evaluation',
        'Strategic content and media management',
      ],
    },
    {
      slug: 'custom-software',
      icon: Settings,
      title: 'Custom Software Development',
      description: 'Tailored software built specifically for your unique business needs and workflows.',
      features: [
        'Flexible and scalable solution design',
        'Seamless system integration capabilities',
        'Business process automation',
        'Comprehensive support and maintenance',
      ],
    },
  ];

  const scrollToServices = () => {
    const servicesSection = document.getElementById('detailed-services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
            {/* Left Text */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Our Expert
                  </span>
                  <br />
                  <span className="text-gray-900">Services</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  We deliver tailor-made digital solutions for your business growth.
                </p>
              </div>

              {/* Updated services list as per the reference */}
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 animate-slide-in-right"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-2 h-2 bg-light-violet rounded-full"></div>
                    <span className="text-lg font-medium text-gray-700">{service.title}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={scrollToServices}
                className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105 flex items-center space-x-2"
              >
                <span>Explore More</span>
                <ArrowDown className="h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
              </button>
            </div>

            {/* Animated Visual */}
            <div className="relative flex items-center justify-center animate-fade-in">
              <div className="relative w-full max-w-lg h-96">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute w-32 h-32 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-pulse opacity-80"></div>
                  <div className="absolute w-full h-full animate-spin" style={{ animationDuration: '20s' }}>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-bounce"></div>
                    <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse"></div>
                    <div
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-bounce"
                      style={{ animationDelay: '0.5s' }}
                    ></div>
                    <div
                      className="absolute top-1/2 left-0 transform -translate-y-1/2 w-5 h-5 bg-gradient-to-r from-green-400 to-teal-400 rounded-full animate-pulse"
                      style={{ animationDelay: '1s' }}
                    ></div>
                  </div>
                  <div className="absolute top-16 right-16 w-3 h-3 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full animate-float"></div>
                  <div
                    className="absolute bottom-16 left-16 w-4 h-4 bg-gradient-to-r from-pink-400 to-red-400 rounded-full animate-float"
                    style={{ animationDelay: '1.5s' }}
                  ></div>
                  <div
                    className="absolute top-24 left-24 w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-float"
                    style={{ animationDelay: '2s' }}
                  ></div>
                  <div className="absolute inset-0 border-2 border-purple-300 rounded-full animate-ping opacity-20"></div>
                  <div
                    className="absolute inset-4 border-2 border-blue-300 rounded-full animate-ping opacity-30"
                    style={{ animationDelay: '1s' }}
                  ></div>
                  <div
                    className="absolute inset-8 border-2 border-cyan-300 rounded-full animate-ping opacity-40"
                    style={{ animationDelay: '2s' }}
                  ></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services Grid */}
      <section id="detailed-services" className="pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Detailed</span>
              <span className="text-gray-900"> Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to transform your business and drive growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group glass-card p-8 hover:scale-105 transition-all duration-500 backdrop-blur-lg bg-white/90 border border-gray-200 shadow-lg hover:shadow-2xl"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl p-4 mr-4 group-hover:scale-110 transition-all duration-500">
                    {React.createElement(service.icon, { className: 'h-6 w-6 text-white' })}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                </div>

                <p className="text-gray-600 text-base mb-6 leading-relaxed">{service.description}</p>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mr-3"></div>
                      <span className="text-sm font-medium text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => navigate(`/services/${service.slug}`)}
                  className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105 transform"
                >
                  Read More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
