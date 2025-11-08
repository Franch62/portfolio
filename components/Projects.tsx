import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "YouTube Audio Downloader",
    description: "Aplicativo em Go para baixar áudio de vídeos do YouTube.",
    techs: ["Go", "FFmpeg", "REST API"],
    link: "https://github.com/franch62/yt-audio-downloader",
  },
  {
    name: "Portfolio",
    description: "Meu site pessoal, criado com Next.js e Framer Motion.",
    techs: ["Next.js", "TailwindCSS", "Framer Motion"],
    link: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section className="flex flex-col items-center justify-center w-full px-6 py-20 md:px-20 text-zinc-100">
      <div className="w-full max-w-5xl">
        <h1 className="text-4xl font-bold mb-8 border-b border-zinc-800 pb-4 tracking-tight">
          Projetos
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.a
              key={i}
              href={project.link}
              target="_blank"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="border border-[#2b2b2c] bg-[#1e1e1f] rounded-xl p-6 flex flex-col justify-between hover:border-fuchsia-500/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-xl font-semibold text-white">
                    {project.name}
                  </h2>
                  <ExternalLink size={18} className="text-fuchsia-500" />
                </div>
                <p className="text-zinc-400 text-sm mb-4">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.techs.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 border border-fuchsia-500/30 text-fuchsia-500 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
