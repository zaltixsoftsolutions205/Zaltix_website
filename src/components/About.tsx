import React from "react";
import { Calendar, Users, Award, Target } from "lucide-react";

const About = () => {
  const milestones = [
    {
      year: "2025",
      title: "The Beginning",
      description:
        "We started Zaltix Soft Solutions with one clear mission — to help businesses go digital with creativity, clarity, and confidence.",
      icon: Target,
    },
    {
      year: "2025",
      title: "First Big Step",
      description:
        "We partnered with Kalinga University for our first enterprise project — a proud moment that strengthened our purpose and belief in quality work.",
      icon: Users,
    },
    {
      year: "2025",
      title: "Fyndom App Launch",
      description:
        "We built and launched ‘Fyndom’, a smart hostel-finding app that makes searching and managing stays easier for students and travelers.",
      icon: Award,
    },
    {
      year: "2025",
      title: "Expanding Horizons",
      description:
        "From startups to established brands, we now serve clients across industries with over 15+ successful projects and growing global trust.",
      icon: Calendar,
    },
  ];

  return (
    <section
      id="about"
      className="section-padding bg-white py-20 px-4 sm:px-6 lg:px-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-violet-900">About</span>{" "}
            <span className="text-violet-600">Zaltix</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At <span className="font-semibold text-violet-700">Zaltix Soft Solutions</span>, 
            we do things differently. We don’t just build software — we craft experiences that connect ideas, design, and technology into seamless digital journeys.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <div className="glass-card p-8 rounded-2xl shadow-lg bg-white/30 backdrop-blur-md border border-gray-200 hover:shadow-xl transition-all duration-300">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                <span className="text-purple-800">Who We</span>{" "}
                <span className="text-purple-800">Are</span>
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                We are a passionate team of developers, designers, and thinkers who believe in turning ideas into impactful digital realities. 
                Every project we take is more than just code — it’s about creating real value for people and businesses.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                We specialize in developing websites, mobile apps, digital platforms, and custom business tools — everything your brand needs to stand out in the digital world.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our approach is simple: we listen, we design, we develop, and we deliver with precision and passion. 
                We do things that make your digital presence meaningful, modern, and memorable.
              </p>
            </div>
          </div>

          {/* Stats Card */}
          <div className="relative">
            <div className="glass-card p-8 rounded-2xl shadow-lg bg-gradient-to-br from-purple-100 via-pink-50 to-white animate-float">
              <div className="grid grid-cols-2 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-purple-800 mb-2">
                    15+
                  </div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-pink-600 mb-2">
                    10+
                  </div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What We Do */}
        <div className="mb-20 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            <span className="text-purple-800">What</span> We Do
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We do things that help businesses grow smarter and faster —
            from developing responsive websites and interactive mobile apps
            to delivering full-stack solutions that scale with your goals.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            <div className="p-6 bg-white rounded-xl shadow-md border hover:shadow-lg transition">
              <Target className="w-10 h-10 mx-auto text-purple-700 mb-4" />
              <h4 className="font-semibold text-gray-800 mb-2">Web Development</h4>
              <p className="text-gray-600 text-sm">
                We build clean, responsive, and high-performing websites that turn visitors into customers.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md border hover:shadow-lg transition">
              <Award className="w-10 h-10 mx-auto text-purple-700 mb-4" />
              <h4 className="font-semibold text-gray-800 mb-2">App Development</h4>
              <p className="text-gray-600 text-sm">
                From concept to launch, we create mobile apps that are fast, modern, and user-friendly.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md border hover:shadow-lg transition">
              <Users className="w-10 h-10 mx-auto text-purple-700 mb-4" />
              <h4 className="font-semibold text-gray-800 mb-2">Digital Marketing</h4>
              <p className="text-gray-600 text-sm">
                We help brands grow online with SEO, social media, and content strategies that deliver results.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md border hover:shadow-lg transition">
              <Calendar className="w-10 h-10 mx-auto text-purple-700 mb-4" />
              <h4 className="font-semibold text-gray-800 mb-2">UI/UX Design</h4>
              <p className="text-gray-600 text-sm">
                We design intuitive user interfaces and experiences that look great and feel natural.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            <span className="text-black">Our </span>
            <span className="text-black">Milestones</span>
          </h3>

          {/* Timeline Line */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 
                          bg-gradient-to-b from-purple-500 via-pink-500 to-yellow-500 
                          rounded-full hidden md:block"
          ></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col md:space-x-8`}
              >
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  } text-center md:mb-0 mb-4`}
                >
                  <div className="glass-card p-6 rounded-2xl shadow-lg bg-white/70 backdrop-blur-md border border-gray-200 hover:shadow-xl transition-all duration-300 animate-fade-in">
                    <div className="text-2xl font-bold mb-2 text-purple-700">
                      {milestone.year}
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      {milestone.title}
                    </h4>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>

                <div className="relative z-10 mb-6 md:mb-0">
                  <div className="bg-white border-4 border-purple-700 p-4 rounded-full animate-pulse-glow shadow-lg">
                    {React.createElement(milestone.icon, {
                      className: "h-8 w-8 text-purple-700",
                    })}
                  </div>
                </div>

                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        @keyframes pulse-glow {
          0% {
            box-shadow: 0 0 0px rgba(147, 51, 234, 0.4);
          }
          50% {
            box-shadow: 0 0 25px rgba(147, 51, 234, 0.6);
          }
          100% {
            box-shadow: 0 0 0px rgba(147, 51, 234, 0.4);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s infinite;
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-in-out both;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default About;
