import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-primary mb-6">
            About PayOva
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Revolutionizing access to academic materials for Nigerian students
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Our Mission",
              description:
                "To make academic resources accessible and affordable for every student in Nigeria.",
              icon: "🎯",
            },
            {
              title: "Our Vision",
              description:
                "To become the leading digital platform for academic resources in Africa.",
              icon: "👁️",
            },
            {
              title: "Our Values",
              description:
                "Accessibility, affordability, and quality in academic materials.",
              icon: "⭐",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <span className="text-4xl mb-4 block">{item.icon}</span>
              <h3 className="text-xl font-bold text-primary mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white p-8 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-bold text-primary mb-6">Why Choose PayOva?</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "Instant access to course materials",
              "Affordable pricing for students",
              "Quality-assured content",
              "24/7 digital availability",
              "Secure payment system",
              "Regular content updates",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="text-green-500">✓</span>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;