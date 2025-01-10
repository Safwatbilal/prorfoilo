import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-black my-10">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://github.com/Safwatbilal"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2  hover:text-mainColor transition"
          >
            <FaGithub className="text-2xl" />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/safwat-bilal-476006231?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2  hover:text-mainColorgit transition"
          >
            <FaLinkedin className="text-2xl" />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* حقوق النشر */}
        <p className=" text-sm">
          &copy; {new Date().getFullYear()} Mohammad Safwat Bilal
        </p>
      </div>
    </footer>
  );
}
