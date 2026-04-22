import { Projects } from "../data/projects";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Projects;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      className="group premium-project-card-v2 relative overflow-hidden rounded-3xl aspect-4/5 sm:aspect-square lg:aspect-4/5"
      whileHover="hover"
      initial="initial"
    >
      <Image
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        src={project.image}
        width={1100}
        height={1100}
      />

      {/* 🔥 FIX 1: Gradient Overlay to darken the background only where text exists */}
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-black/60 opacity-100 transition-opacity"></div>

      <div className="card-content relative z-10 flex flex-col justify-between h-full p-6">
        <motion.div
          className="space-y-2"
          variants={{
            initial: { y: 0 },
            hover: { y: -5 },
          }}
          transition={{ duration: 0.3 }}
        >
          {/* 🔥 FIX 2: Darkened background for title & Shadow */}
          <h3
            className="px-5 py-2 rounded-2xl font-headline font-bold text-2xl 
                     bg-black/40 backdrop-blur-xl border border-white/10 
                     text-white tracking-widest uppercase drop-shadow-lg"
          >
            {project.title}
          </h3>
        </motion.div>

        <motion.div
          className="space-y-4"
          variants={{
            initial: { y: 0, opacity: 1 }, // Make visible by default
            hover: { y: -5 }, // Add a subtle lift on hover
          }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 
                       text-[10px] font-black text-white uppercase tracking-widest"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* 🔥 FIX 3: Consistent high-contrast button */}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 rounded-xl font-headline font-bold flex items-center justify-center gap-2 
                   bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 
                   text-[14px] text-white tracking-widest transition-all"
          >
            View Project
            <span className="material-symbols-outlined text-base">
              arrow_outward
            </span>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}
