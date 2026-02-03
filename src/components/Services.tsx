// import React, { useState, useEffect } from 'react';
// import { Cloud, Smartphone, Globe, Brain, Layout, Megaphone, Settings, ChevronLeft, ChevronRight } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const services = [
//   {
//     icon: Globe,
//     title: 'Web Application Development',
//     description:
//       'We create powerful and scalable web applications customized for business automation, operations management, and real-time workflows.',
//     features: [
//       'Business dashboards & admin portals',
//       'Full-stack web applications',
//       'Booking & management systems',
//       'Custom CRM & workflow automation tools',
//       'Real-time data visualizations',
//       'Secure APIs & backend systems'
//     ],
//     route: '/services/web-application',
//   },

//   {
//     icon: Smartphone,
//     title: 'Mobile App Development',
//     description:
//       'We build modern Android and iOS mobile apps that provide seamless user experiences and help businesses stay connected with their customers.',
//     features: [
//       'Cross-platform mobile apps',
//       'Customer apps & service apps',
//       'Delivery & tracking apps',
//       'E-commerce mobile apps',
//       'Employee attendance & HR apps',
//       'API-integrated backend apps'
//     ],
//     route: '/services/app-development',
//   },

//   {
//     icon: Settings,
//     title: 'Custom Software Solutions for MSMEs & SMEs',
//     description:
//       'We develop fully customized software tailored for business operations, automation, and workflow optimization for MSMEs & SMEs.',
//     features: [
//       'Inventory management software',
//       'Billing & invoicing systems',
//       'Custom CRM software',
//       'HR, payroll & attendance systems',
//       'Business automation tools',
//       'Custom ERP modules'
//     ],
//     route: '/services/custom-software',
//   },

//   {
//     icon: Layout,
//     title: 'Website Design & Development',
//     description:
//       'We build high-quality, responsive, and fast websites for businesses of all types — from simple landing pages to complete e-commerce stores.',
//     features: [
//       'E-commerce websites with payment gateway',
//       'Landing pages for ads & promotions',
//       'Corporate & company websites',
//       'Portfolio & personal brand websites',
//       'Service/appointment booking websites',
//       'Fully custom websites as per business need'
//     ],
//     route: '/services/web-development',
//   },

//   {
//     icon: Megaphone,
//     title: 'Digital Marketing',
//     description:
//       'We help businesses grow online with targeted digital marketing strategies, branding, and paid ad campaigns.',
//     features: [
//       'Social media management & content creation',
//       'SEO and Google ranking improvement',
//       'Google Ads, Meta Ads & YouTube Ads',
//       'Brand awareness campaigns',
//       'Lead generation landing pages',
//       'Marketing strategy & digital consultancy'
//     ],
//     route: '/services/digital-marketing',
//   },

//   {
//     icon: Brain,
//     title: 'End-to-End Tech Consulting',
//     description:
//       'We guide startups and businesses in planning, designing, and launching complete digital products with the right technology stack.',
//     features: [
//       'Product planning & technical architecture',
//       'Wireframes, UI/UX & prototyping',
//       'Tech stack selection & roadmap',
//       'End-to-end project implementation',
//       'Scaling & optimization strategies',
//       'Consulting for SaaS, apps & websites'
//     ],
//     route: '/services/tech-consulting',
//   },

//   {
//     icon: Cloud,
//     title: 'Cloud Services',
//     description:
//       'We design secure, scalable, and efficient cloud solutions to keep applications running smoothly with zero downtime.',
//     features: [
//       'Cloud deployment & migration',
//       'Server setup & maintenance',
//       'Auto-scaling infrastructure',
//       'Backup & disaster recovery',
//       'Database & API hosting solutions',
//       'Monitoring, analytics & security'
//     ],
//     route: '/services/cloud-services',
//   }
// ];

// const Services = () => {
//   const navigate = useNavigate();
//   const [activeService, setActiveService] = useState(0);
//   const [rotation, setRotation] = useState(0);
//   const [isAutoRotating, setIsAutoRotating] = useState(true);

