// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Disclaimer = () => {
  return (
    <motion.div
      className="max-w-4xl mx-auto px-6 py-12 leading-relaxed"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
    >
      <h1 className="text-4xl font-bold text-center mb-4 text-blue-400">
        Disclaimer
      </h1>
      <p className="text-sm text-gray-500 text-center mb-10">
        Last Updated: November 2025
      </p>

      <div className="space-y-8">
        <section>
          <p>
            The information provided on <strong>DevTinder</strong> (“the
            Platform”) is for general informational and networking purposes
            only. While we strive to ensure accuracy and reliability of the
            content, <strong>DevTinder</strong> makes no warranties or
            representations regarding its completeness or suitability for any
            purpose.
          </p>
        </section>

        <hr className="border-gray-300" />

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            1. No Professional Advice
          </h2>
          <p>
            DevTinder is a developer networking platform, not a professional
            consulting service. Any collaboration, mentorship, or project
            partnership between users is entirely at their own discretion. We do
            not endorse or guarantee the quality or outcome of such
            interactions.
          </p>
        </section>

        <hr className="border-gray-300" />

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            2. External Links & Third-Party Content
          </h2>
          <p>
            The Platform may contain links to third-party websites or services.
            These links are provided for convenience only, and{" "}
            <strong>DevTinder</strong> is not responsible for the content,
            privacy policies, or practices of those external platforms.
          </p>
        </section>

        <hr className="border-gray-300" />

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            3. User Responsibility
          </h2>
          <p>
            Users are solely responsible for the information they share and the
            connections they make on the Platform. <strong>DevTinder</strong> is
            not liable for any damages, disputes, or losses arising from user
            interactions or collaborations.
          </p>
        </section>

        <hr className="border-gray-300" />

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            4. Limitation of Liability
          </h2>
          <p>
            Under no circumstances shall <strong>DevTinder</strong> or its team
            members be held responsible for any indirect, incidental, or
            consequential damages resulting from the use of the Platform.
          </p>
        </section>

        <hr className="border-gray-300" />

        <section>
          <h2 className="text-2xl font-semibold mb-3">5. Contact Us</h2>
          <p>
            For any concerns or questions regarding this disclaimer, please
            contact us at{" "}
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

export default Disclaimer;
