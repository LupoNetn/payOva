import { motion } from "framer-motion";
import type { Manual } from "../data/manualData";
import { Link } from "react-router-dom";

interface ManualCardProps {
  manual: Manual;
}

const ManualCard: React.FC<ManualCardProps> = ({ manual }) => {
  return (
    <motion.div
      className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-sm hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <Link to={`/manuals/${manual.id}`} className="block">
        <h2 className="text-xl font-bold text-primary mb-2">{manual.title}</h2>
        <p className="text-gray-700 mb-2 line-clamp-2">{manual.description}</p>
        <p className="text-sm text-gray-500 mb-1">
          <span className="font-semibold">Price:</span> &#8358;{manual.price}
        </p>
        <p className="text-sm text-gray-500 mb-4">
          <span className="font-semibold">Author:</span> {manual.author}
        </p>
      </Link>
      <button
        onClick={() => window.open('/purchase', '_blank', 'noopener,noreferrer')}
        className="inline-block bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-dark transition-colors"
      >
        Purchase
      </button>
    </motion.div>
  );
};

export default ManualCard;
