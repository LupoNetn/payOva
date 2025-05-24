import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import manuals, { type Manual } from "../data/manualData";
import ManualCard from "./ManualCard";

const ManualDetails = () => {
  const [manual, setManual] = useState<Manual | null>(null);
  const [relatedManuals, setRelatedManuals] = useState<Manual[]>([]);
  const { id } = useParams<{ id: string }>();

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

  if (!manual) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        No Manual Found
      </div>
    );
  }

  return (
    <>
      <section className="w-full max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-8 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Header Section */}
          <div className="bg-primary/5 p-6 sm:p-8 lg:p-10 border-b">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary mb-4">
              {manual.title}
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl">
              {manual.description || "No description available."}
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8 p-6 sm:p-8 lg:p-10">
            {/* Details Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Course Info */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Course Code</h3>
                    <p className="text-lg font-semibold text-gray-900">{manual.courseCode || "N/A"}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Department</h3>
                    <p className="text-lg font-semibold text-gray-900">{manual.department || "N/A"}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Level</h3>
                    <p className="text-lg font-semibold text-gray-900">{manual.level || "N/A"}</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Semester</h3>
                    <p className="text-lg font-semibold text-gray-900">{manual.semester || "N/A"}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Lecturer</h3>
                    <p className="text-lg font-semibold text-gray-900">{manual.lecturer || "Not specified"}</p>
                  </div>
                </div>
              </div>

              {/* Preview Section */}
              <div className="bg-gray-100 rounded-2xl p-8 flex items-center justify-center min-h-[300px]">
                <p className="text-gray-400">Manual Preview Coming Soon</p>
              </div>
            </div>

            {/* Purchase Column */}
            <div className="lg:border-l lg:pl-8">
              <div className="bg-gray-50 rounded-2xl p-6 space-y-6">
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-1">Price</p>
                  <p className="text-3xl font-bold text-green-600">
                    ₦{manual.price.toLocaleString()}
                  </p>
                </div>

                <button className="w-full bg-primary text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary/90 transition-colors">
                  Purchase Manual
                </button>

                <div className="pt-6 border-t">
                  <h3 className="font-medium text-gray-900 mb-4">What you get:</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center gap-2">
                      <span>✓</span>
                      <span>Full course manual access</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span>✓</span>
                      <span>Printable PDF version</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span>✓</span>
                      <span>Practice questions included</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
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
            <div className="flex gap-6 overflow-x-auto hide-scrollbar pb-4">
              {relatedManuals.map((relatedManual: Manual) => (
                <Link 
                  to={`/manuals/${relatedManual.id}`} 
                  key={relatedManual.id}
                  className="flex-shrink-0 w-[340px] sm:w-[300px]"
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
