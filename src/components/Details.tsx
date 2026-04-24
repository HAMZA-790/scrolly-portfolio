"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Details() {
  const skills = [
    { name: "Python", level: "Experienced in GUI & Automation" },
    { name: "C++", level: "Knowledge of OOPS Concepts" },
    { name: "Shopify", level: "Store Management & Digital Marketing" },
    { name: "MS Office", level: "Proficient in all Suite Apps" },
    { name: "Typing", level: "15–40 WPM Speed" },
  ];

  const education = [
    { title: "BS Software Engineering", school: "Lahore Garrison University", year: "Present" },
    { title: "Intermediate ICS", school: "Fazaia Inter College", year: "2021–2023" },
    { title: "Secondary School", school: "Army Public School", year: "2019–2021" },
  ];

  return (
    <section className="bg-[#121212] py-32 px-6 md:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
        
        {/* Left Side: About & Education */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Profile & Education</h2>
            <p className="text-neutral-400 text-lg leading-relaxed mb-12">
              Motivated and enthusiastic Software Engineering student seeking to expand technical expertise 
              and contribute to innovative teams. Currently focused on deep diving into Python, C++, and AI.
            </p>
          </motion.div>

          <div className="space-y-8">
            {education.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l border-white/10"
              >
                <div className="absolute w-3 h-3 bg-emerald-500 rounded-full -left-[6px] top-2" />
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-emerald-400 font-medium">{item.school}</p>
                <p className="text-neutral-500 text-sm mt-1">{item.year}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side: Skills & Contact */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Technical Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
              {skills.map((skill, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-emerald-400 font-bold">{skill.name}</p>
                  <p className="text-neutral-500 text-sm">{skill.level}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-xl"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
            <div className="space-y-4 text-neutral-300">
              <div className="flex items-center gap-4">
                <span className="text-emerald-400 text-sm uppercase tracking-tighter">Phone</span>
                <p>03285198001</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-emerald-400 text-sm uppercase tracking-tighter">Email</span>
                <p>hamzaiftikhar790@gmail.com</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-emerald-400 text-sm uppercase tracking-tighter">GitHub</span>
                <p className="text-white hover:text-emerald-400 transition-colors cursor-pointer">github.com/HAMZA-790</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-emerald-400 text-sm uppercase tracking-tighter">LinkedIn</span>
                <p className="text-white hover:text-emerald-400 transition-colors cursor-pointer">linkedin.com/in/hamza-iftikhar790</p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
