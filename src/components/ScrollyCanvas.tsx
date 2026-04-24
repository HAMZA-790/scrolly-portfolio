"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const FRAME_COUNT = 75; // 00 to 74
const START_FRAME = 0;

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);

  // Track scroll progress of the 500vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress 0 -> 1 to frame index 0 -> FRAME_COUNT - 1
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    // Preload all images
    const preloadImages = async () => {
      const loadedImages: HTMLImageElement[] = [];
      for (let i = 0; i < FRAME_COUNT; i++) {
        const img = new Image();
        // Format: frame_00_delay-0.2s.webp
        const indexStr = i.toString().padStart(2, "0");
        img.src = `/sequence/frame_${indexStr}_delay-0.2s.webp`;
        await new Promise((resolve) => {
          img.onload = resolve;
          img.onerror = resolve; // Continue even if one fails
        });
        loadedImages.push(img);
      }
      setImages(loadedImages);
    };

    preloadImages();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || images.length === 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Resize canvas to match window
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      renderFrame(frameIndex.get());
    };

    // Render a specific frame, using object-fit: cover logic
    const renderFrame = (index: number) => {
      const img = images[Math.floor(index)];
      if (!img) return;

      const cw = canvas.width;
      const ch = canvas.height;
      const iw = img.width;
      const ih = img.height;

      const canvasRatio = cw / ch;
      const imgRatio = iw / ih;

      let drawWidth, drawHeight, offsetX, offsetY;

      // Object-fit: cover calculation
      if (canvasRatio > imgRatio) {
        drawWidth = cw;
        drawHeight = cw / imgRatio;
        offsetX = 0;
        offsetY = (ch - drawHeight) / 2;
      } else {
        drawWidth = ch * imgRatio;
        drawHeight = ch;
        offsetX = (cw - drawWidth) / 2;
        offsetY = 0;
      }

      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas(); // Initial setup

    // Subscribe to framer motion changes
    const unsubscribe = frameIndex.on("change", (latest) => {
      requestAnimationFrame(() => renderFrame(latest));
    });

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      unsubscribe();
    };
  }, [images, frameIndex]);

  // Text Opacity/Transform mappings
  const opacity1 = useTransform(scrollYProgress, [0, 0.05, 0.15, 0.2], [0, 1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [50, -50]);

  const opacity2 = useTransform(scrollYProgress, [0.25, 0.35, 0.45, 0.55], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.55], [50, -50]);

  const opacity3 = useTransform(scrollYProgress, [0.65, 0.75, 0.85, 0.95], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.65, 0.95], [50, -50]);

  return (
    <div ref={containerRef} className="h-[500vh] w-full relative">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/20 via-transparent to-[#121212]/80 pointer-events-none" />

        {/* Integrated Overlay Text */}
        <div className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center">
          
          {/* Section 1: Intro */}
          <motion.div
            style={{ opacity: opacity1, y: y1 }}
            className="flex flex-col items-center text-center px-6"
          >
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white drop-shadow-2xl">
              Hamza Iftikhar
            </h1>
            <p className="mt-6 text-xl md:text-3xl text-emerald-400 tracking-widest font-light uppercase">
              Software Engineer & AI Enthusiast
            </p>
          </motion.div>

          {/* Section 2: Building intelligent systems */}
          <motion.div
            style={{ opacity: opacity2, y: y2 }}
            className="absolute left-8 md:left-24 max-w-xl"
          >
            <h2 className="text-4xl md:text-6xl font-semibold leading-tight text-white drop-shadow-lg">
              I build <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500 font-bold">
                intelligent systems.
              </span>
            </h2>
            <p className="mt-6 text-lg md:text-xl text-neutral-300 leading-relaxed max-w-md">
              Microsoft Learn Student Ambassador focused on pushing the boundaries of AI, ML, and Cloud computing.
            </p>
          </motion.div>

          {/* Section 3: Data & Innovation */}
          <motion.div
            style={{ opacity: opacity3, y: y3 }}
            className="absolute right-8 md:right-24 text-right max-w-xl"
          >
            <h2 className="text-4xl md:text-6xl font-semibold leading-tight text-white drop-shadow-lg">
              Bridging data <br />
              and <span className="italic font-light">innovation.</span>
            </h2>
            <p className="mt-6 text-lg md:text-xl text-neutral-300 leading-relaxed ml-auto max-w-md">
              Currently expanding technical expertise in Python and C++ to solve complex real-world engineering challenges.
            </p>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
