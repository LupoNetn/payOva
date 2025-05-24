// src/components/FancySpinner.tsx
import { motion } from "framer-motion";
import clsx from "clsx";

interface FancySpinnerProps {
  size?: "sm" | "md" | "lg";
  fullScreen?: boolean;
}

const FancySpinner: React.FC<FancySpinnerProps> = ({
  size = "md",
  fullScreen = false,
}) => {
  const sizes = {
    sm: "w-10 h-10 border-[3px]",
    md: "w-16 h-16 border-[4px]",
    lg: "w-24 h-24 border-[5px]",
  };

  const Spinner = () => (
    <div className="relative flex items-center justify-center">
      {/* Base ring (light background ring) */}
      <div
        className={clsx(
          sizes[size],
          "rounded-full border-primary/10 border-4"
        )}
      />
      
      {/* Active spinning arc */}
      <motion.div
        className={clsx(
          sizes[size],
          "absolute border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent rounded-full"
        )}
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 0.9,
          ease: "linear",
        }}
      />

      {/* Pulsing blue dot in center */}
      <motion.div
        className="absolute w-2 h-2 bg-primary rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [1, 0.7, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut",
        }}
      />
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/90 backdrop-blur-sm">
        <div className="flex flex-col items-center justify-center space-y-6 p-8 bg-white shadow-xl rounded-2xl">
          <Spinner />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-600 text-base font-medium"
          >
            Loading, please wait...
          </motion.p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center p-4">
      <Spinner />
    </div>
  );
};

export default FancySpinner;
