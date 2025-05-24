import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import CallToAction from "../components/CallToAction";

const Home = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-dark/5 to-transparent">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="relative min-h-[90vh] flex flex-col justify-center">
          <div className="container mx-auto px-4 py-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto space-y-6"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
                Revolutionizing Course Material Distribution
              </h1>

              <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                Streamline your course material distribution with our secure, efficient platform designed for students and class representatives.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link 
                  to="/sign-up" 
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-primary rounded-xl transition-all duration-300 hover:bg-primary-dark hover:scale-105 shadow-md hover:shadow-xl w-full sm:w-auto"
                >
                  Get Started Now
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </Link>
                <Link 
                  to="/manuals" 
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-primary border-2 border-primary rounded-xl transition-all duration-300 hover:bg-primary hover:text-white hover:scale-105 w-full sm:w-auto"
                >
                  Browse Manuals
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Features />
      <HowItWorks />
      <CallToAction />
    </>
  );
};

export default Home;
