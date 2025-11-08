"use client";
import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { Globe2, Code, Palette } from "lucide-react";
import { GiWeightLiftingUp, GiBurningPassion } from "react-icons/gi";
import { MdOutlineWorkOutline } from "react-icons/md";
import { FaTree } from "react-icons/fa6";
import { TechIcons } from "./TechIcons";

export const InterestAreas = () => {
  const [activeTab, setActiveTab] = useState("design");

  const tabs = [
    {
      id: "codigo",
      label: "Código e Desenvolvimento",
      icon: <Code className="w-4 h-4" />,
    },
    {
      id: "design",
      label: "Criação e Design",
      icon: <Palette className="w-4 h-4" />,
    },
    {
      id: "idiomas",
      label: "Idiomas e Cultura",
      icon: <Globe2 className="w-4 h-4" />,
    },
  ];

  return (
    <section className="py-16 px-6 my-4 w-full flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Áreas de Interesse
      </h2>
      <TechIcons />


      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 text-sm rounded-full border 
              transition-colors duration-200 ${
                activeTab === tab.id
                  ? "bg-accent-50 text-white border-accent"
                  : "border-zinc-700 text-zinc-400 hover:border-[var(--accent-color)]  hover:text-accent"
              }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Conteúdo */}
      <div className="w-full max-w-4xl border border-zinc-800 rounded-xl p-6 text-zinc-300">
        {activeTab === "design" && (
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Card 1*/}
            <a
              href="https://franch62.vercel.app"
              target="_blank"
              className="border border-zinc-700 p-4 rounded-xl hover:border-[var(--accent-color)]  transition-colors flex flex-col"
            >
              <div className="flex items-center gap-2 mb-2">
                <MdOutlineWorkOutline size={18} />
                <h3 className="font-semibold text-zinc-100">
                  Portfolio Front-end
                </h3>
              </div>
              <p className="text-sm text-zinc-400 mb-3">
                Meu primeiro portfolio, explorando design minimalista e
                interações visuais suaves.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="text-xs bg-zinc-800 px-2 py-1 rounded-md">
                  React
                </span>
                <span className="text-xs bg-zinc-800 px-2 py-1 rounded-md">
                  Tailwind
                </span>
              </div>
            </a>

            {/* Card 2 */}
            <a
              href="https://franch62.github.io/gym-landing-page/"
              target="_blank"
              className="border border-zinc-700 p-4 rounded-xl hover:border-[var(--accent-color)]  transition-colors flex flex-col"
            >
              <div className="flex items-center gap-2 mb-2">
                <GiWeightLiftingUp size={18} />
                <h3 className="font-semibold text-zinc-100">
                  Gym Landing Page
                </h3>
              </div>
              <p className="text-sm text-zinc-400 mb-3">
                Página moderna de academia desenvolvida com HTML, CSS e
                JavaScript puro para treinar responsividade e layout clean.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="text-xs bg-zinc-800 px-2 py-1 rounded-md">
                  HTML
                </span>
                <span className="text-xs bg-zinc-800 px-2 py-1 rounded-md">
                  CSS
                </span>
                <span className="text-xs bg-zinc-800 px-2 py-1 rounded-md">
                  JavaScript
                </span>
              </div>
            </a>

            {/* Card 3 */}
            <a
              href="https://github.com/franch62/QRafthive"
              target="_blank"
              className="border border-zinc-700 p-4 rounded-xl hover:border-[var(--accent-color)]  transition-colors flex flex-col"
            >
              <div className="flex items-center gap-2 mb-2">
                <FaGithub size={18} />
                <h3 className="font-semibold text-zinc-100">QRaftHive</h3>
              </div>
              <p className="text-sm text-zinc-400 mb-3">
                Projeto que fiz em colaboração com o renomado Feernandojr, a fim
                de melhorar nossos conhecimentos em desenvolvimento
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="text-xs bg-zinc-800 px-2 py-1 rounded-md">
                  Next.js
                </span>
                <span className="text-xs bg-zinc-800 px-2 py-1 rounded-md">
                  Tailwind
                </span>
                <span className="text-xs bg-zinc-800 px-2 py-1 rounded-md">
                  reacr-qr-codes
                </span>
                <span className="text-xs bg-zinc-800 px-2 py-1 rounded-md">
                  shadcn-ui
                </span>
              </div>
            </a>

            {/* Card 4 */}
            <a
              href="https://www.behance.net/"
              target="_blank"
              className="border border-zinc-700 p-4 rounded-xl hover:border-[var(--accent-color)]  transition-colors flex flex-col items-start"
            >
              <div className="flex items-center gap-2 mb-2">
                <GiBurningPassion size={20} />
                <h3 className="font-semibold text-zinc-100">
                  Passive Solutions
                </h3>
              </div>
              <p className="text-sm text-zinc-400 mb-3">
                Outro treino desenvolvido para uma idéia passageira, utilizando
                design criativo e comico com uso de waves e cores leves
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="text-xs bg-zinc-800 px-2 py-1 rounded-md">
                  Reactjs
                </span>
                <span className="text-xs bg-zinc-800 px-2 py-1 rounded-md">
                  SCSS
                </span>
                <span className="text-xs bg-zinc-800 px-2 py-1 rounded-md">
                  Typescript
                </span>
              </div>
            </a>

            {/* Card 5 - Behance */}
            <a
              href="https://franch62.github.io/EcoSwap-Project/"
              target="_blank"
              className="border border-zinc-700 p-4 rounded-xl hover:border-[var(--accent-color)]  transition-colors flex flex-col items-start"
            >
              <div className="flex items-center gap-2 mb-2">
                <FaTree size={20} />
                <h3 className="font-semibold text-zinc-100">
                  EcoSwap
                </h3>
              </div>
              <p className="text-sm text-zinc-400 mb-3">
                Landing page feita no intuito de estudar e aprimorar minhas habilidades com css(um dos primeiros projetos, baseado em templates no figma)
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="text-xs bg-zinc-800 px-2 py-1 rounded-md">
                  html
                </span>
                <span className="text-xs bg-zinc-800 px-2 py-1 rounded-md">
                  css
                </span>
              </div>
            </a>

           
          </div>
        )}

        {activeTab === "codigo" && (
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Card 1 */}
            <a
              href="https://github.com/Franch62/gym-landing-page"
              target="_blank"
              className="border border-zinc-700 p-4 rounded-xl hover:border-[var(--accent-color)]  transition-colors flex flex-col"
            >
              <div className="flex items-center gap-2 mb-2">
                <FaGithub size={18} />
                <h3 className="font-semibold text-zinc-100">
                  Gym Landing Page
                </h3>
              </div>
              <p className="text-sm text-zinc-400 mb-3">
                Estudo e treino de css + html
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="text-xs bg-zinc-800 px-2 py-1 rounded-md">
                  Html
                </span>
                <span className="text-xs bg-zinc-800 px-2 py-1 rounded-md">
                  CSS
                </span>
                <span className="text-xs bg-zinc-800 px-2 py-1 rounded-md">
                  Javascript
                </span>
              </div>
            </a>

            {/* Card 2 */}
            <a
              href="https://github.com/franch62/portfolio"
              target="_blank"
              className="border border-zinc-700 p-4 rounded-xl hover:border-[var(--accent-color)]  transition-colors flex flex-col"
            >
              <div className="flex items-center gap-2 mb-2">
                <FaGithub size={18} />
                <h3 className="font-semibold text-zinc-100">Portfolio</h3>
              </div>
              <p className="text-sm text-zinc-400 mb-3">
                Meu portfólio pessoal construído com Next.js, Tailwind e Framer
                Motion.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="text-xs bg-zinc-800 px-2 py-1 rounded-md">
                  Next.js
                </span>
                <span className="text-xs bg-zinc-800 px-2 py-1 rounded-md">
                  Tailwind
                </span>
                <span className="text-xs bg-zinc-800 px-2 py-1 rounded-md">
                  Framer Motion
                </span>
                <span className="text-xs bg-zinc-800 px-2 py-1 rounded-md">
                  shadcn-ui
                </span>
              </div>
            </a>

            {/* Card 4 */}
            <a
              href="https://github.com/Franch62/yt-downloader"
              target="_blank"
              className="border border-zinc-700 p-4 rounded-xl hover:border-[var(--accent-color)]  transition-colors flex flex-col"
            >
              <div className="flex items-center gap-2 mb-2">
                <FaGithub size={18} />
                <h3 className="font-semibold text-zinc-100">YT Downloader</h3>
              </div>
              <p className="text-sm text-zinc-400 mb-3">
                Construido visando facilitar o download de videos no youtube de
                forma rapida e eficiente.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="text-xs bg-zinc-800 px-2 py-1 rounded-md">
                  Go
                </span>
                <span className="text-xs bg-zinc-800 px-2 py-1 rounded-md">
                  Echo
                </span>
                <span className="text-xs bg-zinc-800 px-2 py-1 rounded-md">
                  Typescript
                </span>
              </div>
            </a>

            {/* Card 4 */}
            <a
              href="https://github.com/Franch62/project-delivery"
              target="_blank"
              className="border border-zinc-700 p-4 rounded-xl hover:border-[var(--accent-color)]  transition-colors flex flex-col"
            >
              <div className="flex items-center gap-2 mb-2">
                <FaGithub size={18} />
                <h3 className="font-semibold text-zinc-100">Project Delivery</h3>
              </div>
              <p className="text-sm text-zinc-400 mb-3">
                Um dos primeiros projetos feito durante a faculdade com a
                colaboração de colegas, é o frontend que integra API feita por mim
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="text-xs bg-zinc-800 px-2 py-1 rounded-md">
                  html
                </span>
                <span className="text-xs bg-zinc-800 px-2 py-1 rounded-md">
                  css
                </span>
                <span className="text-xs bg-zinc-800 px-2 py-1 rounded-md">
                  Javascript
                </span>
              </div>
            </a>

            {/* Card 5 */}
            <a
              href="https://github.com/Franch62/api-order-menu"
              target="_blank"
              className="border border-zinc-700 p-4 rounded-xl hover:border-[var(--accent-color)]  transition-colors flex flex-col"
            >
              <div className="flex items-center gap-2 mb-2">
                <FaGithub size={18} />
                <h3 className="font-semibold text-zinc-100">API Projec delivery</h3>
              </div>
              <p className="text-sm text-zinc-400 mb-3">
                Backend de um dos primeiros projetos feito durante a faculdade, uma API REST de produtos               </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="text-xs bg-zinc-800 px-2 py-1 rounded-md">
                  node
                </span>
                <span className="text-xs bg-zinc-800 px-2 py-1 rounded-md">
                  mongodb
                </span>
                <span className="text-xs bg-zinc-800 px-2 py-1 rounded-md">
                  javascript
                </span>
              </div>
            </a>

            {/* Card 6 */}
            <a
              href="https://github.com/Franch62/lc-url-shortener"
              target="_blank"
              className="border border-zinc-700 p-4 rounded-xl hover:border-[var(--accent-color)]  transition-colors flex flex-col"
            >
              <div className="flex items-center gap-2 mb-2">
                <FaGithub size={18} />
                <h3 className="font-semibold text-zinc-100">URL Shortener</h3>
              </div>
              <p className="text-sm text-zinc-400 mb-3">
                API feita baseada em um video do canal do grande Leonardo Zamariola
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="text-xs bg-zinc-800 px-2 py-1 rounded-md">
                  Go
                </span>
                <span className="text-xs bg-zinc-800 px-2 py-1 rounded-md">
                  Echo
                </span>
              </div>
            </a>
          </div>
        )}

        {activeTab === "idiomas" && (
          <div className="flex flex-col gap-4 items-start">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full border-b border-zinc-800 pb-3">
              <div>
                <h3 className="font-semibold text-zinc-100">Inglês</h3>
                <p className="text-sm text-zinc-400">
                  Nível B1 — Intermediário
                </p>
              </div>
              <button className="mt-2 sm:mt-0 px-4 py-1  text-accent rounded-full text-sm border border-[var(--accent-color)]
    bg-[color-mix(in_srgb,var(--accent-color)_20%,transparent)]
    hover:bg-[color-mix(in_srgb,var(--accent-color)_40%,transparent)]
    hover:cursor-pointer transition-colors">
                Visualizar certificado
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
