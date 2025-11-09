// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

const TermOfUse = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      className="max-w-4xl mx-auto px-6 py-12  leading-relaxed"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
    >
      <h1 className="text-4xl font-bold text-center mb-4 text-blue-400">
        Terms of Use
      </h1>
      <p className="text-sm text-gray-500 text-center mb-10">
        Last Updated: November 2025
      </p>

      <div className="space-y-8">
        <section>
          <p>
            By accessing or using <strong>DevTinder</strong> (“Platform”), you
            agree to comply with these Terms of Use and our community
            guidelines.
          </p>
        </section>

        <hr className="border-gray-300" />

        <section>
          <h2 className="text-2xl font-semibold mb-3">1. Use of Platform</h2>
          <p>
            <strong>DevTinder</strong> is a connecting platform built to help
            developers, creators, and professionals network with each other.
            Users of <strong>all age groups</strong> are welcome to join.
            However, minors (below 18) are encouraged to use the platform under
            the guidance of a parent, guardian, or teacher for a safe
            experience.
          </p>
        </section>

        <hr className="border-gray-300" />

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            2. Account Responsibility
          </h2>
          <p>
            You are responsible for maintaining the confidentiality of your
            account and for all activities that occur under your login. Please
            ensure that the information provided is accurate and kept up to
            date.
          </p>
        </section>

        <hr className="border-gray-300" />

        <section>
          <h2 className="text-2xl font-semibold mb-3">3. Premium Membership</h2>
          <p>
            Payments made for premium features or upgrades are governed by our{" "}
            <a
              className="text-blue-600 underline hover:text-blue-800"
              onClick={() => {
                navigate("/refundAndCancellation");
              }}
            >
              Refund and Cancellation Policy
            </a>
            .
          </p>
        </section>

        <hr className="border-gray-300" />

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            4. Prohibited Activities
          </h2>
          <p>
            Users must not create fake profiles, engage in harassment, spamming,
            or participate in any illegal activities. Respectful and
            professional communication is expected from all users on{" "}
            <strong>DevTinder</strong>.
          </p>
        </section>

        <hr className="border-gray-300" />

        <section>
          <h2 className="text-2xl font-semibold mb-3">5. Liability</h2>
          <p>
            <strong>DevTinder</strong> is not responsible for any user-generated
            content, user interactions, or third-party services linked through
            the platform. Users are encouraged to connect responsibly and
            exercise caution when sharing personal information.
          </p>
        </section>

        <hr className="border-gray-300" />

        <section>
          <h2 className="text-2xl font-semibold mb-3">6. Contact Us</h2>
          <p>
            For any questions, feedback, or issues, contact us at{" "}
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

export default TermOfUse;
