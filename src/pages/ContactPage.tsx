import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, ArrowRight, Clock } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/contact-form-2.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(formData)
      });

      const responseText = await res.text();
      alert(responseText);

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        service: '',
        message: ''
      });
    } catch (error) {
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
            <span className="text-purple-800">Get in</span>{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto animate-slide-in-right text-gray-700">
            Ready to transform your business with cutting-edge technology solutions? Let's start the conversation.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6 animate-fade-in">
              <div className="glass-card p-8 backdrop-blur-lg bg-white/90 border border-gray-200 shadow-lg">
                <h2 className="text-3xl font-bold mb-6">
                  <span className="text-purple-800">Contact</span>{' '}
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Information
                  </span>
                </h2>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl p-4 mr-4">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Email</div>
                      <div className="text-lg font-medium text-gray-900">info@zaltixsoftsolutions.com</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl p-4 mr-4">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Phone</div>
                      <div className="text-lg font-medium text-gray-900">+91 99666 53131</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl p-4 mr-4">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Address</div>
                      <div className="text-lg font-medium text-gray-900">
                        Plot no: 69,Green Hills Colony,Road number 3, Kothapet, Hyderabad<br />
                  Telangana, India. 500035
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card p-8 backdrop-blur-lg bg-white/90 border border-gray-200 shadow-lg">
                <h3 className="text-xl font-bold mb-4">
                  <span className="text-purple-800">Business</span>{' '}
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Hours
                  </span>
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-purple-500 mr-3" />
                    <div>
                      <div className="font-medium text-gray-900">Monday - Saturday</div>
                      <div className="text-gray-600 text-sm">9:30 AM - 6:30 PM</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-purple-500 mr-3" />
                    <div>
                      <div className="font-medium text-gray-900">Sunday</div>
                      <div className="text-gray-600 text-sm">Closed</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card p-8 backdrop-blur-lg bg-white/90 border border-gray-200 shadow-lg">
                <h4 className="text-lg font-bold mb-4">
                  <span className="text-purple-800">Why Choose</span>{' '}
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Us?
                  </span>
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Free consultation and project assessment</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Transparent pricing with no hidden costs</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Agile development methodology</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">24/7 support and maintenance</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-in-right">
              <div className="bg-gradient-to-r from-gray-900 to-purple-900 p-8 rounded-2xl shadow-2xl">
                <h2 className="text-3xl font-bold mb-6">
                  <span className="text-white">Send us a</span>{' '}
                  <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    Message
                  </span>
                </h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-200 mb-2">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="John"
                        required
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-200 mb-2">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Doe"
                        required
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">Service</label>
                    <input
                      type="text"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      placeholder="Tell us about your project requirements..."
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400 resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105 transform group"
                  >
                    Send Message
                    <ArrowRight className="ml-2 h-5 w-5 inline-block transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-purple-800">Find</span>{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Us
              </span>
            </h2>
            <p className="text-lg text-gray-700">
              Visit our office or schedule a meeting with our team
            </p>
          </div>

          <div className="glass-card p-8 text-center backdrop-blur-lg bg-white/90 border border-gray-200 shadow-lg animate-slide-in-right">
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-6 mb-6">
              <iframe
  title="Our Location"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.0581975980194!2d78.54462887493403!3d17.360932383521764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9958a4aafc71%3A0xefd86d3e6b99ee94!2sZaltix%20Soft%20Solutions%20Private%20Limited!5e0!3m2!1sen!2sin!4v1757746596036!5m2!1sen!2sin"
  width="100%"
  height="450"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
              <p className="mt-4 text-gray-700">
                <a
                  href="https://maps.app.goo.gl/TJ2XbJhKgu41iUt59"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View on Google Maps
                </a>
              </p>
            </div>

            <p className="mb-6 text-gray-600">
              Our office is located in the heart of Tech City, easily accessible by public transportation and with ample parking available.
            </p>

            <a
              href="https://maps.app.goo.gl/TJ2XbJhKgu41iUt59"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105 transform"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
