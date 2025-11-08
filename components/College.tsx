import React from "react";

export const College = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full px-6 py-20 md:px-20 text-zinc-100">
      <div className="flex flex-col w-full max-w-5xl">
        {/* Título */}
        <h1 className="text-4xl font-bold mb-10 tracking-tight">
          Formação Acadêmica
        </h1>

        {/* Bloco principal */}
        <div className="relative border-l-2 border-accent/50 pl-8 space-y-10">

          {/* Linha decorativa com o “marcador” */}
          <div className="absolute left-0 top-0 w-2 h-2 bg-[var(--accent-color)] rounded-full translate-x-[-5px]" />

          {/* Instituição atual */}
          <div className="flex flex-col md:flex-row md:justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold">
                Universidade Anhembi Morumbi (UAM)
              </h2>
              <p className="text-accent text-sm font-medium mt-1">
                Bacharelado em Sistemas de Informação
              </p>
              <p className="text-zinc-400 text-sm mt-1">2025 — 2026 (em andamento)</p>
            </div>

            <p className="text-zinc-400 md:max-w-[60%] leading-relaxed text-[0.95rem]">
              Atualmente cursando o último ciclo do bacharelado, com foco em
              desenvolvimento backend, arquitetura de software e integração de
              sistemas modernos. O curso aprofunda fundamentos em IA, engenharia e
              boas práticas de programação.
            </p>
          </div>

          {/* Transição / marcador intermediário */}
          <div className="absolute left-0 top-[50%] w-2 h-2 bg-[var(--accent-color)] rounded-full translate-x-[-5px]" />

          {/* Instituição anterior */}
          <div className="flex flex-col md:flex-row md:justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold">UNIFEB — Barretos</h2>
              <p className="text-accent text-sm font-medium mt-1">
                Bacharelado em Sistemas de Informação
              </p>
              <p className="text-zinc-400 text-sm mt-1">2023 — 2025</p>
            </div>

            <p className="text-zinc-400 md:max-w-[60%] leading-relaxed text-[0.95rem]">
              Iniciei minha jornada universitária no UNIFEB, onde desenvolvi a
              base em lógica de programação, estruturas de dados, engenharia de
              software e devops. Transferi para a UAM em 2025 para ampliar minha
              experiência acadêmica e prática.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
