"use client";

import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Face Recognition System",
    category: "Python & Tkinter",
    description: "An automated attendance or security system developed with Python, leveraging the Tkinter library for a seamless GUI experience.",
  },
  {
    id: 2,
    title: "Currency Calculator",
    category: "C++ & OOP",
    description: "A robust financial tool built using Object-Oriented Programming (OOP) principles in C++ to handle complex exchange calculations.",
  },
  {
    id: 3,
    title: "Shopify Store Management",
    category: "E-Commerce",
    description: "Expertise in managing end-to-end Shopify store operations, digital marketing, and customer conversion optimization.",
  },
  {
    id: 4,
    title: "Customer Engagement Engine",
    category: "Work Experience",
    description: "Developed interpersonal negotiation and communication skills during 4+ months of specialized agent campaigns.",
  },
];

export default function Projects() {
  return (
    <section className="relative z-20 bg-[#121212] py-32 px-6 md:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Selected Works</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="p-8 md:p-12 h-full flex flex-col justify-end relative z-10 min-h-[300px]">
                <p className="text-sm font-medium text-emerald-400 mb-3 tracking-wider uppercase">
                  {project.category}
                </p>
                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-neutral-400 text-lg leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
