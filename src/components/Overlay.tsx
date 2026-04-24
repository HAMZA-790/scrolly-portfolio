"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Overlay() {
  const { scrollYProgress } = useScroll();

  // Section 1 (0% - 20% scroll): Fades out as you scroll down
  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.25], [0, -100]);

  // Section 2 (25% - 45% scroll): Fades in, stays, fades out
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.5], [50, -50]);

  // Section 3 (55% - 85% scroll): Fades in, stays, fades out
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.7, 0.8], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.8], [50, -50]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 w-full">
      {/* Section 1 */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="fixed inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none"
      >
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white drop-shadow-2xl">
          Hamza Iftikhar
        </h1>
        <p className="mt-6 text-xl md:text-3xl text-emerald-400 tracking-widest font-light uppercase">
          Software Engineer & AI Enthusiast
        </p>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="fixed top-1/3 left-8 md:left-24 max-w-lg"
      >
        <h2 className="text-4xl md:text-6xl font-semibold leading-tight text-white drop-shadow-lg">
          I build <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
            intelligent systems.
          </span>
        </h2>
        <p className="mt-6 text-lg text-neutral-400 leading-relaxed">
          Microsoft Learn Student Ambassador focused on pushing the boundaries of AI, ML, and Cloud computing.
        </p>
      </motion.div>

      {/* Section 3 */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="fixed top-1/2 right-8 md:right-24 max-w-lg text-right"
      >
        <h2 className="text-4xl md:text-6xl font-semibold leading-tight text-white drop-shadow-lg">
          Bridging data <br />
          and <span className="italic font-light">innovation.</span>
        </h2>
      </motion.div>
    </div>
  );
}
