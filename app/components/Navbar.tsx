"use client";

import Image from "next/image";
import React from "react";
import logo from "../../public/logo.png";
import Link from "next/link";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <div
      className="w-full shadow-[4rem] h-20 lg:h-[12vh] sticky top-0 z-50
       bg-black px-4 font-bodyFont text-white "
    >
      <div
        className="max-w-[1000px] h-full mx-auto py-1 font-titleFont
       flex items-center justify-between"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image src={logo} alt="logo" className="w-14 rounded-[1.2rem]" />
        </motion.div>
        <div>
          <ul className="flex text-[1rem] gap-7">
            <Link href="#home">
              <li className="navlink">Home</li>
            </Link>
            <Link href="#about">
              <li className="navlink">About</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
