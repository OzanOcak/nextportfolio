"use client";

import Image from "next/image";
import React, { useRef } from "react";
import logo from "../../public/logo.png";
import Link from "next/link";
import { motion } from "framer-motion";

function Navbar() {
  const ref = useRef<string | any>("");
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: "smooth" });
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("acrive");
  };
  return (
    <div
      className="w-full shadow-[4rem] h-20 lg:h-[12vh] sticky top-0 z-50
       bg-black px-4 font-bodyFont text-white "
    >
      <div
        className="max-w-[96%] h-full mx-auto py-1 font-titleFont
       flex items-center justify-between"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image src={logo} alt="logo" className="w-14 rounded-[1.2rem]" />
        </motion.div>
        <div className="hidden md:inline-flex items-center gap-5">
          <ul className="flex text-[1rem] gap-5 py-1">
            <Link href="#home" onClick={handleScroll}>
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.1 }}
                className="navlink"
              >
                Home
              </motion.li>
            </Link>
            <Link href="#about" onClick={handleScroll}>
              <motion.li
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.2 }}
                className="navlink"
              >
                About <span></span>
              </motion.li>
            </Link>
            <Link href="#projects" onClick={handleScroll}>
              <motion.li
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="navlink"
              >
                Projects
              </motion.li>
            </Link>
            <Link href="#blogs" onClick={handleScroll}>
              <motion.li
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="navlink"
              >
                Blogs
              </motion.li>
            </Link>
            <Link href="#contact" onClick={handleScroll}>
              <motion.li
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="navlink"
              >
                Contact
              </motion.li>
            </Link>
          </ul>
          <a href="/assets/resume.pdf" target="_blank">
            <motion.button
              className="text-green-500 rounded-md border border-green-600
            hover:text-green-700  duration-300 px-2 py-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Resume
            </motion.button>
          </a>
        </div>
        <div
          className="w-6 h-5 flex flex-col justify-between items-center md:hidden
        text-4xl text-green-500 cursor-pointer overflow-hidden group"
        >
          <span
            className="w-full h-[2px] bg-green-500 inline-flex transform group-hover:translate-x-2
          transition-all ease-in-out duration-300"
          ></span>
          <span
            className="w-full h-[2px] bg-green-500 inline-flex transform translate-x-3
          group-hover:translate-x-0 transition-all ease-in-out duration-300"
          ></span>
          <span
            className="w-full h-[2px] bg-green-500 inline-flex transform translate-x-1 group-hover:translate-x-3
          transition-all ease-in-out duration-300"
          ></span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
