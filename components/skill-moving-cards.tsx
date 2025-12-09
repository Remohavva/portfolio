"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

interface SkillGroup {
  category: string;
  items: string[];
}

interface SkillMovingCardsProps {
  skills: SkillGroup[];
}

export function SkillMovingCards({ skills }: SkillMovingCardsProps) {
  // Transform skills into card format
  const skillCards = skills.map((skillGroup) => ({
    quote: skillGroup.items.join(" • "),
    name: skillGroup.category,
    title: `${skillGroup.items.length} Technologies`,
  }));

  return (
    <div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden py-4 sm:py-6 md:py-8 -mx-4 sm:mx-0">
      <InfiniteMovingCards
        items={skillCards}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
