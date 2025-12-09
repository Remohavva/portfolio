"use client";
import React from "react";
import { FocusCards } from "@/components/ui/focus-cards";

interface SkillGroup {
  category: string;
  items: string[];
}

interface SkillFocusCardsProps {
  skills: SkillGroup[];
}

export function SkillFocusCards({ skills }: SkillFocusCardsProps) {
  // Map skills to card format with relevant images
  const cards = skills.map((skillGroup) => ({
    title: skillGroup.category,
    src: getImageForCategory(skillGroup.category),
    items: skillGroup.items,
  }));

  return <FocusCards cards={cards} />;
}

// Helper function to get appropriate images for each category
function getImageForCategory(category: string): string {
  const images: Record<string, string> = {
    Frontend: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    Backend: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    Tools: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&q=80",
  };
  
  return images[category] || "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80";
}
