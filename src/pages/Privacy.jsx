import React from "react";
import Header from "../components/Header";

function Privacy() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Privacy Policy Section */}
        <section className="bg-white p-6 md:p-10 rounded-lg shadow-lg mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
            Privacy Policy
          </h1>
          <p className="text-gray-600 leading-relaxed mb-4">
            This privacy policy (
            <span className="font-semibold">"Privacy Policy"</span>) explains
            how personal information is collected, used, stored, and disclosed
            by <span className="font-semibold">Monirates Limited</span>{" "}
            ("Monirates," “the company,” "we," "us," and "our").
          </p>
          <p className="text-gray-600 leading-relaxed">
            The provisions contained in this Privacy Policy take precedence over
            all previous notices and statements regarding our privacy practices
            in regards to our services.
          </p>
        </section>

        {/* Application of Privacy Policy Section */}
        <section className="bg-white p-6 md:p-10 rounded-lg shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Application of this Privacy Policy
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            This Privacy Policy intends to establish and explain how we will
            handle, manage, and protect all personal data, most especially the
            personal data of our users.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            It applies to systems, operations, and processes of Monirates that
            involve the collection, use, storage, and disclosure of personal and
            sensitive information of our users.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            This Privacy Policy applies to the use of our website and mobile
            application, and all related websites and applications owned and
            operated by us (collectively, the{" "}
            <span className="font-semibold">"Website"</span>).
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our services are currently available in{" "}
            <span className="font-semibold">Nigeria</span> and{" "}
            <span className="font-semibold">Ghana</span>, and accessible only to
            users who have fulfilled our KYC policy.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            By accessing or using our services through any device (desktop,
            laptop, mobile phone, tablet, etc.), you agree to this Privacy
            Policy.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Privacy;
