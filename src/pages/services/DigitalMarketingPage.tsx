import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  ArrowLeft,
  Megaphone,
  CheckCircle,
  Zap,
  Target,
  TrendingUp,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const DigitalMarketingPage: React.FC = () => {
  const navigate = useNavigate();
  const [visibleCards, setVisibleCards] = useState(new Set<string>());

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
    const elements = document.querySelectorAll(".service-card, .hero-element");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const services = [
    "SEO Optimization",
    "Social Media Campaigns",
    "Content Marketing",
    "Email Campaigns",
    "PPC Advertising",
    "Analytics & Reporting",
    "Influencer Collaborations",
    "Conversion Rate Optimization",
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Data-Driven Strategies",
      description: "Campaigns backed by analytics to deliver measurable results.",
    },
    {
      icon: Target,
      title: "Audience Targeting",
      description: "Reach the right customers with precision marketing techniques.",
    },
    {
      icon: TrendingUp,
      title: "Growth Focused",
      description: "Boost engagement, conversions, and long-term brand growth.",
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
        <div className="absolute top-1/4 left-1/3 animate-float">
          <Megaphone className="h-8 w-8 text-violet-300/40" />
        </div>
      </div>

      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto text-center">
          <div
            id="hero-title"
            className={`hero-element ${
              visibleCards.has("hero-title") ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 text-white mb-6">
              <Megaphone className="h-12 w-12" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-black">Digital Marketing</span>{" "}
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Grow your brand online with tailored marketing campaigns,
              advanced analytics, and strategies that deliver measurable results.
            </p>
            <button
              onClick={() => navigate("/services")}
              className="group bg-white text-violet-600 border-2 border-violet-600 px-6 py-3 rounded-full font-semibold hover:bg-violet-600 hover:text-white transition-all duration-300 hover:scale-105 transform flex items-center space-x-2 mx-auto"
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
            className={`service-card ${
              visibleCards.has("services-section")
                ? "animate-slide-in-left"
                : "opacity-0"
            }`}
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-black">Our</span>{" "}
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                Expertise
              </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="flex items-center bg-white/70 border border-violet-200 p-3 rounded-xl backdrop-blur-sm hover:bg-violet-50 transition-all"
                >
                  <CheckCircle className="h-5 w-5 text-violet-600 mr-3" />
                  <span className="text-gray-800">{service}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            id="highlight-section"
            className={`service-card ${
              visibleCards.has("highlight-section")
                ? "animate-slide-in-right"
                : "opacity-0"
            }`}
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-black">Why</span>{" "}
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                Digital Marketing?
              </span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our digital marketing strategies are designed to reach the right
              audience, boost conversions, and grow your online presence
              effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div
            id="benefits-section"
            className={`service-card ${
              visibleCards.has("benefits-section")
                ? "animate-fade-in-up"
                : "opacity-0"
            }`}
          >
            <h2 className="text-4xl font-bold mb-8 text-center">
              <span className="text-black">Why</span>{" "}
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                Choose Us?
              </span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {benefits.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/80 backdrop-blur-sm border border-violet-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-violet-50/40 to-purple-50/30">
        <div className="max-w-4xl mx-auto text-center">
          <div
            id="cta-section"
            className={`service-card ${
              visibleCards.has("cta-section") ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-black">Ready to Boost</span>{" "}
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                Your Brand?
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get in touch with our experts today and create campaigns that drive
              results.
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-violet-500/30 transition-all duration-300 hover:scale-105 transform"
            >
              Get Started
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DigitalMarketingPage;
