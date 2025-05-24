import { motion } from "framer-motion";

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">
            Get started with PayOva in three simple steps
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: "01",
              title: "Create Account",
              description: "Sign up as a student or class representative"
            },
            {
              step: "02",
              title: "Choose Materials",
              description: "Browse and select your course materials"
            },
            {
              step: "03",
              title: "Make Payment",
              description: "Complete payment and access your materials"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-white p-6 rounded-xl shadow-lg"
            >
              <span className="absolute -top-4 -right-4 text-6xl font-bold text-primary/10">
                {item.step}
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
