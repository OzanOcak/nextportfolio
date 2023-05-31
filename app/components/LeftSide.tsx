"use client";
import { FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";

function LeftSide() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="w-full  h-full flex flex-col items-center justify-end gap-4  text-white"
    >
      <div className="flex flex-col gap-4">
        <a href="https://github.com/OzanOcak" target="_blank">
          <span
            className="w-10 h-10 text-xl bg-gray-800 rounded-full inline-flex items-center
          justify-center hover:text-green-500 cursor-point hover:-translate-y-2 transition-all duration-300"
          >
            <FiGithub />
          </span>
        </a>
        <a href="https://github.com/OzanOcak" target="_blank">
          <span
            className="w-10 h-10 text-xl bg-gray-800 rounded-full inline-flex items-center
          justify-center hover:text-green-500 cursor-point hover:-translate-y-2 transition-all duration-300"
          >
            <FiGithub />
          </span>
        </a>
        <a href="https://github.com/OzanOcak" target="_blank">
          <span
            className="w-10 h-10 text-xl bg-gray-800 rounded-full inline-flex items-center
          justify-center hover:text-green-500 cursor-point hover:-translate-y-2 transition-all duration-300"
          >
            <FiGithub />
          </span>
        </a>
        <a href="https://github.com/OzanOcak" target="_blank">
          <span
            className="w-10 h-10 text-xl bg-gray-800 rounded-full inline-flex items-center
          justify-center hover:text-green-500 cursor-point hover:-translate-y-2 transition-all duration-300"
          >
            <FiGithub />
          </span>
        </a>
      </div>
      <div className="w-[2px] h-32 bg-gray-500"></div>
    </motion.div>
  );
}

export default LeftSide;