//   useEffect(() => {
//     if (isAutoRotating) {
//       const interval = setInterval(() => {
//         setActiveService(prev => (prev + 1) % services.length);
//         setRotation(prev => prev + (360 / services.length));
//       }, 4000);
//       return () => clearInterval(interval);
//     }
//   }, [isAutoRotating, services.length]);

//   const rotateToService = (index: number) => {
//     setActiveService(index);
//     setRotation(index * (360 / services.length));
//     setIsAutoRotating(false);
//     setTimeout(() => setIsAutoRotating(true), 10000);
//   };

//   const nextService = () => rotateToService((activeService + 1) % services.length);
//   const prevService = () => rotateToService((activeService - 1 + services.length) % services.length);
//   const handleReadMore = () => navigate(services[activeService].route);

//   return (
//     <section
//       id="services"
//       className="section-padding bg-gradient-to-br from-light-violet/10 via-white to-light-pink/10 overflow-hidden"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-black">
//             Our <span className="text-violet-600">Expertise</span>
//           </h2>
//           <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
//             We deliver complete end-to-end digital solutions to help businesses scale and grow.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Service Details */}
//           <div className="space-y-8">
//             <div className="glass-card p-6 md:p-8">
//               <div className="flex items-center mb-6">
//                 <div className="bg-bold-yellow rounded-full p-3 mr-4 animate-pulse-glow">
//                   {React.createElement(services[activeService].icon, {
//                     className: 'h-5 w-5 text-black',
//                   })}
//                 </div>

//                 <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
//                   {services[activeService].title}
//                 </h3>
//               </div>

//               <p className="text-gray-600 mb-4">{services[activeService].description}</p>

//               <div className="space-y-2 mb-4">
//                 {services[activeService].features.map((feature, index) => (
//                   <div key={index} className="flex items-center">
//                     <div className="w-2 h-2 bg-light-violet rounded-full mr-3"></div>
//                     <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
//                   </div>
//                 ))}
//               </div>

//               <button
//                 onClick={handleReadMore}
//                 className="bg-gradient-to-r from-light-violet to-bold-yellow text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transform transition-all duration-300"
//               >
//                 Read More
//               </button>
//             </div>

//             {/* Navigation Dots */}
//             <div className="flex items-center justify-center gap-4">
//               <button onClick={prevService} className="glass-card p-3 rounded-full hover:scale-110 transition">
//                 <ChevronLeft className="h-5 w-5 text-gray-700" />
//               </button>

//               <div className="flex gap-2">
//                 {services.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => rotateToService(index)}
//                     className={`w-3 h-3 rounded-full transition ${
//                       index === activeService ? 'bg-light-violet scale-110' : 'bg-gray-300 hover:bg-gray-400'
//                     }`}
//                   />
//                 ))}
//               </div>

//               <button onClick={nextService} className="glass-card p-3 rounded-full hover:scale-110 transition">
//                 <ChevronRight className="h-5 w-5 text-gray-700" />
//               </button>
//             </div>
//           </div>

//           {/* Circular Icons Layout */}
//           <div className="flex items-center justify-center overflow-hidden">
//             <div className="relative w-[380px] sm:w-[500px] md:w-[640px] aspect-square">
//               {/* Center Dot */}
//               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
//                 <div className="bg-bold-yellow w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center shadow-lg animate-pulse">
//                   <div className="w-5 h-5 bg-black rounded-full"></div>
//                 </div>
//               </div>

//               {/* Rotating Icons */}
//               <div
//                 className="absolute inset-0 transition-transform duration-1000"
//                 style={{ transform: `rotate(${-rotation}deg)` }}
//               >
//                 {services.map((service, index) => {
//                   const angle = (index * 360) / services.length * (Math.PI / 180);
//                   const radius = 180;
//                   const x = radius * Math.cos(angle - Math.PI / 2);
//                   const y = radius * Math.sin(angle - Math.PI / 2);

