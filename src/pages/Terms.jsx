import React from "react";
import Header from "../components/Header";

function Terms() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Terms & Conditions Section */}
        <section className="bg-white p-6 md:p-10 rounded-lg shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
            Terms & Conditions
          </h1>
          <p className="text-gray-600 leading-relaxed mb-4">
            These Terms of Use (these Terms) represent an agreement between you
            and <span className="font-semibold">MONIRATES Limited</span> and
            contain the terms and conditions governing your use of and access to
            our website, mobile app, and all affiliated websites.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <span className="font-semibold">You</span> and{" "}
            <span className="font-semibold">your</span> refer to the person who
            uses or accesses the Services, while <span className="font-semibold">we</span>,{" "}
            <span className="font-semibold">us</span>, and{" "}
            <span className="font-semibold">our</span> refer to MONIRATES and
            its affiliates.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            By using or accessing the Services, you agree to be bound by these
            Terms. If you do not agree, please do not use our services.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            These terms include, among other things, your authorization for
            debits and credits via the Automated Clearing House Network (ACH)
            and a binding arbitration provision containing a class action
            waiver.
          </p>
        </section>

        {/* Consent Section */}
        <section className="bg-white p-6 md:p-10 mt-8 rounded-lg shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Consent
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            To the extent permitted by applicable law, you consent to use
            electronic signatures and to electronically receive all records,
            notices, statements, and other communications for all services
            provided under these Terms.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-3">
            <li>
              You have read and understood this consent to use electronic
              signatures.
            </li>
            <li>
              You satisfy the minimum hardware and software requirements
              specified below.
            </li>
            <li>
              Your consent will remain in effect until you withdraw it as
              specified below.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Terms;
