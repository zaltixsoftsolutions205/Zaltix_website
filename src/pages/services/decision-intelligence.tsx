// import React from 'react';
// import Header from '../../components/Header';
// import Footer from '../../components/Footer';

// const DecisionIntelligence = () => {
//   return (
//     <div className="min-h-screen bg-white">
//       <Header />

//       <section className="pt-28 pb-20 px-6 max-w-5xl mx-auto">
//         <h1 className="text-4xl md:text-5xl font-bold mb-6">
//           Decision Intelligence
//         </h1>

//         <p className="text-xl text-gray-600 mb-10">
//           Act before problems become losses.
//         </p>

//         <div className="space-y-8 text-gray-700 leading-relaxed">
//           <p>
//             Decision intelligence embeds insight directly into operations —
//             surfacing risks, priorities, and next actions automatically.
//           </p>

//           <ul className="list-disc pl-6 space-y-2">
//             <li>Early warning signals</li>
//             <li>Exception & risk detection</li>
//             <li>Decision prioritization</li>
//             <li>Predictive & rule-based insights</li>
//           </ul>

//           <p>
//             Teams move from reactive firefighting to proactive control.
//           </p>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default DecisionIntelligence;
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const DecisionIntelligence = () => {
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
                d="M9 17v-6a3 3 0 016 0v6m-9 0h12"
              />
            </svg>
            <span className="text-sm font-medium text-indigo-800">
              Embedded Operational Intelligence
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 bg-clip-text text-transparent">
              Decision
            </span>{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent font-bold">
              Intelligence
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10">
            Act before problems become losses — with intelligence built directly
            into everyday operations.
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
                From Reactive Decisions to Proactive Control
              </h2>

              <p className="text-lg mb-8 text-gray-600">
                Most organizations react to problems only after they surface —
                missed targets, customer escalations, or operational breakdowns.
                By then, the cost is already incurred.
              </p>

              <p className="text-lg text-gray-600">
                Decision intelligence embeds insight directly into operational
                systems — continuously monitoring data, detecting risks, and
                surfacing what matters most so teams can act early and
                confidently.
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-indigo-700 mb-6">
                  What the System Surfaces
                </h3>
                <ul className="space-y-4 text-gray-700">
                  <li>Early warning signals before issues escalate</li>
                  <li>Exceptions and anomalies across workflows</li>
                  <li>Risk indicators tied to business outcomes</li>
                  <li>Decision prioritization based on impact</li>
                  <li>Predictive and rule-based insights</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-emerald-700 mb-6">
                  Where It’s Applied
                </h3>
                <ul className="space-y-4 text-gray-700">
                  <li>Operations and execution monitoring</li>
                  <li>Sales pipeline and revenue risk tracking</li>
                  <li>Financial performance and cash flow</li>
                  <li>Service delivery and SLA management</li>
                  <li>Leadership and management dashboards</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-50 to-emerald-50 rounded-2xl p-8 border border-indigo-100 text-center">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Intelligence Where Decisions Happen
              </h4>
              <p className="text-lg text-gray-600">
                Decision intelligence works best when it’s embedded directly
                into workflows — not buried in separate analytics tools.
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
                    Earlier detection of risks and issues
                  </span>
                </div>
                <div className="flex items-center p-4 bg-emerald-50 rounded-xl">
                  <span className="font-semibold text-gray-800">
                    Clear prioritization of actions
                  </span>
                </div>
                <div className="flex items-center p-4 bg-purple-50 rounded-xl">
                  <span className="font-semibold text-gray-800">
                    Reduced reactive firefighting
                  </span>
                </div>
                <div className="flex items-center p-4 bg-orange-50 rounded-xl">
                  <span className="font-semibold text-gray-800">
                    Better outcomes with fewer decisions
                  </span>
                </div>
                <div className="flex items-center p-4 bg-slate-50 rounded-xl">
                  <span className="font-semibold text-gray-800">
                    Confident execution at scale
                  </span>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-100">
                <p className="text-sm text-gray-500 leading-relaxed">
                  Designed for real operational environments — not theoretical
                  decision models.
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

export default DecisionIntelligence;
