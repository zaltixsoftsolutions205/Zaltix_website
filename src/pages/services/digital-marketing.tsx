// import React from 'react';
// import Header from '../../components/Header';
// import Footer from '../../components/Footer';

// const DigitalMarketing = () => {
//   return (
//     <div className="min-h-screen bg-white">
//       <Header />

//       <section className="pt-28 pb-20 px-6 max-w-5xl mx-auto">
//         <h1 className="text-4xl md:text-5xl font-bold mb-6">
//           Digital Marketing
//         </h1>

//         <p className="text-xl text-gray-600 mb-10">
//           Growth aligned with systems, data, and decisions.
//         </p>

//         <div className="space-y-8 text-gray-700 leading-relaxed">
//           <p>
//             Marketing without operational alignment creates noise. We treat
//             marketing as a measurable system tied to business outcomes.
//           </p>

//           <ul className="list-disc pl-6 space-y-2">
//             <li>Performance-driven campaigns</li>
//             <li>Lead generation aligned with capacity</li>
//             <li>Analytics-first optimization</li>
//             <li>Clear ROI visibility</li>
//           </ul>

//           <p>
//             Growth becomes predictable, not accidental.
//           </p>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default DigitalMarketing;
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const DigitalMarketing = () => {
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
                d="M3 10h11M9 21V3m9 4l3 3-3 3"
              />
            </svg>
            <span className="text-sm font-medium text-indigo-800">
              Performance-Driven Growth Systems
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 bg-clip-text text-transparent">
              Digital
            </span>{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent font-bold">
              Marketing
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10">
            Growth aligned with systems, data, and decisions — not disconnected
            campaigns.
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
                Marketing as a Measurable System
              </h2>

              <p className="text-lg mb-8 text-gray-600">
                Marketing without operational alignment creates noise — leads
                that teams can’t handle, campaigns without attribution, and
                growth that feels unpredictable.
              </p>

              <p className="text-lg text-gray-600">
                We treat digital marketing as a system — tightly connected to
                data, automation, and execution — so growth is measurable,
                repeatable, and aligned with real business capacity.
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-indigo-700 mb-6">
                  What We Focus On
                </h3>
                <ul className="space-y-4 text-gray-700">
                  <li>Performance-driven growth strategies</li>
                  <li>Lead generation aligned with sales capacity</li>
                  <li>Conversion-focused landing experiences</li>
                  <li>SEO and long-term visibility building</li>
                  <li>Paid campaigns with clear attribution</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-emerald-700 mb-6">
                  How It’s Optimized
                </h3>
                <ul className="space-y-4 text-gray-700">
                  <li>Analytics-first campaign measurement</li>
                  <li>End-to-end funnel visibility</li>
                  <li>Continuous testing and iteration</li>
                  <li>Integration with CRM and ops systems</li>
                  <li>ROI-driven decision making</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-50 to-emerald-50 rounded-2xl p-8 border border-indigo-100 text-center">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Predictable Growth, Not Guesswork
              </h4>
              <p className="text-lg text-gray-600">
                When marketing is connected to data and execution, growth
                becomes something you can plan — not hope for.
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
                    Clear visibility into marketing ROI
                  </span>
                </div>
                <div className="flex items-center p-4 bg-emerald-50 rounded-xl">
                  <span className="font-semibold text-gray-800">
                    Better quality leads, not just volume
                  </span>
                </div>
                <div className="flex items-center p-4 bg-purple-50 rounded-xl">
                  <span className="font-semibold text-gray-800">
                    Strong alignment between marketing and sales
                  </span>
                </div>
                <div className="flex items-center p-4 bg-orange-50 rounded-xl">
                  <span className="font-semibold text-gray-800">
                    Reduced wasted spend and noise
                  </span>
                </div>
                <div className="flex items-center p-4 bg-slate-50 rounded-xl">
                  <span className="font-semibold text-gray-800">
                    Sustainable, scalable growth
                  </span>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-100">
                <p className="text-sm text-gray-500 leading-relaxed">
                  Built for businesses that want growth tied to reality — not
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

export default DigitalMarketing;
