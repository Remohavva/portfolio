"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export default function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-gray-900 border border-purple-500/30 sm:rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/20"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-white"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-purple-300 text-sm"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-purple-600 hover:bg-purple-700 text-white transition-colors"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-gray-300 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-gray-800/50 rounded-xl cursor-pointer transition-colors border border-transparent hover:border-purple-500/30"
          >
            <div className="flex gap-4 flex-col md:flex-row ">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-white text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-purple-300 text-sm text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-purple-600 hover:bg-purple-700 text-white mt-4 md:mt-0 transition-colors"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Full Stack Web Application",
    title: "E-Commerce Platform",
    src: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    ctaText: "View",
    ctaLink: "https://github.com/yourusername/ecommerce",
    content: () => {
      return (
        <p>
          A comprehensive e-commerce platform built with Next.js, TypeScript, and Prisma. 
          Features include user authentication, product management, shopping cart functionality, 
          and Stripe payment integration. <br /> <br /> 
          The application uses PostgreSQL for data persistence and implements server-side 
          rendering for optimal performance. Includes admin dashboard for managing products, 
          orders, and user accounts with real-time analytics.
        </p>
      );
    },
  },
  {
    description: "Real-time Collaboration Tool",
    title: "Task Management App",
    src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    ctaText: "View",
    ctaLink: "https://github.com/yourusername/task-manager",
    content: () => {
      return (
        <p>
          A collaborative task management application with real-time updates powered by Socket.io. 
          Built with React, Node.js, and MongoDB, featuring drag-and-drop functionality for 
          intuitive task organization. <br /> <br /> 
          Team members can create projects, assign tasks, set deadlines, and receive instant 
          notifications. Includes Kanban board view, calendar integration, and detailed 
          analytics for project tracking and team productivity insights.
        </p>
      );
    },
  },
  {
    description: "AI-Powered Application",
    title: "Smart Content Generator",
    src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    ctaText: "View",
    ctaLink: "https://github.com/yourusername/ai-content",
    content: () => {
      return (
        <p>
          An AI-powered content generation tool leveraging OpenAI's GPT models to create 
          high-quality written content. Built with Next.js 14, featuring a modern UI with 
          real-time preview and editing capabilities. <br /> <br /> 
          Supports multiple content types including blog posts, social media captions, 
          product descriptions, and marketing copy. Includes tone adjustment, SEO optimization 
          suggestions, and content history with version control.
        </p>
      );
    },
  },
  {
    description: "Mobile-First Progressive Web App",
    title: "Fitness Tracking App",
    src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
    ctaText: "View",
    ctaLink: "https://github.com/yourusername/fitness-tracker",
    content: () => {
      return (
        <p>
          A progressive web application for tracking fitness goals, workouts, and nutrition. 
          Built with React Native Web and Firebase, offering offline functionality and 
          cross-platform compatibility. <br /> <br /> 
          Features include workout logging, progress tracking with charts, meal planning, 
          calorie counting, and social features for sharing achievements. Integrates with 
          popular fitness APIs and wearable devices for comprehensive health monitoring.
        </p>
      );
    },
  },
  {
    description: "Data Visualization Dashboard",
    title: "Analytics Platform",
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    ctaText: "View",
    ctaLink: "https://github.com/yourusername/analytics-dashboard",
    content: () => {
      return (
        <p>
          A comprehensive analytics dashboard for visualizing complex data sets with 
          interactive charts and graphs. Built using React, D3.js, and Chart.js with 
          a focus on performance and user experience. <br /> <br /> 
          Supports real-time data streaming, custom report generation, and export 
          functionality. Features include customizable widgets, multiple data source 
          integrations, and role-based access control for team collaboration.
        </p>
      );
    },
  },
];
