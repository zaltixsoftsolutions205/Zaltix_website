import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    projectType: '',
    details: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/contact-form.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData),
      });
      const responseText = await res.text();
      alert(responseText);
    } catch (error) {
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <section id="contact" className="section-padding bg-white py-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Build Your <span className="text-violet-700">Future?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Have an idea or challenge? Let's build your solution together. Our team is ready to transform your vision into reality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-2xl bg-gray-50">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-gray-100 p-3 rounded-xl mr-4">
                    <Mail className="h-6 w-6 text-violet-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Email</div>
                    <div className="text-lg font-medium text-gray-900">
                      info@zaltixsoftsolutions.com
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-gray-100 p-3 rounded-xl mr-4">
                    <Phone className="h-6 w-6 text-pink-500" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Phone</div>
                    <div className="text-lg font-medium text-gray-900">+91 99666 53131</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-gray-100 p-3 rounded-xl mr-4 mt-1">
                    <MapPin className="h-6 w-6 text-yellow-500" />
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

            <div className="glass-card p-8 rounded-2xl bg-gray-50">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Us?</h4>
              <ul className="space-y-3 text-gray-700">
                <li>• Free consultation and project assessment</li>
                <li>• Transparent pricing with no hidden costs</li>
                <li>• Agile development methodology</li>
                <li>• 24/7 support and maintenance</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8 rounded-2xl bg-gray-50">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Start Your Project</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-violet-500"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-violet-500"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-violet-500"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-violet-500"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-violet-500"
                >
                  <option value="">Select a service</option>
                  <option>Cloud Services</option>
                  <option>App Development</option>
                  <option>Website Development</option>
                  <option>AI/ML Solutions</option>
                  <option>Cyber Security</option>
                  <option>Digital Marketing</option>
                  <option>Custom Software</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Project Details</label>
                <textarea
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-violet-500 resize-none"
                  placeholder="Tell us about your project requirements..."
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-violet-700 via-pink-600 to-yellow-500 
                           text-white text-lg font-semibold py-4 rounded-xl shadow-lg 
                           transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
