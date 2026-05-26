import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string;
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative rounded-2xl bg-[#1c1c1c] border border-orange-soft overflow-hidden glow-orange-hover"
    >
      <div className="h-1 bg-gradient-orange" />
      <div className="p-6 flex flex-col h-full">
        <h3 className="font-display text-xl font-bold text-foreground">
          {project.title}
        </h3>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-orange-soft"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 pt-5 border-t border-orange-soft flex items-center gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub repository"
            className="w-9 h-9 rounded-lg border border-orange-soft flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
          >
            <Github size={16} />
          </a>
          {/* <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            aria-label="Live demo"
            className="w-9 h-9 rounded-lg border border-orange-soft flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
          >
            <ExternalLink size={16} />
          </a> */}
        </div>
      </div>
    </motion.article>
  );
}
