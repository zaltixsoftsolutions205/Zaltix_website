// import React from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import { Calendar, User, ArrowLeft } from 'lucide-react';

// const BlogDetailPage = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   // Hardcoded blogs
//   const articles = [
//     {
//       id: 1,
//       title: 'Why Digital Marketing Is No Longer Optional for Hospitals — It’s Essential',
//       author: 'Anjali Garlapati',
//       date: '2025-09-13',
//       category: 'Digital Marketing',
//       readTime: '12 min read',
//       gif: '/gifs/healthcare-marketing.jpg',
//       content: `
// ________________________________________
// The Shift from Word-of-Mouth to Web Searches
// Once, your hospital’s reputation within the community was enough to keep patients coming. Today, patients rely on Google searches, online reviews, social media, and even doctor reels on Instagram before making decisions.

// Online reviews have become the new referrals. A handful of 5-star reviews can attract patients, but one negative review left unanswered can create doubt. A modern, responsive website conveys professionalism and trust.

// ________________________________________
// The Rise of the Informed, Empowered Patient
// Patients today are actively involved in their healthcare decisions. They seek answers, options, and guidance online.

// Digital content like blogs, videos, FAQs, and guides position your hospital as a reliable information source, not just a service provider. Providing helpful content before someone becomes your patient builds trust and confidence.

// ________________________________________
// Why Visibility Is Everything
// People search specifically:
// - “Best heart hospital near me”
// - “Maternity hospital with water birthing facilities”
// - “24/7 emergency care in [city]”

// If your hospital isn’t optimized for these search terms—or isn’t running local ads—you’re likely being ignored in favor of competitors. Visibility online is vital.

// ________________________________________
// Building Trust Online
// Trust starts online. Google reviews, testimonials, website design, and social media presence all contribute to a patient’s first impression.

// Your hospital needs:
// - Authentic patient stories
// - Doctor bios and introduction videos
// - Quick responses to reviews (good and bad)

// Showing the human side builds confidence and lasting relationships.

// ________________________________________
// How Patients Choose Hospitals Today
// A person experiences symptoms, Googles them, reads blogs, watches YouTube videos, and searches for nearby hospitals. A slow, confusing site loses the patient. A sleek, clear site with positive reviews wins.

// Your digital journey—from search results to booking—is your front desk.

// ________________________________________
// Digital Marketing’s Role in Healthcare Today
// Digital marketing is about connecting with patients at the right moment with the right message. A strong strategy includes:
// - **SEO** – Appear in relevant searches.
// - **Google & Social Ads** – Targeted by location, needs, and demographics.
// - **Educational Blogs & Videos** – Build authority and patient understanding.
// - **Email & SMS Updates** – Keep patients informed and engaged.
// - **Online Booking Integration** – Simplifies appointment process.
// - **Review Management** – Demonstrates patient care and trust.

// ________________________________________
// Conclusion: It’s Time to Show Up or Miss Out
// Digital marketing isn’t optional—it’s the lifeline of hospital growth. Visibility, helpfulness, and responsiveness win patients today. If you’re not investing in digital marketing, you’re already behind.
//       `,
//     },
//     {
//       id: 2,
//       title: 'The Journey of an Application: From Localhost to Live Deployment',
//       author: 'Anjali Garlapati',
//       date: '2025-11-24',
//       category: 'Development',
//       readTime: '8 min read',
//       gif: '/gifs/app-deployment.png', // Replace with actual image
//       content: `
// ________________________________________
// Every application we use today—whether it’s a website, mobile app, or software tool—begins its life in a private development environment. Before reaching users, an app goes through several stages, and the first major step in that journey is running on localhost.

// What Does Localhost Mean?
// Localhost is the developer’s personal testing environment. It is a space inside their own computer where the application is built, shaped, and improved. In this phase, the app is not connected to the internet and cannot be accessed by the public.

// Working on localhost helps developers:
// - Test new ideas without any risk
// - Quickly identify and fix issues
// - Improve features before they reach users
// - Experiment freely without disturbing live systems

// Why Applications Start on Localhost
// Starting development on localhost offers flexibility and safety. Developers can make changes instantly, check results immediately, and ensure everything works as expected. Since no real users are involved at this stage, developers have full freedom to experiment.

