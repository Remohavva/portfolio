import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function TimelineDemo() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-gray-300 md:text-sm">
            Built and launched multiple full-stack applications with modern technologies
            including Next.js, TypeScript, and cloud infrastructure.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80"
              alt="project 1"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-xl shadow-purple-500/10 border border-purple-500/20 md:h-44 lg:h-60"
            />
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
              alt="project 2"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-xl shadow-purple-500/10 border border-purple-500/20 md:h-44 lg:h-60"
            />
            <img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
              alt="project 3"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-xl shadow-purple-500/10 border border-purple-500/20 md:h-44 lg:h-60"
            />
            <img
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80"
              alt="project 4"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-xl shadow-purple-500/10 border border-purple-500/20 md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-gray-300 md:text-sm">
            Focused on learning advanced React patterns, state management, and building
            scalable applications with modern architecture.
          </p>
          <p className="mb-8 text-xs font-normal text-gray-300 md:text-sm">
            Contributed to open-source projects and built several personal projects
            to enhance my skills in full-stack development.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
              alt="analytics"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-xl shadow-purple-500/10 border border-purple-500/20 md:h-44 lg:h-60"
            />
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
              alt="dashboard"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-xl shadow-purple-500/10 border border-purple-500/20 md:h-44 lg:h-60"
            />
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80"
              alt="coding"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-xl shadow-purple-500/10 border border-purple-500/20 md:h-44 lg:h-60"
            />
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80"
              alt="development"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-xl shadow-purple-500/10 border border-purple-500/20 md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Achievements",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-gray-300 md:text-sm">
            Key milestones and accomplishments in my development journey
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-gray-300 md:text-sm mb-2">
              ✅ Launched 5+ production applications
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-300 md:text-sm mb-2">
              ✅ Mastered modern React ecosystem
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-300 md:text-sm mb-2">
              ✅ Built scalable backend APIs
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-300 md:text-sm mb-2">
              ✅ Implemented CI/CD pipelines
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-300 md:text-sm mb-2">
              ✅ Contributed to open-source projects
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
              alt="team"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-xl shadow-purple-500/10 border border-purple-500/20 md:h-44 lg:h-60"
            />
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80"
              alt="collaboration"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-xl shadow-purple-500/10 border border-purple-500/20 md:h-44 lg:h-60"
            />
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80"
              alt="workspace"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-xl shadow-purple-500/10 border border-purple-500/20 md:h-44 lg:h-60"
            />
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80"
              alt="success"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-xl shadow-purple-500/10 border border-purple-500/20 md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
