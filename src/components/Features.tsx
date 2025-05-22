import React from 'react';
import { motion } from 'framer-motion';

const featureList = [
  {
    title: "Secure Payments",
    description: "Every payment is tracked with a unique ID to prevent fake receipts and ensure transparency.",
  },
  {
    title: "Easy Verification",
    description: "Class reps can quickly verify student payments through a dashboard—no more manual checks.",
  },
  {
    title: "Real-time Tracking",
    description: "Students and reps get real-time updates on payment status, ensuring clarity and confidence.",
  },
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: () => ({
    opacity: 1,
    y: 0,
    transition: {
      delay:  0.2,
      duration: 0.6,
      type: 'spring',
    },
  }),
};

const Features = () => {
  return (
    <motion.div
      className="py-10 px-4 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2
        className="text-3xl font-bold text-primary mb-8"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Features
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-6">
        {featureList.map((feature, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={fadeInUp}
            className="bg-light p-6 rounded-xl shadow-md"
          >
            <h3 className="text-xl font-semibold text-dark mb-2">{feature.title}</h3>
            <p className="text-muted">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Features;
