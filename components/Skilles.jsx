'use client';
import { motion } from "framer-motion";
import { skilles } from "@/data/skilles";
import { useState } from "react";

export default function SkillesPage() {
  const [expandedId, setExpandedId] = useState(null);

  const handleToggle = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const splitDetails = (details) => {
    return details.split(/(?=\d\.)/); // تقسيم النص عند الأرقام (1.، 2.، ...)
  };

  return (
    <div className="py-4 px-8 sm:p-6 bg-gradient-to-r ">
      <div className="text-2xl md:text-3xl font-bold text-indigo-500 mb-6 text-center">
        My Skills
      </div>

      <div className="space-y-4 sm:space-y-6 max-w-4xl mx-auto">
        {skilles.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg px-6 sm:px-8 py-4 sm:py-6 shadow-md transition-shadow duration-300"
          >
            <div className="flex flex-wrap justify-between items-center">
              <h3 className="text-gray-800 font-bold text-lg sm:text-2xl flex items-center mb-2 sm:mb-0">
                <span className="mr-2 text-indigo-600">{index + 1}.</span>
                {item.title}
              </h3>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="text-indigo-500 text-sm sm:text-base font-medium hover:underline"
                onClick={() => handleToggle(item.id)}
              >
                {expandedId === item.id ? "Show Less" : "View Details"}
              </motion.button>
            </div>

            <p className="text-gray-600 mt-2 sm:mt-4 text-sm sm:text-base leading-relaxed">
              {item.description}
            </p>

            {expandedId === item.id && (
              <div className="bg-indigo-50 rounded-lg p-4 sm:p-6 mt-3 sm:mt-4 border-l-4 border-indigo-400">
                <h4 className="text-base sm:text-lg font-semibold text-indigo-700 mb-3 sm:mb-4">
                  Detailed Achievements:
                </h4>
                <ul className="list-decimal list-inside space-y-2 sm:space-y-3 text-gray-700 leading-relaxed">
                  {splitDetails(item.fullDetails).map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start gap-2">
                      <span className="text-indigo-500 mt-1">✓</span>
                      <span className="text-sm sm:text-base">{detail.trim()}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
