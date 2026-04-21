import { Projects } from "../data/projects";
// import Image from "next/image";

interface ProjectCardProps {
  project: Projects;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group premium-project-card-v2">
      <img
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
        src={project.image}
      />
      <div className="glass-overlay"></div>
      <div className="card-content">
        <div className="space-y-2">
          <h3 className="text-3xl font-headline font-bold text-white tracking-tight group-hover:text-primary transition-colors">
            {project.title}
          </h3>
        </div>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[9px] font-bold text-white/80 uppercase tracking-widest"
              >
                {tech}
              </span>
            ))}
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="premium-btn-v2 px-3 py-1 rounded-full font-headline font-bold text-sm flex items-center justify-center gap-2 group/btn bg-white/10 backdrop-blur-md border border-white/10 text-[9px]  text-white/80 tracking-widest"
          >
            View Project
            <span className="material-symbols-outlined text-base group-hover/btn:translate-x-1 transition-transform">
              arrow_outward
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
