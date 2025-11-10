// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import React from "react";

const Contact = () => {
  return (
    <motion.div
      className="max-w-4xl mx-auto px-6 py-12 leading-relaxed"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
    >
      <h1 className="text-4xl font-bold text-center mb-4 text-blue-400">
        Contact Us
      </h1>
      <p className="text-sm text-gray-500 text-center mb-10">
        Last Updated: November 2025
      </p>

      <div className="space-y-8">
        <section>
          <p>
            Have a question, feedback, or collaboration idea? We’d love to hear
            from you! Please reach out using the details below.
          </p>
        </section>

        <hr className="border-gray-300" />

        <section>
          <h2 className="text-2xl font-semibold mb-3">Email</h2>
          <p>
            You can contact us anytime at{" "}
            <a
              href="mailto:support@thedevtinder.live"
              className="text-blue-600 underline hover:text-blue-800"
            >
              support@thedevtinder.live
            </a>
            . Our team typically responds within 1–2 business days.
          </p>
        </section>

        <hr className="border-gray-300" />

        <section>
          <h2 className="text-2xl font-semibold mb-3">Location</h2>
          <p>
            <strong>DevTinder</strong> is based in{" "}
            <span className="text-blue-600 font-medium">
              Bhilwara, Rajasthan, India
            </span>
            .
          </p>
        </section>

        <hr className="border-gray-300" />

        <section>
          <h2 className="text-2xl font-semibold mb-3">Business Inquiries</h2>
          <p>
            For business inquiries or partnership opportunities, please reach
            out to us directly via email at{" "}
            <a
              href="mailto:support@thedevtinder.live"
              className="text-blue-600 underline hover:text-blue-800"
            >
              support@thedevtinder.live
            </a>
            .
          </p>
        </section>
      </div>

      <footer className="mt-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} DevTinder. All Rights Reserved.
      </footer>
    </motion.div>
  );
};

export default Contact;
