import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Users, Zap, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center pt-16 px-6">
        <motion.h1
          className="text-5xl sm:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Connect. Collaborate. Code. 💻
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl max-w-2xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          DevTinder helps developers connect, collaborate, and grow together —
          find teammates for projects, mentors, or coding buddies worldwide.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <button
            className="btn btn-outline btn-info hover:bg-blue-300  px-6 py-3 text-lg rounded-full shadow-lg transition-all"
            onClick={() => {
              navigate("/login");
            }}
          >
            Join the Community
          </button>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto py-20 px-6">
        {[
          {
            icon: <Users className="w-10 h-10 text-blue-400" />,
            title: "Connect with Developers",
            desc: "Find like-minded developers to collaborate on open source or freelance projects.",
          },
          {
            icon: <MessageCircle className="w-10 h-10 text-blue-400" />,
            title: "Live Chat & Networking",
            desc: "Stay connected through our real-time chat system built with Socket.io.",
          },
          {
            icon: <Zap className="w-10 h-10 text-blue-400" />,
            title: "Premium Features",
            desc: "Unlock premium features like profile boosting and advanced search via Razorpay integration.",
          },
        ].map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition-all"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="text-xl mb-2 text-black font-semibold">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* CTA Section */}
      <motion.section
        className="text-center relative py-16 bg-blue-500 text-white rounded-2xl w-11/12 left-1/24 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">
          Ready to Build Meaningful Connections?
        </h2>
        <p className="text-lg mb-8">
          Join thousands of developers on DevTinder today.
        </p>
        <button
          className="bg-white text-blue-600 hover:bg-gray-100 text-lg rounded-full px-8 py-3 shadow-md transition-all cursor-pointer"
          onClick={() => {
            navigate("/login");
          }}
        >
          Get Started Now
        </button>
      </motion.section>
    </div>
  );
};
export default Home;
