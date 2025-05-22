
import { motion } from "framer-motion";
import { FaBook, FaEye, FaShoppingCart, FaCheckCircle } from "react-icons/fa";

const steps = [
  {
    icon: <FaBook size={36} className="text-primary" />,
    title: "Reps Create Manuals",
    description: "Class reps list all available manuals on PayOva.",
  },
  {
    icon: <FaEye size={36} className="text-primary" />,
    title: "Users View Manuals",
    description: "Students browse manuals to find what they need.",
  },
  {
    icon: <FaShoppingCart size={36} className="text-primary" />,
    title: "Users Buy Manuals",
    description: "Add manuals to cart and make secure payments.",
  },
  {
    icon: <FaCheckCircle size={36} className="text-primary" />,
    title: "Reps Confirm & Deliver",
    description: "Payments are confirmed and manuals handed out.",
  },
];

// Animation variants for each step
const variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const HowItWorks = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold text-center mb-14 text-primary">
        How PayOva Works
      </h2>

      <div className="relative flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Horizontal blue connecting line on desktop */}
        <div className="hidden md:block absolute top-10 left-12 right-12 h-1 bg-blue-600 -z-10 rounded"></div>

        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center md:w-1/4 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
            variants={variants}
          >
            {/* Circle around icon */}
            <div className="relative z-10 bg-white rounded-full p-3 shadow-lg border-4 border-blue-600 mb-4">
              {step.icon}
            </div>

            {/* Mobile arc connectors except last step */}
            {index !== steps.length - 1 && (
              <div className="md:hidden absolute left-1/2 top-[4.5rem] w-8 h-8 rounded-tr-full border-r-4 border-t-4 border-blue-600 z-0" />
            )}

            <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
            <p className="text-muted max-w-xs">{step.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Final descriptive text below steps */}
      <motion.p
        className="text-center text-lg mt-14 max-w-3xl mx-auto text-primary"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        This ensures a seamless operaton, eliminates fake receipts and fake transactions.
      </motion.p>
    </div>
  );
};

export default HowItWorks;
