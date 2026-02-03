// import React from 'react';
// import { Mail, Phone, MapPin, Facebook, X, Linkedin, Instagram } from 'lucide-react';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid md:grid-cols-4 gap-6">
//           {/* Company Info */}
//           <div className="col-span-1 md:col-span-2">
//             <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 text-white">
//               Zaltix Soft Solutions
//             </h3>
//             <p className="text-gray-300 mb-4 leading-relaxed text-sm sm:text-base">
//               At Zaltix Soft Solutions, we craft innovative digital experiences that help businesses grow and thrive online. From designing responsive websites and building scalable web applications to delivering data-driven digital marketing strategies and intelligent AI & machine learning solutions, we combine technology and creativity to transform your ideas into measurable results.
//             </p>
//             <div className="space-y-2">
//               <div className="flex items-center">
//                 <Mail className="h-4 w-4 text-light-violet mr-2" />
//                 <span className="text-gray-300 text-sm">info@zaltixsoftsolutions.com</span>
//               </div>
//               <div className="flex items-center">
//                 <Phone className="h-4 w-4 text-light-pink mr-2" />
//                 <span className="text-gray-300 text-sm">+91 99666 53131</span>
//               </div>
//               <div className="flex items-center">
//                 <MapPin className="h-4 w-4 text-bold-yellow mr-2" />
//                 <span className="text-gray-300 text-sm">
//                   Plot no: 69,Green Hills Colony,Road number 3, Kothapet, Hyderabad<br />
//                   Telangana, India. 500035
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Services */}
//           <div>
//             <h4 className="text-lg font-semibold mb-4 text-light-violet">Services</h4>
//             <ul className="space-y-2">
//               <li><a href="/services/ai-ml-solutions" className="text-gray-300 hover:text-light-pink transition-colors text-sm">AI &amp; Machine Learning Solutions</a></li>
//               <li><a href="/services/cloud-services" className="text-gray-300 hover:text-light-pink transition-colors text-sm">Cloud Services</a></li>
//               <li><a href="/services/web-application" className="text-gray-300 hover:text-light-pink transition-colors text-sm">Web Application Development</a></li>
//               <li><a href="/services/app-development" className="text-gray-300 hover:text-light-pink transition-colors text-sm">Mobile App Development</a></li>
//               <li><a href="/services/web-development" className="text-gray-300 hover:text-light-pink transition-colors text-sm">Website Design &amp; Development</a></li>
//               <li><a href="/services/digital-marketing" className="text-gray-300 hover:text-light-pink transition-colors text-sm">Digital Marketing</a></li>
//               <li><a href="/services/custom-software" className="text-gray-300 hover:text-light-pink transition-colors text-sm">Custom Software Development</a></li>
//             </ul>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-lg font-semibold mb-4 text-light-pink">Quick Links</h4>
//             <ul className="space-y-2">
//               <li><a href="/" className="text-gray-300 hover:text-light-violet transition-colors text-sm">Home</a></li>
//               <li><a href="/about" className="text-gray-300 hover:text-light-violet transition-colors text-sm">About Us</a></li>
//               <li><a href="/services" className="text-gray-300 hover:text-light-violet transition-colors text-sm">Services</a></li>
//               <li><a href="/contact" className="text-gray-300 hover:text-light-violet transition-colors text-sm">Contact</a></li>
//               <li><a href="/careers" className="text-gray-300 hover:text-light-violet transition-colors text-sm">Careers</a></li>
//               {/* Added Privacy Policy and Terms & Conditions */}
//               <li><a href="/privacy-policy" className="text-gray-300 hover:text-light-violet transition-colors text-sm">Privacy Policy</a></li>
//               <li><a href="/terms-and-conditions" className="text-gray-300 hover:text-light-violet transition-colors text-sm">Terms &amp; Conditions</a></li>
//             </ul>
//           </div>
//         </div>

