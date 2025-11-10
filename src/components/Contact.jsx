// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

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
            Thank you for your interest in <strong>DevTinder</strong>. We value
            your feedback, queries, and partnership opportunities. Our team is
            always happy to assist you with any questions related to our
            services, policies, or technical issues.
          </p>
        </section>

        <hr className="border-gray-300" />

        <section>
          <h2 className="text-2xl font-semibold mb-3">1. General Inquiries</h2>
          <p>
            For any questions related to account access, platform usage, or
            technical support, please reach out to us through the details below.
          </p>
        </section>

        <hr className="border-gray-300" />

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            2. Business & Partnership
          </h2>
          <p>
            Interested in partnering with <strong>DevTinder</strong> or
            exploring business opportunities? We welcome collaborations with
            organizations, developers, and technology communities. Please email
            us with your proposal, and our team will get in touch shortly.
          </p>
        </section>

        <hr className="border-gray-300" />

        <section>
          <h2 className="text-2xl font-semibold mb-3">3. Contact Details</h2>
          <p>
            <strong>📧 Email:</strong>{" "}
            <a
              href="mailto:support@thedevtinder.live"
              className="text-blue-600 underline hover:text-blue-800"
            >
              support@thedevtinder.live
            </a>
          </p>
          <p>
            <strong>📞 Phone:</strong> +91-9549105281
          </p>
          <p>
            <strong>📍 Location:</strong> Bhilwara, Rajasthan, India
          </p>
          <p>
            <strong>🕓 Office Hours:</strong> Monday to Saturday, 10 AM – 6 PM
            (IST)
          </p>
        </section>

        <hr className="border-gray-300" />

        <section>
          <h2 className="text-2xl font-semibold mb-3">4. Response Time</h2>
          <p>
            We strive to respond to all queries within{" "}
            <strong>24–48 business hours</strong>. During weekends or holidays,
            responses may take a little longer, but rest assured that your query
            will be handled promptly.
          </p>
        </section>

        <hr className="border-gray-300" />

        <section>
          <h2 className="text-2xl font-semibold mb-3">5. Social Media</h2>
          <p>
            Stay connected with us for updates, announcements, and community
            discussions through our social channels.
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <a
                href="https://x.com/LokeshSuwalka05"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Lokeshsuwalka05"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/lokeshsuwalka05/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </section>
      </div>

      <footer className="mt-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} DevTinder. All Rights Reserved.
      </footer>
    </motion.div>
  );
};

export default Contact;
