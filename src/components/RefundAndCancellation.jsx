// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
const RefundPolicy = () => {
  return (
    <motion.div
      className="max-w-4xl mx-auto px-6 py-12 leading-relaxed"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
    >
      <h1 className="text-4xl font-bold text-center mb-4 text-blue-400">
        Refund Policy
      </h1>
      <p className="text-sm text-gray-500 text-center mb-10">
        Last Updated: November 2025
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-3">Subscription Plans</h2>
          <p>
            All payments made for premium memberships are{" "}
            <strong>non-refundable</strong> once the service has been activated.
            Please review your plan details before proceeding with payment.
          </p>
        </section>

        <hr className="border-gray-300" />

        <section>
          <h2 className="text-2xl font-semibold mb-3">Cancellation</h2>
          <p>
            You may cancel your subscription at any time. After cancellation,
            your premium access will remain active until the end of the current
            billing cycle. No partial refunds will be issued for unused days.
          </p>
        </section>

        <hr className="border-gray-300" />

        <section>
          <h2 className="text-2xl font-semibold mb-3">Technical Issues</h2>
          <p>
            In case of accidental double payments or verified technical errors,
            eligible refunds will be processed within{" "}
            <strong>7 working days</strong> of confirmation. Our team may
            request supporting details to validate the issue.
          </p>
        </section>

        <hr className="border-gray-300" />

        <section>
          <h2 className="text-2xl font-semibold mb-3">Contact</h2>
          <p>
            For refund-related queries or issues, please contact us at{" "}
            <a
              href="mailto:support@thedevtinder.live"
              className="text-blue-600 underline hover:text-blue-800"
            >
              support@thedevtinder.live
            </a>
            . Our support team will respond as soon as possible.
          </p>
        </section>
      </div>
      <footer className="mt-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} DevTinder. All Rights Reserved.
      </footer>
    </motion.div>
  );
};

export default RefundPolicy;
