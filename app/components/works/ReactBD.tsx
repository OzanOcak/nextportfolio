"use client";
import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

function ReactBD() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Front End Web Developer
        <span className="text-green-500 font-medium text-sm mt-1">
          @March of Dimes Canada
        </span>
      </h3>
      <p className="text-em mt-1 font-medium text-xl font-titleFont">
        Jan 2023 - present
      </p>
      <ul>
        <li className="text-base flex gap-2 text-gray-500">
          <span>
            <TiArrowForward />
          </span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          optio animi repellat maxime, fuga eos, blanditiis et perspiciatis
          consectetur voluptatum officia sunt fugit quia quam laboriosam facilis
          culpa? Aliquid, sed.
        </li>
      </ul>
    </motion.div>
  );
}

export default ReactBD;