//                   return (
//                     <div
//                       key={index}
//                       onClick={() => rotateToService(index)}
//                       className="absolute left-1/2 top-1/2 cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
//                       style={{
//                         transform: `translate(${x}px, ${y}px) translate(-50%, -50%) rotate(${rotation}deg)`
//                       }}
//                     >
//                       <div
//                         className={`p-5 rounded-full transition-all duration-300 shadow-md ${
//                           index === activeService ? 'bg-bold-yellow scale-110' : 'bg-white'
//                         }`}
//                       >
//                         {React.createElement(service.icon, {
//                           className: `h-6 w-6 ${index === activeService ? 'text-black' : 'text-gray-600'}`,
//                         })}
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;
import React, { useState, useEffect } from 'react';
import {
  Cloud,
  Smartphone,
  Globe,
  Brain,
  Layout,
  Megaphone,
  Settings,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

/* ✅ ONLY THIS PART IS CHANGED */
const services = [
  {
    icon: Globe,
    title: 'Web & Mobile Application Systems',
    description:
      'We design and build operational web and mobile systems that reflect how your business actually runs — not isolated apps, but connected execution platforms.',
    features: [
      'Operational dashboards & admin systems',
      'Workflow-driven web & mobile apps',
      'Customer & partner platforms',
      'Systems built for automation & intelligence',
      'Secure APIs & backend services',
      'Cloud-ready scalable architecture'
    ],
    route: '/services/web-mobile-systems',
  },

  {
    icon: Settings,
    title: 'Automation Systems',
    description:
      'We remove manual effort and operational chaos by designing automation systems that standardize execution across sales, operations, finance, and HR.',
    features: [
      'End-to-end workflow automation',
      'RPA & API-based integrations',
      'Sales, finance & HR automation',
      'Reduced dependency on individuals',
      'Consistent execution across teams',
      'Scalable automation foundations'
    ],
    route: '/services/automation-systems',
  },

  {
    icon: Layout,
    title: 'Analytics & Visibility',
    description:
      'We create real-time visibility into business performance so leaders can see what is happening across teams and processes — while it’s happening.',
    features: [
      'Real-time operational dashboards',
      'Cross-function visibility',
      'Unified performance metrics',
      'Process & outcome tracking',
      'Leadership-ready reporting',
      'Actionable insights, not reports'
    ],
    route: '/services/analytics-visibility',
  },

  {
    icon: Brain,
    title: 'Decision Intelligence',
    description:
      'We embed intelligence into operational systems to surface risks, priorities, and early warnings — before issues impact revenue or customers.',
    features: [
      'Early warning & exception detection',
      'Decision prioritization signals',
      'Predictive & rule-based intelligence',
      'Operational risk visibility',
      'Data-driven decision support',
      'Intelligence embedded in workflows'
    ],
    route: '/services/decision-intelligence',
  },

  {
    icon: Smartphone,
    title: 'AI-Enabled Assistants',
    description:
      'We implement intelligent assistants that sit inside your systems, helping teams understand context, make faster decisions, and reduce cognitive load.',
    features: [
      'Context-aware operational assistants',
      'System explanations & guidance',
      'AI-driven recommendations',
      'Simplified interaction with systems',
      'Faster execution of decisions',
      'Business-specific AI integration'
    ],
    route: '/services/ai-assistants',
  },

  {
    icon: Cloud,
    title: 'Scalable Cloud Foundations',
    description:
      'We design secure, scalable cloud foundations that support growth, integrations, and long-term reliability as business complexity increases.',
    features: [
      'Cloud-native architecture design',
      'Secure & scalable infrastructure',
      'High availability & resilience',
      'Seamless system integrations',
      'Future-ready platforms',
      'Built for long-term growth'
    ],
    route: '/services/cloud-foundations',
  },

  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description:
      'We approach digital marketing as a system — aligning growth initiatives with data, operations, and measurable business outcomes.',
    features: [
      'Performance-driven growth strategies',
      'Lead generation aligned with operations',
      'SEO & demand visibility',
      'Analytics-first optimization',
      'Conversion-focused campaigns',
      'Clear ROI & growth insights'
    ],
    route: '/services/digital-marketing',
  }
];

/* ⛔ NOTHING BELOW IS CHANGED */

