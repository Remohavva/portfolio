"use client";

import React from "react";
import { Icon } from "@/components/ui/evervault-card";
import { SkillItem } from "@/components/skill-item";

interface SkillCardProps {
  category: string;
  items: string[];
}

export function SkillCard({ category, items }: SkillCardProps) {
  return (
    <div className="border border-purple-500/20 flex flex-col w-full p-6 relative rounded-xl bg-gray-900/50 backdrop-blur-sm">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-purple-400" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-purple-400" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-purple-400" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-purple-400" />
      
      <h3 className="text-2xl font-bold mb-6 text-white text-center">{category}</h3>
      
      <div className="grid grid-cols-1 gap-4">
        {items.map((skill) => (
          <SkillItem key={skill} skill={skill} />
        ))}
      </div>
    </div>
  );
}
