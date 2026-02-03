// import React from 'react';
// import Header from '../../components/Header';
// import Footer from '../../components/Footer';

// const AutomationSystems = () => {
//   return (
//     <div className="min-h-screen bg-white">
//       <Header />

//       <section className="pt-28 pb-20 px-6 max-w-5xl mx-auto">
//         <h1 className="text-4xl md:text-5xl font-bold mb-6">
//           Automation Systems
//         </h1>

//         <p className="text-xl text-gray-600 mb-10">
//           Remove chaos. Reduce dependency. Create predictable execution.
//         </p>

//         <div className="space-y-8 text-gray-700 leading-relaxed">
//           <p>
//             Operational chaos is a system problem — not a people problem.
//             We design automation systems that standardize execution across teams.
//           </p>

//           <ul className="list-disc pl-6 space-y-2">
//             <li>Sales, finance, HR & operations workflows</li>
//             <li>API and RPA-based automation</li>
//             <li>Cross-system orchestration</li>
//             <li>Error reduction & consistency</li>
//           </ul>

//           <p>
//             Automation creates the foundation required for visibility and
//             intelligence.
//           </p>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default AutomationSystems;
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const AutomationSystems = () => {
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
                d="M12 6v6l4 2"
              />
            </svg>
            <span className="text-sm font-medium text-indigo-800">
              Operational Automation & Execution
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 bg-clip-text text-transparent">
              Automation
            </span>{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent font-bold">
              Systems
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10">
            Remove chaos. Reduce dependency. Create predictable execution across
            your business.
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
                From Manual Work to Reliable Execution
              </h2>

              <p className="text-lg mb-8 text-gray-600">
                Operational breakdowns are rarely caused by people — they are
                caused by inconsistent processes, manual handoffs, and
                over-reliance on individual knowledge.
              </p>

              <p className="text-lg text-gray-600">
                We design automation systems that standardize how work flows
                across sales, operations, finance, and HR — ensuring execution
                happens the same way every time, regardless of who is involved.
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-indigo-700 mb-6">
                  What We Automate
                </h3>
                <ul className="space-y-4 text-gray-700">
                  <li>Sales and lead-to-revenue workflows</li>
                  <li>Finance, billing, and reconciliation processes</li>
                  <li>HR onboarding, attendance, and approvals</li>
                  <li>Operations handoffs and task orchestration</li>
                  <li>Cross-system data movement and validation</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-emerald-700 mb-6">
                  How It Works
                </h3>
                <ul className="space-y-4 text-gray-700">
                  <li>Workflow-driven execution models</li>
                  <li>API-based system integrations</li>
                  <li>RPA for legacy or manual systems</li>
                  <li>Rules and validations at every step</li>
                  <li>Clear ownership and exception handling</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-50 to-emerald-50 rounded-2xl p-8 border border-indigo-100 text-center">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Automation Creates Stability
              </h4>
              <p className="text-lg text-gray-600">
                Once execution is predictable, visibility improves naturally —
                and intelligence can be layered on top.
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
                    Reduced dependency on individuals
                  </span>
                </div>
                <div className="flex items-center p-4 bg-emerald-50 rounded-xl">
                  <span className="font-semibold text-gray-800">
                    Fewer manual errors and rework
                  </span>
                </div>
                <div className="flex items-center p-4 bg-purple-50 rounded-xl">
                  <span className="font-semibold text-gray-800">
                    Faster cycle times across teams
                  </span>
                </div>
                <div className="flex items-center p-4 bg-orange-50 rounded-xl">
                  <span className="font-semibold text-gray-800">
                    Consistent execution at scale
                  </span>
                </div>
                <div className="flex items-center p-4 bg-slate-50 rounded-xl">
                  <span className="font-semibold text-gray-800">
                    Foundation for analytics and intelligence
                  </span>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-100">
                <p className="text-sm text-gray-500 leading-relaxed">
                  Built for real operational complexity — not one-off
                  automations.
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

export default AutomationSystems;
