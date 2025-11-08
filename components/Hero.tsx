import React from "react";
import { Profile } from "@/components/Profile";
import StatsSection from "@/components/StatsSection";
import { LuDownload } from "react-icons/lu";

export const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full px-6 md:px-20 py-16 text-zinc-100">
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between w-full max-w-5xl gap-12">
        <div className="flex flex-col items-center md:items-start justify-center flex-1 text-center md:text-left">
          <h1 className="text-[2.6rem] md:text-[3rem] font-extrabold tracking-tighter leading-tight">
            Hello World,
            <br /> i'm <span className="text-accent">Francis</span>
          </h1>

          <p className="mt-4 text-zinc-400 text-[1rem] leading-relaxed max-w-lg">
            Desenvolvedor de Software, especialista em resolução de problemas e
            planejamento criativo e estrutural de projetos voltados a Web e
            Mobile
          </p>

          <button
            className="
    p-2 px-6 flex mt-6 gap-2
    border border-[var(--accent-color)]
    bg-[color-mix(in_srgb,var(--accent-color)_20%,transparent)]
    hover:bg-[color-mix(in_srgb,var(--accent-color)_40%,transparent)]
    hover:cursor-pointer
    rounded-3xl transition-colors md:self-start
  "
          >
            <LuDownload size={20} /> Baixar CV
          </button>

          <div className="w-full mt-8">
            <StatsSection />
          </div>
        </div>

        <div className="flex justify-center md:justify-end w-full md:w-auto">
          <Profile />
        </div>
      </div>
    </section>
  );
};
