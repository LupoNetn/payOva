
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import CallToAction from "../components/CallToAction";

const heroContent = [
  {
    headline: "Streamline Course Manual Sales with PayOva",
    subheading:
      "A secure platform for class representatives to manage manual sales and payments, making student purchases seamless and verifiable.",
  },
];

const Home = () => {
  return (
    <>
      <section>
        <div className="min-h-[80vh] flex flex-col justify-center items-center px-4 text-center gap-6">
          {heroContent.map((item, index) => (
            <motion.div
              key={index}
              className="w-full max-w-3xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h1
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary mb-4 leading-tight text-balance"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                {item.headline}
              </motion.h1>
              <motion.p
                className="text-base sm:text-lg lg:text-xl text-muted leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                {item.subheading}
              </motion.p>
            </motion.div>
          ))}
          <motion.button
                 className="bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-primary-dark transition-colors"
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.3, duration: 0.5 }}
                 viewport={{ once: true }}
               >
                 <Link to='/sign-in'>Get Started</Link>
               </motion.button>
        </div>
      </section>
      
      {/* Features Section */}
      <section>
        <Features />
      </section>
      
      {/* How It Works Section */}
      <section>
        <HowItWorks />
      </section>

      {/* Call To Action */}
      <section>
        <CallToAction />
      </section>
    </>
  );
};

export default Home;
