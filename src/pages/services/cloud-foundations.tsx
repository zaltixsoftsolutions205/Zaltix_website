// import React from 'react';
// import Header from '../../components/Header';
// import Footer from '../../components/Footer';

// const CloudFoundations = () => {
//   return (
//     <div className="min-h-screen bg-white">
//       <Header />

//       <section className="pt-28 pb-20 px-6 max-w-5xl mx-auto">
//         <h1 className="text-4xl md:text-5xl font-bold mb-6">
//           Scalable Cloud Foundations
//         </h1>

//         <p className="text-xl text-gray-600 mb-10">
//           Build once. Scale safely. Adapt continuously.
//         </p>

//         <div className="space-y-8 text-gray-700 leading-relaxed">
//           <p>
//             Growth increases complexity. We design cloud foundations that keep
//             systems reliable, secure, and adaptable over time.
//           </p>

//           <ul className="list-disc pl-6 space-y-2">
//             <li>Cloud-native architecture</li>
//             <li>High availability & resilience</li>
//             <li>Secure infrastructure design</li>
//             <li>Integration-ready platforms</li>
//           </ul>

//           <p>
//             Strong foundations protect long-term business velocity.
//           </p>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default CloudFoundations;
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const CloudFoundations = () => {
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
                d="M3 15a4 4 0 004 4h10a4 4 0 000-8 5 5 0 10-9.9-1"
              />
            </svg>
            <span className="text-sm font-medium text-indigo-800">
              Secure & Scalable Infrastructure
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 bg-clip-text text-transparent">
              Scalable Cloud
            </span>{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent font-bold">
              Foundations
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10">
            Build once. Scale safely. Adapt continuously as your business grows
            and complexity increases.
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
                Foundations That Don’t Break Under Growth
              </h2>

              <p className="text-lg mb-8 text-gray-600">
                As businesses scale, infrastructure decisions made early often
                become bottlenecks later. Systems slow down, integrations
                become fragile, and security risks increase.
              </p>

              <p className="text-lg text-gray-600">
                We design cloud foundations that support long-term growth —
                ensuring your systems remain reliable, secure, and adaptable
                as volume, users, and complexity increase.
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-indigo-700 mb-6">
                  What We Build
                </h3>
                <ul className="space-y-4 text-gray-700">
                  <li>Cloud-native system architecture</li>
                  <li>High-availability and fault-tolerant setups</li>
                  <li>Secure networking and access controls</li>
                  <li>Scalable databases and API layers</li>
                  <li>Integration-ready infrastructure</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-emerald-700 mb-6">
                  How It’s Designed
                </h3>
                <ul className="space-y-4 text-gray-700">
                  <li>Security-first architecture principles</li>
                  <li>Auto-scaling and load-balanced systems</li>
                  <li>Clear separation of services and concerns</li>
                  <li>Observability and monitoring built in</li>
                  <li>Cost-aware and performance-optimized setups</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-50 to-emerald-50 rounded-2xl p-8 border border-indigo-100 text-center">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Built for What Comes Next
              </h4>
              <p className="text-lg text-gray-600">
                Strong cloud foundations enable faster innovation, easier
                integration, and confident scaling — without constant
                rework.
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
                    Reliable systems as usage grows
                  </span>
                </div>
                <div className="flex items-center p-4 bg-emerald-50 rounded-xl">
                  <span className="font-semibold text-gray-800">
                    Reduced downtime and incidents
                  </span>
                </div>
                <div className="flex items-center p-4 bg-purple-50 rounded-xl">
                  <span className="font-semibold text-gray-800">
                    Faster integration of new systems
                  </span>
                </div>
                <div className="flex items-center p-4 bg-orange-50 rounded-xl">
                  <span className="font-semibold text-gray-800">
                    Strong security and compliance posture
                  </span>
                </div>
                <div className="flex items-center p-4 bg-slate-50 rounded-xl">
                  <span className="font-semibold text-gray-800">
                    Long-term cost and performance efficiency
                  </span>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-100">
                <p className="text-sm text-gray-500 leading-relaxed">
                  Designed for real production environments — not short-term
                  infrastructure fixes.
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

export default CloudFoundations;
