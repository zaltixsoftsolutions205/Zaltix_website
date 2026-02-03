// import React from 'react';
// import Header from '../../components/Header';
// import Footer from '../../components/Footer';

// const WebMobileSystems = () => {
//   return (
//     <div className="min-h-screen bg-white">
//       <Header />

//       <section className="pt-28 pb-20 px-6 max-w-5xl mx-auto">
//         <h1 className="text-4xl md:text-5xl font-bold mb-6">
//           Web & Mobile Application Systems
//         </h1>

//         <p className="text-xl text-gray-600 mb-10">
//           We build operational systems — not isolated apps. Our web and mobile
//           platforms are designed around how your business actually runs.
//         </p>

//         <div className="space-y-8 text-gray-700 leading-relaxed">
//           <p>
//             Most applications fail because they are built as standalone tools.
//             We design systems that become the backbone of operations — ready for
//             automation, analytics, and intelligence.
//           </p>

//           <ul className="list-disc pl-6 space-y-2">
//             <li>Operations & management dashboards</li>
//             <li>Workflow-driven web & mobile applications</li>
//             <li>Customer and partner platforms</li>
//             <li>Scalable backend & API systems</li>
//           </ul>

//           <p>
//             These systems create a single source of operational truth and enable
//             clarity, speed, and scalability.
//           </p>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default WebMobileSystems;
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const WebMobileSystems = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6 max-w-6xl mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 border border-indigo-200 mb-8 max-w-max mx-auto">
            <svg
              className="w-5 h-5 mr-2 text-indigo-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 7h18M3 12h18M3 17h18"
              />
            </svg>
            <span className="text-sm font-medium text-indigo-800">
              Connected Operational Platforms
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 bg-clip-text text-transparent">
              Web & Mobile
            </span>{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent font-bold">
              Application Systems
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10">
            We build operational systems — not isolated apps — designed around
            how your business actually runs.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-24 px-6 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10 text-gray-700 leading-relaxed">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 to-slate-800 bg-clip-text text-transparent mb-6">
                Systems Built for Execution, Not Just Interfaces
              </h2>

              <p className="text-lg mb-8 text-gray-600">
                Many applications fail because they are built as standalone
                tools — disconnected from real workflows, data, and decision
                making.
              </p>

              <p className="text-lg text-gray-600">
                We design web and mobile platforms as connected operational
                systems — forming the backbone for automation, analytics, and
                intelligence across your organization.
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-indigo-700 mb-6">
                  What We Build
                </h3>
                <ul className="space-y-4 text-gray-700">
                  <li>Operations and management dashboards</li>
                  <li>Workflow-driven web and mobile applications</li>
                  <li>Customer and partner-facing platforms</li>
                  <li>Admin, finance, and execution systems</li>
                  <li>Unified operational data layers</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-emerald-700 mb-6">
                  How They’re Designed
                </h3>
                <ul className="space-y-4 text-gray-700">
                  <li>System-first architecture (not page-first)</li>
                  <li>Scalable backend and API-driven design</li>
                  <li>Cloud-ready and integration-friendly</li>
                  <li>Built for automation and intelligence</li>
                  <li>Secure, maintainable foundations</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-50 to-emerald-50 rounded-2xl p-8 border border-indigo-100 text-center">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                One Source of Operational Truth
              </h4>
              <p className="text-lg text-gray-600">
                When systems reflect how work actually happens, teams gain
                clarity, speed, and confidence — without friction.
              </p>
            </div>
          </div>

          {/* Right Impact Card */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 h-fit hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Business Impact
              </h3>

              <div className="space-y-6 mb-10">
                <div className="flex items-center p-4 bg-indigo-50 rounded-xl">
                  <span className="font-semibold text-gray-800">
                    Clear operational visibility
                  </span>
                </div>
                <div className="flex items-center p-4 bg-emerald-50 rounded-xl">
                  <span className="font-semibold text-gray-800">
                    Faster execution across teams
                  </span>
                </div>
                <div className="flex items-center p-4 bg-purple-50 rounded-xl">
                  <span className="font-semibold text-gray-800">
                    Reduced fragmentation between systems
                  </span>
                </div>
                <div className="flex items-center p-4 bg-orange-50 rounded-xl">
                  <span className="font-semibold text-gray-800">
                    Ready for automation and intelligence
                  </span>
                </div>
                <div className="flex items-center p-4 bg-slate-50 rounded-xl">
                  <span className="font-semibold text-gray-800">
                    Scalable foundation for growth
                  </span>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-100">
                <p className="text-sm text-gray-500 leading-relaxed">
                  Built for long-term operations — not short-term feature
                  delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebMobileSystems;
