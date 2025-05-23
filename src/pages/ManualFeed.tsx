import { useUser } from "@clerk/clerk-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import manuals from "../data/manualData";
import ManualCard from "../components/ManualCard";
import { FiSearch } from "react-icons/fi";
import LoadingSpinner from "../components/LoadingSpinner";

const ManualFeed = () => {
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredManuals, setFilteredManuals] = useState(manuals);

  useEffect(() => {
    // Start loading when searchTerm changes
    setLoading(true);

    // Simulate a small delay for "loading" effect (like fetching/filtering)
    const timer = setTimeout(() => {
      const filtered = manuals.filter((manual) =>
        manual.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredManuals(filtered);
      setLoading(false);
    }, 300); // 300ms delay for UX

    // Cleanup timer if user types fast
    return () => clearTimeout(timer);
  }, [searchTerm]);

  return (
    <>
      {/* MANUAL HEADER */}
      <section className="px-2 py-10 lg:px-0 lg:py-20 max-w-5xl mx-auto">
        <div className="flex max-sm:flex-col gap-6 items-start justify-between">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1"
          >
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl font-extrabold text-primary mb-2"
            >
              Welcome, {user?.firstName || user?.fullName || "User"}!
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-gray-600 text-lg"
            >
              Browse and purchase your course manuals effortlessly.
            </motion.p>
          </motion.div>

          {/* Search Input */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="w-full max-w-sm relative"
          >
            <input
              type="text"
              placeholder="Search manuals..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all shadow-sm"
            />
            <button
              onClick={() => {
                console.log("Searching for:", searchTerm);
              }}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-primary transition-colors"
            >
              <FiSearch size={20} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* MANUALS SECTION */}
      <section className="px-2 py-10 max-w-5xl mx-auto min-h-[300px]">
        {loading ? (
          <div className="flex justify-center items-center h-48">
            {/* You can replace this with a spinner component if you have one */}
           <LoadingSpinner />
          </div>
        ) : filteredManuals.length > 0 ? (
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredManuals.map((manual, index) => (
              <ManualCard key={index} manual={manual} />
            ))}
          </motion.div>
        ) : (
          <p className="text-gray-500 col-span-full text-center">
            No manuals found.
          </p>
        )}
      </section>
    </>
  );
};

export default ManualFeed;
