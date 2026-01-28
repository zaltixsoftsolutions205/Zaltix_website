// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import Header from '../components/Header';
// import Footer from '../components/Footer';

// const KnowledgePage = () => {
//   const navigate = useNavigate();

//   const articles = [
//     {
//       id: 1,
//       title: 'Why Digital Marketing Is No Longer Optional for Hospitals — It’s Essential',
//       category: 'Digital Marketing',
//       gif: '/gifs/healthcare-marketing.jpg',
//     },
//     {
//       id: 2,
//       title: 'The Journey of an Application: From Localhost to Live Deployment',
//       category: 'Development',
//       gif: '/gifs/app-deployment.png',
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex flex-col">
//       <Header />

//       {/* Header Section */}
//       <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-5xl mx-auto text-center">
//           <h1 className="text-4xl md:text-6xl font-bold mb-4">
//             Knowledge{' '}
//             <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
//               Base
//             </span>
//           </h1>
//           <p className="text-xl max-w-3xl mx-auto text-gray-700">
//             Insights and expertise from Zaltix Soft Solutions — explore our blogs.
//           </p>
//         </div>
//       </section>

//       {/* Blog Cards Section */}
//       <section className="flex-grow pb-12 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//           {articles.map((article) => (
//             <div
//               key={article.id}
//               onClick={() => navigate(`/blog/${article.id}`)}
//               className="cursor-pointer group overflow-hidden shadow-lg border border-gray-200 rounded-lg hover:scale-105 transition-all duration-300"
//             >
//               {/* Compact Image */}
//               <div className="relative h-40 bg-black overflow-hidden">
//                 <img
//                   src={article.gif}
//                   alt={article.title}
//                   className="object-cover w-full h-full"
//                 />
//                 <div className="absolute top-3 left-3">
//                   <span className="bg-white/90 text-gray-800 px-2 py-0.5 rounded-full text-xs font-medium">
//                     {article.category}
//                   </span>
//                 </div>
//               </div>

//               {/* Title */}
//               <div className="p-3">
//                 <h3 className="text-md font-semibold text-gray-900 group-hover:text-purple-600 transition-colors text-center">
//                   {article.title}
//                 </h3>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default KnowledgePage;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const KnowledgePage = () => {
  const navigate = useNavigate();

  const articles = [
    {
      id: 1,
      title: 'Why Digital Marketing Is No Longer Optional for Hospitals — It\'s Essential',
      category: 'Digital Marketing',
      gif: '/gifs/healthcare-marketing.jpg',
    },
    {
      id: 2,
      title: 'The Journey of an Application: From Localhost to Live Deployment',
      category: 'Development',
      gif: '/gifs/app-deployment.png',
    },
    {
      id: 3,
      title: 'App Development Is No Longer About Apps — It\'s About Experiences',
      category: 'Development',
      gif: '/gifs/app-experience.jpeg',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex flex-col">
      <Header />

      {/* Header Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Knowledge{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Base
            </span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-700">
            Insights and expertise from Zaltix Soft Solutions — explore our blogs.
          </p>
        </div>
      </section>

      {/* Blog Cards Section */}
      <section className="flex-grow pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <div
              key={article.id}
              onClick={() => navigate(`/blog/${article.id}`)}
              className="cursor-pointer group overflow-hidden shadow-lg border border-gray-200 rounded-lg hover:scale-105 transition-all duration-300 bg-white hover:shadow-xl"
            >
              {/* Compact Image */}
              <div className="relative h-40 bg-black overflow-hidden">
                <img
                  src={article.gif}
                  alt={article.title}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-white/90 text-gray-800 px-2 py-0.5 rounded-full text-xs font-medium">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Title */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                  {article.title}
                </h3>
                <div className="mt-3">
                  <span className="inline-flex items-center text-sm text-purple-600 font-medium group-hover:text-purple-800">
                    Read article
                    <svg 
                      className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State / Future Articles */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-600 mb-4">
            <span className="text-lg font-bold">+</span>
          </div>
          <p className="text-gray-600">
            More insights coming soon...
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default KnowledgePage;