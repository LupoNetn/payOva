import { useParams, Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import manuals, { type Manual } from "../data/manualData";
import ManualCard from "./ManualCard";
// import { Manual } from "../types/manual";

const ManualDetails = () => {
  const [manual, setManual] = useState<any | null>(null);
  const [relatedManuals, setRelatedManuals] = useState<any>([]);
  const { id } = useParams<{ id: string }>();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const foundManual = manuals.find((item) => item.id === id);
    if (foundManual) {
      setManual(foundManual);
      const getRelatedManuals = manuals.filter(
        (item) =>
          item.id !== id && 
          item.level === foundManual.level
      );
      setRelatedManuals(getRelatedManuals);
    }
  }, [id]);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || !relatedManuals.length) return;

    const scrollWidth = scrollContainer.scrollWidth;
    const clientWidth = scrollContainer.clientWidth;
    let scrollPos = 0;
    let direction = 1;
    const SCROLL_SPEED = 1;

    const startScrolling = () => {
      return setInterval(() => {
        if (scrollPos >= scrollWidth - clientWidth) {
          scrollPos = scrollWidth - clientWidth;
          direction = -1;
        } else if (scrollPos <= 0) {
          scrollPos = 0;
          direction = 1;
        }
        
        scrollPos += SCROLL_SPEED * direction;
        scrollContainer.scrollTo({ left: scrollPos });
      }, 20);
    };

    let scrollInterval = startScrolling();

    // Pause animation on hover
    const handleMouseEnter = () => {
      clearInterval(scrollInterval);
    };

    const handleMouseLeave = () => {
      scrollInterval = startScrolling();
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearInterval(scrollInterval);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [relatedManuals]);

  if (!manual) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        No Manual Found
      </div>
    );
  }

  return (
    <>
      <section className="w-full max-w-5xl mx-auto px-4 sm:px-20 md:px-10 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-5 sm:p-8 lg:p-10 w-full grid md:grid-cols-2 gap-8"
        >
          {/* Left Side */}
          <div className="space-y-4">
            <h1 className="text-3xl font-extrabold text-primary">
              {manual.title}
            </h1>
            <p className="text-gray-600 text-lg">
              {manual.description || "No description available."}
            </p>

            <div className="mt-6 space-y-2">
              <p>
                <span className="font-semibold">Course Code:</span>{" "}
                {manual.courseCode || "N/A"}
              </p>
              <p>
                <span className="font-semibold">Department:</span>{" "}
                {manual.department || "N/A"}
              </p>
              <p>
                <span className="font-semibold">Semester:</span>{" "}
                {manual.semester || "N/A"}
              </p>
              <p>
                <span className="font-semibold">Lecturer:</span>{" "}
                {manual.lecturer || "Not specified"}
              </p>
              <p>
                <span className="font-semibold">Price:</span>{" "}
                <span className="text-lg font-bold text-green-600">
                  ₦{manual.price.toLocaleString()}
                </span>
              </p>
            </div>

            <button className="mt-6 inline-block bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition">
              Purchase Manual
            </button>
          </div>

          {/* Right Side */}
          <div className="w-full h-64 sm:h-80 md:h-full rounded-xl bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
            <span>Manual Preview Coming Soon</span>
          </div>
        </motion.div>
      </section>
      
      {/* Related Manuals Section */}
      {relatedManuals.length > 0 && (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-20 md:px-10 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-primary mb-6">Related Manuals</h2>
            <div 
              ref={scrollRef}
              className="flex gap-6 overflow-x-hidden scroll-smooth hide-scrollbar relative"
            >
              {relatedManuals.map((relatedManual: Manual) => (
                <Link 
                  to={`/manuals/${relatedManual.id}`} 
                  key={relatedManual.id}
                  className="flex-shrink-0 w-[300px]"
                >
                  <ManualCard manual={relatedManual} />
                </Link>
              ))}
            </div>
          </motion.div>
        </section>
      )}
    </>
  );
};

export default ManualDetails;
