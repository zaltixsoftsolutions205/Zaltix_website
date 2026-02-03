// import React from 'react';
// import Header from '../../components/Header';
// import Footer from '../../components/Footer';

// const AnalyticsVisibility = () => {
//   return (
//     <div className="min-h-screen bg-white">
//       <Header />

//       <section className="pt-28 pb-20 px-6 max-w-5xl mx-auto">
//         <h1 className="text-4xl md:text-5xl font-bold mb-6">
//           Analytics & Visibility
//         </h1>

//         <p className="text-xl text-gray-600 mb-10">
//           See what’s happening — while it’s happening.
//         </p>

//         <div className="space-y-8 text-gray-700 leading-relaxed">
//           <p>
//             Most businesses rely on delayed reports. We build real-time
//             visibility into processes, performance, and outcomes.
//           </p>

//           <ul className="list-disc pl-6 space-y-2">
//             <li>Real-time dashboards</li>
//             <li>Cross-function performance views</li>
//             <li>Unified operational metrics</li>
//             <li>Live process tracking</li>
//           </ul>

//           <p>
//             Visibility enables faster decisions and earlier intervention.
//           </p>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default AnalyticsVisibility;
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const AnalyticsVisibility = () => {
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
                d="M11 3v18m0 0l-4-4m4 4l4-4"
              />
            </svg>
            <span className="text-sm font-medium text-indigo-800">
              Real-Time Operational Visibility
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 bg-clip-text text-transparent">
              Analytics &
            </span>{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent font-bold">
              Visibility
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10">
            See what’s happening across your business — while it’s happening —
            not weeks later in reports.
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
                From Delayed Reports to Live Insight
              </h2>
              <p className="text-lg mb-8 text-gray-600">
                Most businesses operate with limited visibility — relying on
                weekly or monthly reports that show what happened in the past.
                By the time problems appear, they’ve already impacted revenue,
                customers, or team performance.
              </p>

              <p className="text-lg text-gray-600">
                We build analytics and visibility layers directly into your
                operational systems, giving leaders and teams real-time insight
                into processes, execution, and outcomes as they unfold.
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-indigo-700 mb-6">
                  What You Can See
                </h3>
                <ul className="space-y-4 text-gray-700">
                  <li>Real-time dashboards connected to live operational data</li>
                  <li>Cross-function performance visibility</li>
                  <li>Unified metrics across systems and teams</li>
                  <li>Live tracking of workflows and SLAs</li>
                  <li>Execution status across key processes</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-emerald-700 mb-6">
                  Where It Matters Most
                </h3>
                <ul className="space-y-4 text-gray-700">
                  <li>Sales pipeline health and conversion flow</li>
                  <li>Operational delivery and bottlenecks</li>
                  <li>Financial performance and cash flow</li>
                  <li>Team productivity and workload balance</li>
                  <li>Customer experience and service execution</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-50 to-emerald-50 rounded-2xl p-8 border border-indigo-100 text-center">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Clarity Drives Action
              </h4>
              <p className="text-lg text-gray-600">
                Visibility isn’t about more dashboards — it’s about knowing
                where to act, when to intervene, and how to keep execution on
                track.
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
                    Faster, more confident decisions
                  </span>
                </div>
                <div className="flex items-center p-4 bg-emerald-50 rounded-xl">
                  <span className="font-semibold text-gray-800">
                    Early detection of risks and bottlenecks
                  </span>
                </div>
                <div className="flex items-center p-4 bg-purple-50 rounded-xl">
                  <span className="font-semibold text-gray-800">
                    Alignment across teams and leadership
                  </span>
                </div>
                <div className="flex items-center p-4 bg-orange-50 rounded-xl">
                  <span className="font-semibold text-gray-800">
                    Reduced firefighting and guesswork
                  </span>
                </div>
                <div className="flex items-center p-4 bg-slate-50 rounded-xl">
                  <span className="font-semibold text-gray-800">
                    Clear ownership and accountability
                  </span>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-100">
                <p className="text-sm text-gray-500 leading-relaxed">
                  Built for real-world operations — not static reporting or
                  vanity metrics.
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

export default AnalyticsVisibility;
