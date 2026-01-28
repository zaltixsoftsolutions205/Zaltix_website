import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Briefcase, MapPin, Clock } from 'lucide-react';

const CareersPage = () => {
  const [selectedPosition, setSelectedPosition] = useState('');
  
  const jobVacancies = [
    {
      title: 'Full Stack Developer (MERN)',
      location: 'Kothapet,Hyderabad',
      type: 'Full-time',
      description: 'Build and enhance complex real-world applications using MongoDB, Express, React, and Node.js. Apply advanced concepts in web development, optimize performance, and implement scalable, secure, and maintainable solutions. Strengthen expertise in modern software practices, collaborative workflows, and best-in-class development standards',
      requirements: ['Knowledge of MERN stack', 'Knowledge of web development', 'Eagerness to learn and grow']
    },
    {
      title: 'Sales & Marketing Executive',
      location: 'Kothapet,Hyderabad',
      type: 'Full-time',
      description: 'Drive sales and marketing initiatives, manage client relationships, and contribute to the growth of our business.',
      requirements: ['MBA or relevant degree', 'Excellent communication skills', 'Strong negotiation and interpersonal skills']
    }
  ];

  const handleApply = (title) => {
    setSelectedPosition(title);
    const formSection = document.getElementById('resume-form');
    formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
            <span className="text-purple-800">Join Our</span>{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Team</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto animate-slide-in-right text-gray-700">
            Build your career with us and help shape the future of technology
          </p>
        </div>
      </section>

      {/* Job Vacancies */}
      <section className="pb-8 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-purple-800">Open</span>{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Positions</span>
            </h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-700">
              Explore exciting career opportunities with Zaltix Soft Solutions
            </p>
          </div>

          <div className="grid gap-6">
            {jobVacancies.map((job, index) => (
              <div
                key={index}
                className="group glass-card p-6 hover:scale-[1.02] transition-all duration-500 animate-fade-in backdrop-blur-lg bg-white/90 border border-gray-200 shadow-lg hover:shadow-2xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl p-3 mr-3 group-hover:scale-110 transition-all duration-500">
                        <Briefcase className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{job.title}</h3>
                        <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                          <div className="flex items-center">
                            <MapPin className="h-3 w-3 mr-1" />
                            {job.location}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {job.type}
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-base mb-3 leading-relaxed text-gray-700">
                      {job.description}
                    </p>

                    <div className="space-y-1">
                      <p className="text-gray-900 font-semibold text-sm">Requirements:</p>
                      {job.requirements.map((req, i) => (
                        <div key={i} className="flex items-center">
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full mr-2"></div>
                          <span className="text-sm text-gray-700">{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 lg:mt-0 lg:ml-6">
                    <button
                      onClick={() => handleApply(job.title)}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105 transform"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upload Resume Section */}
      <section id="resume-form" className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-purple-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-white">Submit Your</span>{' '}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Resume</span>
            </h2>
            <p className="text-lg text-gray-300">
              Don't see a perfect match? Send us your resume and we'll consider you for future opportunities
            </p>
          </div>

          <div className="glass-card p-8 backdrop-blur-lg bg-gray-800/90 border border-gray-700 shadow-2xl animate-slide-in-right">
            <form
              className="space-y-6"
              action="/submit-application.php"
              method="POST"
              encType="multipart/form-data"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Position Applied For
                </label>
                <input
                  type="text"
                  name="position"
                  value={selectedPosition}
                  readOnly
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Upload Resume
                </label>
                <input
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  required
                  className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-4 py-3 cursor-pointer file:bg-gradient-to-r file:from-purple-500 file:to-blue-500 file:border-0 file:text-white file:rounded-full"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105 transform"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CareersPage;
