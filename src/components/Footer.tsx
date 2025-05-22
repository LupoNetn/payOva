
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="bg-primary text-light py-8 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <p className="text-sm max-w-md mx-auto">
        &copy; {new Date().getFullYear()} PayOva. All rights reserved.
      </p>
      <p className="text-md mt-2 text-muted">
        Secure and seamless manual sales for class reps and students.
      </p>
    </motion.footer>
  );
};

export default Footer;
