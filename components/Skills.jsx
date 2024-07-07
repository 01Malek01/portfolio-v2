import React from "react";
import "../styles/Skills.css";
import Slider from "./Slider";
import { motion } from "framer-motion";

function Skills() {
  return (
          <>
    <section className="skills-wrapper mt-50  min-h-screen p-8">
      <div className="skills-container">
        <header className="skills-title p-5">
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          className="text-6xl font-bold text-center c-text-secondary">Skills</motion.h1>
        </header>
        <article className="skills bg-black bg-opacity-10 p-[2.5rem] rounded-lg shadow-lg">
          <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5,delay: 0.5 }}
          viewport={{ once: true }}
          className="skills-progress flex items-center justify-center">
            <Slider />
          </motion.div>
        </article>
      </div>
    </section>
    <div className="divider bold "></div>
    </>
  
  );
}

export default Skills;