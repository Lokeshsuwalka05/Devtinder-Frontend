// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
const ShippingAndDelivery = () => {
  return (
    <motion.div
      className="max-w-4xl mx-auto px-6 py-12 leading-relaxed"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
    >
      <h1 className="text-4xl font-bold text-center mb-4 text-blue-400">
        Shipping and Delivery Policy
      </h1>
      <p className="text-sm text-gray-500 text-center mb-10">
        Last Updated: November 2025
      </p>

      <div className="space-y-8">
        <section>
          <p>
            Since <strong>DevTinder</strong> provides digital services and
            premium memberships, there is no physical product shipment involved.
            All services are delivered electronically through our platform.
          </p>
        </section>

        <hr className="border-gray-300" />

        <section>
          <h2 className="text-2xl font-semibold mb-3">1. Service Activation</h2>
          <p>
            Once the payment for a premium membership or digital feature is
            successfully completed, your account will be upgraded instantly, or
            within a few minutes, depending on system processing time.
          </p>
        </section>

        <hr className="border-gray-300" />

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            2. Delivery of Services
          </h2>
          <p>
            You will receive access to premium features directly within your{" "}
            <strong>DevTinder</strong> account dashboard. No separate email or
            download is required.
          </p>
          <p className="mt-2">
            In case of any technical issues or delays in activation, please
            contact our support team for immediate assistance.
          </p>
        </section>

        <hr className="border-gray-300" />

        <section>
          <h2 className="text-2xl font-semibold mb-3">3. Communication</h2>
          <p>
            All communication related to premium service activation, billing, or
            technical support will be sent to your registered email address.
            Please ensure your email is valid and accessible.
          </p>
        </section>

        <hr className="border-gray-300" />

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            4. Refunds and Cancellations
          </h2>
          <p>
            Please refer to our{" "}
            <a
              href="/refundAndCancellation"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Refund and Cancellation Policy
            </a>{" "}
            for more details on refund eligibility and procedures.
          </p>
        </section>

        <hr className="border-gray-300" />

        <section>
          <h2 className="text-2xl font-semibold mb-3">5. Contact Us</h2>
          <p>
            For any queries related to service delivery or payment confirmation,
            please contact us at{" "}
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

export default ShippingAndDelivery;
