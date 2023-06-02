"use client";
import React from "react";
import { motion } from "framer-motion";

function Banner() {
  return (
    <section
      id="home"
      className="max-w-[88%] md:max-w-[80%] h-screen mx-auto py-10 md:py-24 flex flex-col gap-4 lg:gap-8 md:px-10 xl:px-4"
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg font-titleFont tracking-wide text-green-500"
      >
        Hi, My name is
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="text-4xl lg:text-6xl font-titleFont font-semibold flex flex-col"
      >
        Ozan Ocak.{" "}
      </motion.h1>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="text-4xl lg:text-6xl font-titleFont font-semibold flex flex-col text-gray-500"
      >
        I build things for the web
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="text-base md:ma-w-[650px] text-gray-300 font-medium"
      >
        I am a web developer with 5+ years of experience in JavaScript and 2
        years of experience React. I have a strong foundation in front-end &
        back-end development and am skilled in creating user-friendly and
        responsive web applications using React and its ecosystem.{" "}
      </motion.p>
      <motion.button
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="w-52 h-14 text-sm font-titleFont border border-green-500 rounded-md
       text-green-500 tracking-wide hover:bg-gray-700 duration-300"
      >
        Check out my Projects!
      </motion.button>
    </section>
  );
}

export default Banner;