//         {/* Social Media & Copyright */}
//         <div className="border-t border-gray-700 mt-8 pt-6">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <div className="flex space-x-4 mb-3 md:mb-0">
//               <a href="https://www.facebook.com/people/Zaltix-Soft-Solutions-Private-Limited/61574726078708/" className="p-2 rounded-full hover:scale-110 transition-all duration-300 bg-gray-800">
//                 <Facebook className="h-4 w-4 text-light-violet" />
//               </a>
//               <a href="https://x.com/zaltixss" className="p-2 rounded-full hover:scale-110 transition-all duration-300 bg-gray-800">
//                 <X className="h-4 w-4 text-light-pink" />
//               </a>
//               <a href="https://www.linkedin.com/company/zaltix-soft-solutions-private-limited/" className="p-2 rounded-full hover:scale-110 transition-all duration-300 bg-gray-800">
//                 <Linkedin className="h-4 w-4 text-bold-yellow" />
//               </a>
//               <a href="https://www.instagram.com/zaltixsoftsolutions/" className="p-2 rounded-full hover:scale-110 transition-all duration-300 bg-gray-800">
//                 <Instagram className="h-4 w-4 text-light-violet" />
//               </a>
//             </div>
//             <div className="text-gray-400 text-center md:text-right text-sm">
//               <p>&copy; {currentYear} ZALTIX SOFT SOLUTIONS PRIVATE LIMITED. All rights reserved.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  X,
  Linkedin,
  Instagram,
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-6">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 text-white">
              Zaltix Soft Solutions
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed text-sm sm:text-base">
              Zaltix builds intelligent operational systems for growing
              businesses. We help companies remove operational chaos, gain real
              visibility, and make better decisions using automation, analytics,
              and decision intelligence.
            </p>

            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-light-violet mr-2" />
                <span className="text-gray-300 text-sm">
                  info@zaltixsoftsolutions.com
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-light-pink mr-2" />
                <span className="text-gray-300 text-sm">
                  +91 99666 53131
                </span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 text-bold-yellow mr-2" />
                <span className="text-gray-300 text-sm">
                  Plot no: 69, Green Hills Colony, Road No 3, Kothapet,
                  Hyderabad, Telangana – 500035
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-light-violet">
              Services
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/services/web-mobile-systems"
                  className="text-gray-300 hover:text-light-pink transition-colors text-sm"
                >
                  Web & Mobile Application Systems
                </a>
              </li>
              <li>
                <a
                  href="/services/automation-systems"
                  className="text-gray-300 hover:text-light-pink transition-colors text-sm"
                >
                  Automation Systems
                </a>
              </li>
              <li>
                <a
                  href="/services/analytics-visibility"
                  className="text-gray-300 hover:text-light-pink transition-colors text-sm"
                >
                  Analytics & Visibility
                </a>
              </li>
              <li>
                <a
                  href="/services/decision-intelligence"
                  className="text-gray-300 hover:text-light-pink transition-colors text-sm"
                >
                  Decision Intelligence
                </a>
              </li>
              <li>
                <a
                  href="/services/ai-assistants"
                  className="text-gray-300 hover:text-light-pink transition-colors text-sm"
                >
                  AI-Enabled Assistants
                </a>
              </li>
              <li>
                <a
                  href="/services/cloud-foundations"
                  className="text-gray-300 hover:text-light-pink transition-colors text-sm"
                >
                  Scalable Cloud Foundations
                </a>
              </li>
              <li>
                <a
                  href="/services/digital-marketing"
                  className="text-gray-300 hover:text-light-pink transition-colors text-sm"
                >
                  Digital Marketing
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-light-pink">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-300 hover:text-light-violet transition-colors text-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-300 hover:text-light-violet transition-colors text-sm"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-gray-300 hover:text-light-violet transition-colors text-sm"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-300 hover:text-light-violet transition-colors text-sm"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/careers"
                  className="text-gray-300 hover:text-light-violet transition-colors text-sm"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="text-gray-300 hover:text-light-violet transition-colors text-sm"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms-and-conditions"
                  className="text-gray-300 hover:text-light-violet transition-colors text-sm"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-3 md:mb-0">
              <a
                href="https://www.facebook.com/people/Zaltix-Soft-Solutions-Private-Limited/61574726078708/"
                className="p-2 rounded-full bg-gray-800 hover:scale-110 transition"
              >
                <Facebook className="h-4 w-4 text-light-violet" />
              </a>
              <a
                href="https://x.com/zaltixss"
                className="p-2 rounded-full bg-gray-800 hover:scale-110 transition"
              >
                <X className="h-4 w-4 text-light-pink" />
              </a>
              <a
                href="https://www.linkedin.com/company/zaltix-soft-solutions-private-limited/"
                className="p-2 rounded-full bg-gray-800 hover:scale-110 transition"
              >
                <Linkedin className="h-4 w-4 text-bold-yellow" />
              </a>
              <a
                href="https://www.instagram.com/zaltixsoftsolutions/"
                className="p-2 rounded-full bg-gray-800 hover:scale-110 transition"
              >
                <Instagram className="h-4 w-4 text-light-violet" />
              </a>
            </div>

            <div className="text-gray-400 text-sm text-center md:text-right">
              © {currentYear} ZALTIX SOFT SOLUTIONS PRIVATE LIMITED. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
