import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Users, Target, Eye, Briefcase, Linkedin } from 'lucide-react';

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'Sai Kumar Dara',
      role: 'CEO & Founder',
      image: '/placeholder.svg',
      linkedin: 'https://www.linkedin.com/in/sai-kumar-dara-775206359/'
    },
    {
      name: 'Mallesh Yara',
      role: 'Manager',
      image: '/placeholder.svg',
      linkedin: 'https://www.linkedin.com/in/mallesh-yara-b07682158/'
    },
    {
      name: 'Anjali Garlapati',
      role: 'Developer',
      image: '/placeholder.svg',
      linkedin: 'https://www.linkedin.com/in/anjali-reddy-1b460524b/'
    },
    {
      name: 'Sumathi Kandula',
      role: 'Digital Marketer',
      image: '/placeholder.svg',
      linkedin: 'https://www.linkedin.com/in/kandula-sumathi-6936872a3/'
    },
    {
      name: 'Swapna Mudem',
      role: 'Digital Marketer',
      image: '/placeholder.svg',
      linkedin: 'https://www.linkedin.com/in/mudem-swapna-a059b1346'
    },
    {
      name: 'Rangannagari Guru Ashok',
      role: 'Developer',
      image: '/placeholder.svg',
      linkedin: 'https://www.linkedin.com/in/rangannagari-guru-ashok-9254291b1/'
    },
    
    {
      name: 'Srihari Kollapudi',
      role: 'Graphic Designer',
      image: '/placeholder.svg',
      linkedin: 'https://www.linkedin.com/in/kollapudi-srihari-883888243'
    },
    {
      name: 'Vikas Raswate',
      role: 'Devops Engineer',
      image: '/placeholder.svg',
      linkedin: 'https://www.linkedin.com/in/vikas-raswate-b255352a6/'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-2xl animate-pulse animation-delay-300"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-2xl animate-pulse animation-delay-600"></div>
      </div>

      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative z-10 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
            <span className="text-zinc-950">About</span>{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Us
            </span>
          </h1>
          <p className="text-2xl font-medium text-purple-600 mb-4 animate-slide-in-right">
            We Transform the Future into Digital Experiences
          </p>
          <p className="text-xl max-w-3xl mx-auto animate-slide-in-right text-zinc-500">
            At <strong>Zaltix Soft Solutions</strong>, we don’t just build software — we craft the future of digital innovation. 
            Our mission is to transform ideas into impactful digital experiences that elevate businesses in today’s connected world.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="pb-8 px-4 sm:px-6 lg:px-8 relative z-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 animate-fade-in">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-3 mr-3">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">
                  <span className="text-violet-900">Who We</span>{' '}
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    Are
                  </span>
                </h2>
              </div>
              <p className="text-lg leading-relaxed text-zinc-700">
                We are a passionate team of developers, designers, and digital thinkers driven by one goal — to redefine how technology empowers business growth. 
                At Zaltix, innovation meets execution. We blend creativity with cutting-edge technologies to deliver meaningful, result-oriented digital solutions.
              </p>
              <p className="text-lg leading-relaxed text-zinc-600">
                Whether it’s a modern website, mobile app, or complete digital ecosystem, we create experiences that are fast, scalable, and designed for the future.
              </p>
            </div>
            <div className="glass-card p-6 animate-float backdrop-blur-lg bg-white/10 border border-white/20">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-1">
                    15+
                  </div>
                  <div className="text-gray-700 text-sm">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-1">
                    10+
                  </div>
                  <div className="text-gray-700 text-sm">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 relative z-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center mb-8 animate-fade-in">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-3 mr-3">
              <Briefcase className="h-5 w-5 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-purple-900">What We</span>{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Do
              </span>
            </h2>
          </div>
          <div className="text-center max-w-4xl mx-auto animate-slide-in-right">
            <p className="text-lg leading-relaxed mb-6 text-zinc-700">
              We build next-generation digital products — from stunning websites and mobile apps to AI-powered business platforms. 
              Our services are designed to help startups and enterprises adapt, grow, and lead in the digital era.
            </p>
            <p className="text-lg leading-relaxed text-zinc-700">
              We specialize in:
              <br />• Custom Web & Mobile App Development  
              • Cloud & DevOps Solutions  
              • Digital Marketing & Branding  
              • Business Analytics & Automation  
              • UI/UX Design with a focus on user engagement
            </p>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 relative z-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center mb-8 animate-fade-in">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-3 mr-3">
              <Eye className="h-5 w-5 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-purple-900">Our</span>{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Vision
              </span>
            </h2>
          </div>
          <div className="text-center max-w-4xl mx-auto animate-slide-in-right">
            <p className="text-lg leading-relaxed mb-6 text-zinc-700">
              Our vision is to shape a smarter digital world where technology transforms businesses and connects people in new ways. 
              We believe innovation should be accessible to every organization — big or small.
            </p>
            <p className="text-lg leading-relaxed text-zinc-700">
              Through creativity, collaboration, and technology, we strive to turn every idea into a product that makes a real impact in the digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-8 pb-12 px-4 sm:px-6 lg:px-8 relative z-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center mb-8 animate-fade-in">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-3 mr-3">
              <Target className="h-5 w-5 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              <span className="text-purple-900">Meet The Minds Behind</span>{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Digital Innovation
              </span>
            </h2>
          </div>
          <p className="text-center text-zinc-700 mt-2 mb-8">
            Our talented team turns bold ideas into digital realities — every design, every line of code, every campaign crafted with passion and precision.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                style={{ animationDelay: `${index * 0.1}s` }}
                className="glass-card p-5 text-center hover:scale-105 transition-all duration-300 animate-fade-in backdrop-blur-lg border border-white/20 bg-white-200"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-lg font-bold text-yellow-300 mb-1">{member.name}</h3>
                <p className="text-sm text-zinc-700 mb-2">{member.role}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 transition"
                >
                  <Linkedin className="h-5 w-5 mr-1" />
                  LinkedIn
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
