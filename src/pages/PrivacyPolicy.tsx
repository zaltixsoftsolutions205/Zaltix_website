import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Header />
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-8">Last Updated: [05/06/2025]</p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">1. Information We Collect</h2>
        <p className="mb-4 text-gray-700">
          We collect personal details such as name, email, and phone number when
          you fill out forms. We also collect usage data like IP address and
          browser type. Cookies and analytics tools help improve your experience.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">2. How We Use Information</h2>
        <p className="mb-4 text-gray-700">
          We use collected information to respond to inquiries, provide services,
          send updates, and enhance our website functionality.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">3. Data Sharing</h2>
        <p className="mb-4 text-gray-700">
          We never sell personal information. Data may be shared with trusted
          providers or when required by law.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">4. Data Security</h2>
        <p className="mb-4 text-gray-700">
          We take reasonable measures to secure your information but cannot
          guarantee 100% security of data transmitted online.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">5. Your Rights</h2>
        <p className="mb-4 text-gray-700">
          You can request access, correction, or deletion of your data by
          contacting us at <b>privacy@zaltixsoftsolutions.com</b>.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">6. Cookies & Tracking</h2>
        <p className="mb-4 text-gray-700">
          Cookies are used for essential functionality and analytics. You can
          disable them in browser settings.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">7. Third-Party Links</h2>
        <p className="mb-4 text-gray-700">
          We are not responsible for the privacy practices of third-party sites
          linked from our website.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">8. Children’s Privacy</h2>
        <p className="mb-4 text-gray-700">
          Our services are not directed to children under 16, and we do not
          knowingly collect their personal information.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">9. Changes to Policy</h2>
        <p className="mb-4 text-gray-700">
          Updates will be posted on this page with a revised "Last Updated" date.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">10. Contact Us</h2>
        <p className="text-gray-700">
          Zaltix Soft Solutions<br />
          Plot no: 69,Green Hills Colony,Road number 3, Kothapet, Hyderabad<br />
                  Telangana, India. 500035<br />
          Email: info@zaltixsoftsolutions.com
        </p>
      </section>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
