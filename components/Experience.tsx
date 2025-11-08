import React from "react";

export const Experience = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center w-full px-6 py-16 md:px-20  text-zinc-100">
        <div className="flex flex-col w-full max-w-5xl">
          {/* Título */}
          <h1 className="text-4xl font-bold mb-8  border-zinc-800 pb-4 tracking-tight">
            Experiência
          </h1>

          {/* Item de experiência */}
          <div className="flex flex-col md:flex-row md:items-start justify-between border-l-2 border-accent pl-6 mb-10">

            {/* Lado esquerdo: cargo e empresa */}
            <div>
              <h2 className="text-xl font-semibold text-zinc-100">
                Backend Developer{" "}
                <span className="text-accent">@ Dolphin</span>
              </h2>
              <p className="text-zinc-400 text-sm mt-1">2023 — ATUAL</p>
            </div>

            {/* Lado direito: responsabilidades e tecnologias */}
            <div className="mt-4 md:mt-0 md:max-w-[65%]">
              <ul className="list-disc list-inside text-zinc-400 leading-relaxed text-[0.95rem] space-y-1">
                <li>
                  Desenvolvi e Trabalhei na integração de APIs RESTful
                  internas/externas com Genexus.
                </li>
                <li>
                  Realizei revisões e Refatoração de código, em equipe e
                  individualmente.
                </li>
                <li>
                  Apoiei a equipe em integrações de APIs, garantindo
                  compatibilidade com sistemas legados.
                </li>
                <li>
                  Iniciei minha jornada em Go, aprofundando meu conhecimento e
                  experiencia em Design Patterns, Clean Code e estruturas de
                  projeto.
                </li>
                <li>
                  Desenvolvi e participei da criação de microsserviços em Go
                  focados em alta perfomance.
                </li>
              </ul>

              <ul className="flex flex-wrap gap-2 mt-4">
                {["Genexus", "Go", "MySQL", "Docker"].map((tech) => (
                  <li
                    key={tech}
                    className="text-xs px-3 py-1 border border-[border-accent]/20 text-accent rounded-full"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
