// import React from 'react';
// import Header from '../../components/Header';
// import Footer from '../../components/Footer';

// const AIAssistants = () => {
//   return (
//     <div className="min-h-screen bg-white">
//       <Header />

//       <section className="pt-28 pb-20 px-6 max-w-5xl mx-auto">
//         <h1 className="text-4xl md:text-5xl font-bold mb-6">
//           AI-Enabled Assistants
//         </h1>

//         <p className="text-xl text-gray-600 mb-10">
//           Make systems easier to use and decisions faster to execute.
//         </p>

//         <div className="space-y-8 text-gray-700 leading-relaxed">
//           <p>
//             We implement assistants that help teams interact naturally with
//             systems — providing explanations, guidance, and recommendations.
//           </p>

//           <ul className="list-disc pl-6 space-y-2">
//             <li>Context-aware operational assistance</li>
//             <li>System explanations & summaries</li>
//             <li>Embedded recommendations</li>
//             <li>Business-specific AI models</li>
//           </ul>

//           <p>
//             Adoption increases because complexity decreases.
//           </p>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default AIAssistants;
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useNavigate } from 'react-router-dom';

const AIAssistants = () => {
  const navigate = useNavigate();

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
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <span className="text-sm font-medium text-indigo-800">
              AI-Powered Operational Intelligence
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 bg-clip-text text-transparent">
              AI-Enabled
            </span>{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent font-bold">
              Assistants
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10">
            Intelligent assistants embedded inside your systems — helping teams understand context, 
            reduce effort, and make faster, better decisions.
          </p>
          
          {/* ✅ CTA */}
          <div className="flex justify-center">
            <button
              onClick={() => navigate('/contact')}
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800 text-white font-semibold text-base rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-24 px-6 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left Main Content */}
          <div className="lg:col-span-2 space-y-10 text-gray-700 leading-relaxed">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 to-slate-800 bg-clip-text text-transparent mb-6">
                Context-Aware Intelligence
              </h2>
              <p className="text-lg mb-8 text-gray-600">
                As operational systems grow more complex, teams often struggle to extract the right 
                information at the right time. We design AI-enabled assistants that sit directly 
                inside your operational platforms — trained on your data, workflows, and business logic.
              </p>
              
              <p className="text-lg text-gray-600">
                These assistants help users understand what is happening, why it matters, and what 
                to do next — without digging through dashboards, documentation, or reports.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-indigo-700 mb-6">What They Do</h3>
                <ul className="space-y-4 text-gray-700">
                  <li>Explain system data, metrics, and anomalies in plain language</li>
                  <li>Provide context-aware recommendations inside workflows</li>
                  <li>Answer operational questions using live system data</li>
                  <li>Guide users through complex processes step-by-step</li>
                  <li>Reduce dependency on tribal knowledge</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-emerald-700 mb-6">Perfect Fit For</h3>
                <ul className="space-y-4 text-gray-700">
                  <li>Operations & execution platforms</li>
                  <li>Sales, finance, and HR systems</li>
                  <li>Analytics and reporting tools</li>
                  <li>Admin and management dashboards</li>
                  <li>Customer and partner-facing systems</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-50 to-emerald-50 rounded-2xl p-8 border border-indigo-100 text-center">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Seamless Integration</h4>
              <p className="text-lg text-gray-600">
                By embedding intelligence directly into systems people already use, adoption increases 
                naturally — complexity decreases.
              </p>
            </div>
          </div>

          {/* Right Side Card */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 h-fit hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Business Impact</h3>

              <ul className="space-y-4 text-gray-700">
                <li>Faster decision-making</li>
                <li>Reduced cognitive load</li>
                <li>Higher system adoption</li>
                <li>Fewer interpretation errors</li>
                <li>Scalable intelligence</li>
              </ul>

              <div className="pt-8 border-t border-gray-100 mt-8">
                <p className="text-sm text-gray-500">
                  Designed for real business execution — not experiments or demos.
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

export default AIAssistants;
