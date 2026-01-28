import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const TermsAndConditions = () => {
  return (
    <>
      <Header />
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Terms & Conditions</h1>
        <p className="text-sm text-gray-500 mb-8">Effective Date: [Insert Date]</p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">1. Services</h2>
        <p className="mb-4 text-gray-700">
          Zaltix Soft Solutions provides services such as web development, app
          development, AI/ML solutions, cloud services, and digital marketing.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">2. User Obligations</h2>
        <p className="mb-4 text-gray-700">
          You agree to provide accurate information, comply with all laws, and
          not misuse the website or services.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">3. Intellectual Property</h2>
        <p className="mb-4 text-gray-700">
          All content (text, graphics, logos, and images) is owned by Zaltix Soft
          Solutions. You may not copy or distribute content without permission.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">4. Limitation of Liability</h2>
        <p className="mb-4 text-gray-700">
          We are not responsible for indirect, incidental, or consequential
          damages from using our website or services.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">5. Pricing & Payment</h2>
        <p className="mb-4 text-gray-700">
          Prices and payment terms will be agreed upon per project or proposal.
          Late payments may incur additional fees.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">6. Cancellation & Refunds</h2>
        <p className="mb-4 text-gray-700">
          Cancellation policies vary by service. Refunds will depend on work
          completed at the time of cancellation.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">7. Privacy</h2>
        <p className="mb-4 text-gray-700">
          Use of your data is subject to our Privacy Policy.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">8. Governing Law</h2>
        <p className="mb-4 text-gray-700">
          These terms are governed by the laws of Telangana, India. Disputes
          shall be resolved in Hyderabad courts.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">9. Changes to Terms</h2>
        <p className="mb-4 text-gray-700">
          We may update these terms from time to time. Updates will be posted on
          this page.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">10. Contact</h2>
        <p className="text-gray-700">
          Zaltix Soft Solutions<br />
          Plot no: 69, Road number 3, Kothapet, Hyderabad, Telangana, India
          500035<br />
          Email: terms@zaltixsoftsolutions.com
        </p>
      </section>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