const Services = () => {
  const navigate = useNavigate();
  const [activeService, setActiveService] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  useEffect(() => {
    if (isAutoRotating) {
      const interval = setInterval(() => {
        setActiveService(prev => (prev + 1) % services.length);
        setRotation(prev => prev + (360 / services.length));
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoRotating, services.length]);

  const rotateToService = (index: number) => {
    setActiveService(index);
    setRotation(index * (360 / services.length));
    setIsAutoRotating(false);
    setTimeout(() => setIsAutoRotating(true), 10000);
  };

  const nextService = () =>
    rotateToService((activeService + 1) % services.length);

  const prevService = () =>
    rotateToService((activeService - 1 + services.length) % services.length);

  const handleReadMore = () =>
    navigate(services[activeService].route);

  return (
    <section
      id="services"
      className="section-padding bg-gradient-to-br from-light-violet/10 via-white to-light-pink/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-black">
            Our <span className="text-violet-600">Expertise</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            We help growing companies remove operational chaos, gain visibility,
            and make better decisions through automation, analytics, and intelligence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Service Details */}
          <div className="space-y-8">
            <div className="glass-card p-6 md:p-8">
              <div className="flex items-center mb-6">
                <div className="bg-bold-yellow rounded-full p-3 mr-4 animate-pulse-glow">
                  {React.createElement(services[activeService].icon, {
                    className: 'h-5 w-5 text-black',
                  })}
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {services[activeService].title}
                </h3>
              </div>

              <p className="text-gray-600 mb-4">
                {services[activeService].description}
              </p>

              <div className="space-y-2 mb-4">
                {services[activeService].features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-light-violet rounded-full mr-3" />
                    <span className="text-gray-700 text-sm sm:text-base">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button
                onClick={handleReadMore}
                className="bg-gradient-to-r from-light-violet to-bold-yellow text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transform transition-all duration-300"
              >
                Read More
              </button>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={prevService}
                className="glass-card p-3 rounded-full hover:scale-110 transition"
              >
                <ChevronLeft className="h-5 w-5 text-gray-700" />
              </button>

              <div className="flex gap-2">
                {services.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => rotateToService(index)}
                    className={`w-3 h-3 rounded-full transition ${
                      index === activeService
                        ? 'bg-light-violet scale-110'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextService}
                className="glass-card p-3 rounded-full hover:scale-110 transition"
              >
                <ChevronRight className="h-5 w-5 text-gray-700" />
              </button>
            </div>
          </div>

          {/* Circular Icons Layout */}
          <div className="flex items-center justify-center overflow-hidden">
            <div className="relative w-64 sm:w-80 md:w-[500px] lg:w-[640px] aspect-square">
              {/* Center Circle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="bg-bold-yellow w-16 sm:w-20 md:w-24 lg:w-32 h-16 sm:h-20 md:h-24 lg:h-32 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <div className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 bg-black rounded-full" />
                </div>
              </div>

              {/* Rotating Icons */}
              <div
                className="absolute inset-0 transition-transform duration-1000"
                style={{ transform: `rotate(${-rotation}deg)` }}
              >
                {services.map((service, index) => {
                  const angle =
                    (index * 360) / services.length * (Math.PI / 180);
                  // Responsive radius: smaller on mobile, larger on desktop
                  const radius = window.innerWidth < 640 ? 80 : window.innerWidth < 768 ? 120 : 180;
                  const x = radius * Math.cos(angle - Math.PI / 2);
                  const y = radius * Math.sin(angle - Math.PI / 2);

                  return (
                    <div
                      key={index}
                      onClick={() => rotateToService(index)}
                      className="absolute left-1/2 top-1/2 cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
                      style={{
                        transform: `translate(${x}px, ${y}px) translate(-50%, -50%) rotate(${rotation}deg)`
                      }}
                    >
                      <div
                        className={`p-3 sm:p-4 md:p-5 rounded-full transition-all duration-300 shadow-md ${
                          index === activeService
                            ? 'bg-bold-yellow scale-110'
                            : 'bg-white'
                        }`}
                      >
                        {React.createElement(service.icon, {
                          className: `h-4 sm:h-5 md:h-6 w-4 sm:w-5 md:w-6 ${
                            index === activeService
                              ? 'text-black'
                              : 'text-gray-600'
                          }`,
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
