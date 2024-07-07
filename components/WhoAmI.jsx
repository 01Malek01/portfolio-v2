"use client";
import React from "react";
import { motion } from "framer-motion";
import "../styles/WhoAmI.css";

function WhoAmI() {
  return (
    <section className="wai-wrapper md:p-10 rounded  min-h-screen flex items-center ">
      <div className="wai-container flex flex-col md:flex-row md:justify-between  bg-black bg-opacity-10 w-full rounded-lg shadow-lg gap-5 ">
        <motion.div
          initial={{ y: -70 }}
          animate={{ y: 0 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="wai-right md:flex hidden order-2 flex-1 mt-[-4rem]  flex-col gap-4 text-[4rem] outline items-center rounded-lg w-fit outline-[#FFD700] text-slate-200 right-0 "
        >

          <motion.div
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            className=" md:flex hidden order-2 flex-1 p-2 flex-col gap-4 mt-3 text-[4rem] outline items-center rounded-lg w-fit outline-[#FFD700] text-slate-200 right-0 "

          >
            {[' Innovation', ' Precision', ' Versatility'].map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, delay: index * 0.7 }}
                className="word"
              >
              {word}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <motion.article
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="w-[80vw] wai-text wai-right flex flex-col flex-wrap  order-1 md:w-[50%] ml-10 flex-1 mt-[4rem]"
        >
          <motion.header
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            <h2 className="md:text-[3rem] text-[2rem] font-bold text-slate-200">I'm Malek</h2>
          </motion.header>
          <motion.p
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}

            className="md:text-[1.1rem] text-[1rem] md:p-5 text-slate-200 text-start py-4">
            As a passionate full-stack developer with a strong focus on front-end technologies, I create responsive and engaging user interfaces. With solid back-end skills in Node.js, Express, and MongoDB, I build robust, scalable, and efficient full-stack applications. I thrive in collaborative environments, contributing my skills and learning from others to deliver exceptional results. My goal is to stay updated with the latest technologies and deliver cutting-edge solutions.
          </motion.p>
        </motion.article>
      </div>
    </section>
  );
}

export default WhoAmI;
