"use client";

import React, { useState, useEffect } from "react";
import { useMotionValue, useMotionTemplate, motion } from "framer-motion";
import { generateRandomString } from "@/components/ui/evervault-card";

interface SkillItemProps {
  skill: string;
}

export function SkillItem({ skill }: SkillItemProps) {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);
  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    let str = generateRandomString(500);
    setRandomString(str);
  }, []);

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
    const str = generateRandomString(500);
    setRandomString(str);
  }

  let maskImage = useMotionTemplate`radial-gradient(150px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div
      onMouseMove={onMouseMove}
      className="group/skill relative overflow-hidden rounded-lg border border-purple-500/20 bg-gray-800/50 p-4 hover:border-purple-500/40 transition-colors"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-700 opacity-0 group-hover/skill:opacity-20 transition duration-300"
          style={style}
        />
        <motion.div
          className="absolute inset-0 opacity-0 mix-blend-overlay group-hover/skill:opacity-100"
          style={style}
        >
          <p className="absolute inset-0 text-[8px] break-words whitespace-pre-wrap text-purple-300 font-mono font-bold transition duration-300 overflow-hidden">
            {randomString}
          </p>
        </motion.div>
      </div>

      {/* Skill text */}
      <div className="relative z-10 flex items-center">
        <span className="text-purple-400 mr-2">•</span>
        <span className="text-white font-medium">{skill}</span>
      </div>
    </div>
  );
}
