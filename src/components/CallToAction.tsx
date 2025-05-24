import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Ready to transform your course material distribution?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Join thousands of students and class representatives already using PayOva
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              to="/sign-up" 
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-primary rounded-lg transition-all duration-200 hover:bg-primary-dark shadow-md hover:shadow-lg"
            >
              Get Started Now
            </Link>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-primary border-2 border-primary rounded-lg transition-all duration-200 hover:bg-primary hover:text-white"
            >
              Contact Sales
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
