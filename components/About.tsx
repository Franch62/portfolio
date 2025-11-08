"use client";
import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full px-6 py-20 md:px-20 text-zinc-100">
      <div className="w-full max-w-5xl">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-4xl font-bold mb-8 pb-4 tracking-tight"
        >
          Sobre
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-zinc-400 leading-relaxed text-[1rem] md:text-[1.05rem] max-w-4xl"
        >
          Me chamo{" "}
          <span className="text-accent font-semibold">Francisco</span>,
          iniciei minha carreira na tecnologia com o objetivo de aprimorar meus
          conhecimentos e aplicar minha criatividade em um mundo virtual onde
          tudo é possível.
          <br />
          <br />
          Em <span className="text-accent font-semibold">2023</span>{" "}
          conquistei meu primeiro emprego na{" "}
          <span className="text-accent">Dolphin</span>, onde tenho a
          oportunidade de evoluir como desenvolvedor — aprendendo, colaborando
          em equipe e aplicando novas ferramentas no dia a dia.
          <br />
          <br />
          Embora atue principalmente como{" "}
          <span className="text-accent font-semibold">
            desenvolvedor backend
          </span>
          , sou apaixonado por projetos visuais — como{" "}
          <span className="text-accent">edição de vídeo</span>,{" "}
          <span className="text-accent">design</span> e{" "}
          <span className="text-accent">desenvolvimento front-end</span> —
          áreas que exploro constantemente para expandir minha visão criativa.
          <br />
          <br />
          Desde o início da minha carreira também venho me dedicando ao estudo
          de
          <span className="text-accent"> idiomas estrangeiros</span>,
          buscando tanto o aprendizado cultural quanto o networking
          internacional. Atualmente possuo nível{" "}
          <span className="text-accent">B1 (intermediário) em inglês</span>{" "}
          e pratico <span className="text-accent">japonês</span> no meu
          tempo livre.
        </motion.p>
      </div>
    </section>
  );
};
