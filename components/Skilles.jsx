import { motion } from "framer-motion";
import { FaReact, FaRocket, FaSync, FaWifi, FaPaintBrush, FaVideo, FaBrain } from "react-icons/fa";

const skills = [
  { name: "React.js", icon: <FaReact />, details: "Building modern, interactive UIs" },
  { name: "Next.js", icon: <FaRocket />, details: "High-performance web development" },
  { name: "Redux", icon: <FaSync />, details: "State management made simple" },
  { name: "React Query", icon: <FaWifi />, details: "Data fetching and caching" },
  { name: "Tailwind CSS", icon: <FaPaintBrush />, details: "Responsive, utility-first CSS" },
  { name: "Framer Motion", icon: <FaVideo />, details: "Beautiful, smooth animations" },
  { name: "Problem Solving", icon: <FaBrain />, details: "Algorithmic thinking & coding challenges" },
];

export default function MySkills() {
  return (
    <>
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-mainColor mb-6 text-center">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-4 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow "
      
            >
              <div className="flex flex-col items-center text-center">
                <div className="text-3xl text-mainColor mb-4">{skill.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{skill.name}</h3>
                <p className="text-gray-600 text-sm">{skill.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
