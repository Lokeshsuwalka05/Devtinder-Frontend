// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
const PrivacyPolicy = () => {
  return (
    <motion.div
      className="max-w-4xl mx-auto px-6 py-12 leading-relaxed"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
    >
      <h1 className="text-4xl font-bold text-center mb-4 text-blue-400">
        Privacy Policy
      </h1>
      <p className="text-sm text-gray-500 text-center mb-10">
        Last Updated: November 2025
      </p>

      <div className="space-y-8">
        <section>
          <p>
            At <strong>DevTinder</strong>, we value your privacy and are
            committed to protecting your personal information. This Privacy
            Policy explains how we collect, use, and safeguard your data when
            you use our platform.
          </p>
        </section>

        <hr className="border-gray-300" />

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            1. Information We Collect
          </h2>
          <p>
            We collect basic details such as your name, email address, and
            profile information to help facilitate networking and collaboration
            between users on our platform.
          </p>
        </section>

        <hr className="border-gray-300" />

        <section>
          <h2 className="text-2xl font-semibold mb-3">2. Cookies</h2>
          <p>
            We use cookies and similar technologies to enhance your experience,
            analyze usage patterns, and personalize content. You can manage or
            disable cookies anytime through your browser settings.
          </p>
        </section>

        <hr className="border-gray-300" />

        <section>
          <h2 className="text-2xl font-semibold mb-3">3. Data Usage</h2>
          <p>
            The information you provide is used solely for delivering platform
            services, improving functionality, and maintaining a safe community
            environment. We never sell or misuse your personal data.
          </p>
        </section>

        <hr className="border-gray-300" />

        <section>
          <h2 className="text-2xl font-semibold mb-3">4. Data Protection</h2>
          <p>
            Your data is securely stored, and we do not share or disclose it to
            third parties without your explicit consent — except when required
            by law or essential service operations.
          </p>
        </section>

        <hr className="border-gray-300" />

        <section>
          <h2 className="text-2xl font-semibold mb-3">5. Your Rights</h2>
          <p>
            You have the right to access, update, or delete your personal data.
            To request data deletion or raise privacy-related concerns, contact
            us at{" "}
            <a
              href="mailto:support@thedevtinder.live"
              className="text-blue-600 underline hover:text-blue-800"
            >
              support@thedevtinder.live
            </a>
            .
          </p>
        </section>

        <hr className="border-gray-300" />

        <section>
          <h2 className="text-2xl font-semibold mb-3">6. Consent</h2>
          <p>
            By using our platform, you consent to this Privacy Policy and the
            collection and use of your information as described here.
          </p>
        </section>
      </div>

      <footer className="mt-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} DevTinder. All Rights Reserved.
      </footer>
    </motion.div>
  );
};

export default PrivacyPolicy;