// Some major advantages:
// - No downtime or interruptions
// - Easy debugging and performance checks
// - Zero impact on real users
// - Complete control over the environment

// Moving from Localhost to a Live Server
// Once all features are tested and the application becomes stable, the next step is deployment. This process usually happens in two phases:

// 1. Staging Phase
// The staging environment acts as a “dress rehearsal.”
// It mirrors a real-time server, allowing developers to test the app under conditions similar to the final live setup. Any remaining bugs are addressed here.

// 2. Production (Live) Phase
// After clearing staging tests, the application is deployed to the live server.
// This is when users can finally access it anytime through the internet. At this point, the app starts functioning in real-world conditions and begins serving its purpose.

// The Importance of Going Live
// Launching an application live is a major milestone because it means:
// - Users can interact with the app
// - The product is ready for real-world use
// - The development team’s work translates into actual value
// - Continuous feedback helps future improvements

// Conclusion
// Every successful application begins in a small, private space—localhost—where ideas are built and refined. Only after careful testing, polishing, and validation, it moves to a live environment for users to experience. This journey from localhost to live deployment is the foundation of every reliable and well-built digital product.
//       `,
//     },
//   ];

//   const article = articles.find((a) => a.id === parseInt(id));

//   if (!article) return <div className="min-h-screen flex items-center justify-center">Article not found</div>;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
//       <Header />

//       <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
//         <button
//           onClick={() => navigate(-1)}
//           className="flex items-center text-purple-600 font-semibold mb-4"
//         >
//           <ArrowLeft className="h-4 w-4 mr-1" /> Back
//         </button>

//         <div className="relative h-64 bg-black overflow-hidden rounded-lg shadow-lg mb-6">
//           <img
//             src={article.gif}
//             alt={article.title}
//             className="object-cover w-full h-full"
//           />
//           <div className="absolute top-4 left-4">
//             <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
//               {article.category}
//             </span>
//           </div>
//         </div>

//         <div className="mb-4">
//           <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">{article.title}</h1>
//           <div className="flex items-center text-sm text-gray-500 mb-6">
//             <User className="h-4 w-4 mr-1" />
//             <span className="mr-4">{article.author}</span>
//             <Calendar className="h-4 w-4 mr-1" />
//             <span>{new Date(article.date).toLocaleDateString()}</span>
//             <span className="ml-4">{article.readTime}</span>
//           </div>

//           <p className="text-gray-700 whitespace-pre-line">{article.content}</p>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default BlogDetailPage;
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Calendar, User, ArrowLeft } from 'lucide-react';

const BlogDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Hardcoded blogs
  const articles = [
    {
      id: 1,
      title: 'Why Digital Marketing Is No Longer Optional for Hospitals — It\'s Essential',
      author: 'Anjali Garlapati',
      date: '2025-09-13',
      category: 'Digital Marketing',
      readTime: '12 min read',
      gif: '/gifs/healthcare-marketing.jpg',
      content: `
________________________________________
The Shift from Word-of-Mouth to Web Searches
Once, your hospital's reputation within the community was enough to keep patients coming. Today, patients rely on Google searches, online reviews, social media, and even doctor reels on Instagram before making decisions.

Online reviews have become the new referrals. A handful of 5-star reviews can attract patients, but one negative review left unanswered can create doubt. A modern, responsive website conveys professionalism and trust.

________________________________________
The Rise of the Informed, Empowered Patient
Patients today are actively involved in their healthcare decisions. They seek answers, options, and guidance online.

Digital content like blogs, videos, FAQs, and guides position your hospital as a reliable information source, not just a service provider. Providing helpful content before someone becomes your patient builds trust and confidence.

________________________________________
Why Visibility Is Everything
People search specifically:
- "Best heart hospital near me"
- "Maternity hospital with water birthing facilities"
- "24/7 emergency care in [city]"

If your hospital isn't optimized for these search terms—or isn't running local ads—you're likely being ignored in favor of competitors. Visibility online is vital.

________________________________________
Building Trust Online
Trust starts online. Google reviews, testimonials, website design, and social media presence all contribute to a patient's first impression.

Your hospital needs:
- Authentic patient stories
- Doctor bios and introduction videos
- Quick responses to reviews (good and bad)

Showing the human side builds confidence and lasting relationships.

________________________________________
How Patients Choose Hospitals Today
A person experiences symptoms, Googles them, reads blogs, watches YouTube videos, and searches for nearby hospitals. A slow, confusing site loses the patient. A sleek, clear site with positive reviews wins.

Your digital journey—from search results to booking—is your front desk.

________________________________________
Digital Marketing's Role in Healthcare Today
Digital marketing is about connecting with patients at the right moment with the right message. A strong strategy includes:
- **SEO** – Appear in relevant searches.
- **Google & Social Ads** – Targeted by location, needs, and demographics.
- **Educational Blogs & Videos** – Build authority and patient understanding.
- **Email & SMS Updates** – Keep patients informed and engaged.
- **Online Booking Integration** – Simplifies appointment process.
- **Review Management** – Demonstrates patient care and trust.

________________________________________
Conclusion: It's Time to Show Up or Miss Out
Digital marketing isn't optional—it's the lifeline of hospital growth. Visibility, helpfulness, and responsiveness win patients today. If you're not investing in digital marketing, you're already behind.
      `,
    },
    {
      id: 2,
      title: 'The Journey of an Application: From Localhost to Live Deployment',
      author: 'Anjali Garlapati',
      date: '2025-11-24',
      category: 'Development',
      readTime: '8 min read',
      gif: '/gifs/app-deployment.png',
      content: `
________________________________________
Every application we use today—whether it's a website, mobile app, or software tool—begins its life in a private development environment. Before reaching users, an app goes through several stages, and the first major step in that journey is running on localhost.

What Does Localhost Mean?
Localhost is the developer's personal testing environment. It is a space inside their own computer where the application is built, shaped, and improved. In this phase, the app is not connected to the internet and cannot be accessed by the public.

Working on localhost helps developers:
- Test new ideas without any risk
- Quickly identify and fix issues
- Improve features before they reach users
- Experiment freely without disturbing live systems

Why Applications Start on Localhost
Starting development on localhost offers flexibility and safety. Developers can make changes instantly, check results immediately, and ensure everything works as expected. Since no real users are involved at this stage, developers have full freedom to experiment.

Some major advantages:
- No downtime or interruptions
- Easy debugging and performance checks
- Zero impact on real users
- Complete control over the environment

Moving from Localhost to a Live Server
Once all features are tested and the application becomes stable, the next step is deployment. This process usually happens in two phases:

1. Staging Phase
The staging environment acts as a "dress rehearsal."
It mirrors a real-time server, allowing developers to test the app under conditions similar to the final live setup. Any remaining bugs are addressed here.

2. Production (Live) Phase
After clearing staging tests, the application is deployed to the live server.
This is when users can finally access it anytime through the internet. At this point, the app starts functioning in real-world conditions and begins serving its purpose.

The Importance of Going Live
Launching an application live is a major milestone because it means:
- Users can interact with the app
- The product is ready for real-world use
- The development team's work translates into actual value
- Continuous feedback helps future improvements

Conclusion
Every successful application begins in a small, private space—localhost—where ideas are built and refined. Only after careful testing, polishing, and validation, it moves to a live environment for users to experience. This journey from localhost to live deployment is the foundation of every reliable and well-built digital product.
      `,
    },
    {
      id: 3,
      title: 'App Development Is No Longer About Apps — It\'s About Experiences',
      author: 'Anjali Garlapati',
      date: '2025-12-15',
      category: 'Development',
      readTime: '10 min read',
      gif: '/gifs/app-experience.jpeg',
      content: `
________________________________________
For a long time, app development was seen as a purely technical task: write code, fix bugs, and launch an application. Today, that definition is outdated. App development has evolved into a strategic process focused on delivering meaningful digital experiences that solve real problems.

In a world where users have countless apps at their fingertips, functionality alone is not enough. People expect speed, simplicity, personalization, and reliability—all wrapped in an intuitive design. This shift has changed how developers, businesses, and decision-makers approach application development.

________________________________________
From Features to Purpose
Modern apps are built with a clear purpose. Whether it's a startup launching its first product or an enterprise optimizing internal operations, the goal is no longer "just build an app." The goal is to create value. Successful apps are those that address specific user needs and integrate seamlessly into daily workflows.

This purpose-driven approach ensures that every feature has a reason to exist—eliminating clutter and enhancing usability.

________________________________________
User Experience Is the Real Differentiator
Users may not understand code, but they immediately notice poor experience. Slow loading times, confusing navigation, or unnecessary steps can drive users away within seconds. That's why user experience (UX) has become the core of app development.

A well-designed app feels effortless. It guides users naturally, anticipates their actions, and delivers results with minimal effort. When UX is done right, technology becomes invisible—and that's the ultimate success.

________________________________________
Technology as an Enabler, Not the Focus
Frameworks, programming languages, and cloud platforms are tools—not the product. The real strength of app development lies in how these technologies are combined to build scalable, secure, and future-ready solutions.

With cross-platform development, cloud infrastructure, and API-driven architecture, apps today are more flexible than ever. This allows businesses to grow faster, adapt quickly, and respond to changing market demands.

________________________________________
The Rise of Intelligent Applications
Apps are getting smarter. Artificial Intelligence and data analytics are enabling applications to learn from user behavior, automate decisions, and deliver personalized experiences. From smart notifications to predictive insights, intelligence is becoming a standard expectation—not a premium feature.

This evolution is redefining the role of developers, pushing them to think beyond functionality and focus on long-term impact.

________________________________________
Building for the Long Run
Launching an app is only the beginning. Continuous improvement, performance monitoring, and user feedback are essential for sustained success. The best apps evolve constantly, aligning with user expectations and technological advancements.

In today's digital ecosystem, app development is a journey—not a one-time project.

________________________________________
Final Thought
Great apps don't just exist on devices—they become part of people's lives. When app development is driven by purpose, experience, and innovation, it creates solutions that truly matter.

App development today is not just about building software — it's about creating experiences that solve real problems.
When technology meets purpose, innovation becomes impactful.
      `,
    },
  ];

  const article = articles.find((a) => a.id === parseInt(id));

  if (!article) return <div className="min-h-screen flex items-center justify-center">Article not found</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />

      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-purple-600 font-semibold mb-4 hover:text-purple-800 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-1" /> Back
        </button>

        <div className="relative h-64 md:h-80 bg-black overflow-hidden rounded-lg shadow-lg mb-6">
          <img
            src={article.gif}
            alt={article.title}
            className="object-cover w-full h-full"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
              {article.category}
            </span>
          </div>
        </div>

        <div className="mb-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 leading-tight">
            {article.title}
          </h1>
          
          <div className="flex flex-wrap items-center text-sm text-gray-500 mb-8 border-b pb-4">
            <div className="flex items-center mr-6 mb-2">
              <User className="h-4 w-4 mr-2" />
              <span className="font-medium">{article.author}</span>
            </div>
            <div className="flex items-center mr-6 mb-2">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{new Date(article.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            <div className="mb-2">
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                {article.readTime}
              </span>
            </div>
          </div>

          <div className="text-gray-700">
            {article.content.split('________________________________________').map((section, sectionIndex) => (
              section.trim() && (
                <div key={sectionIndex} className="mb-8">
                  {section.trim().split('\n').map((paragraph, paragraphIndex) => {
                    const trimmedPara = paragraph.trim();
                    
                    if (!trimmedPara) return null;
                    
                    // Check for section headers (first line after split)
                    if (paragraphIndex === 0 && trimmedPara) {
                      return (
                        <h3 key={paragraphIndex} className="text-2xl font-bold mb-4 text-gray-900">
                          {trimmedPara}
                        </h3>
                      );
                    }
                    
                    // Check for bold list items
                    if (trimmedPara.startsWith('- **')) {
                      const boldText = trimmedPara.match(/\*\*(.*?)\*\*/)?.[1] || '';
                      const restText = trimmedPara.replace(/\*\*.*?\*\*/, '').replace('- ', '').trim();
                      return (
                        <li key={paragraphIndex} className="ml-6 mb-2">
                          <strong>{boldText}</strong> {restText}
                        </li>
                      );
                    }
                    
                    // Check for regular list items
                    if (trimmedPara.startsWith('- ')) {
                      return (
                        <li key={paragraphIndex} className="ml-6 mb-2">
                          {trimmedPara.substring(2)}
                        </li>
                      );
                    }
                    
                    // Regular paragraphs
                    return (
                      <p key={paragraphIndex} className="mb-4 text-lg leading-relaxed">
                        {trimmedPara}
                      </p>
                    );
                  })}
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogDetailPage;