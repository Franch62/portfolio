"use client";
import { motion } from "framer-motion";
import { Laptop, Brain } from "lucide-react";
import { PiFlagBanner } from "react-icons/pi";

const stats = [
  {
    icon: <Laptop className="w-6 h-6 text-white" />,
    value: "+3 anos",
    label: "de experiência",
  },
  {
    icon: <Brain className="w-6 h-6 text-white" />,
    value: "∞",
    label: "aprendizado",
  },
  {
    icon: <PiFlagBanner className="w-6 h-6 text-white" />,
    value: "2",
    label: "idiomas",
  },
];

export default function StatsSection() {
  return (
    <section className="py-4 mx-[-2rem] text-zinc-100 w-full">
      <div className="mx-auto p-0 ">
        <div
          className="
            flex items-center justify-center gap-8 
            md:grid md:grid-cols-3 md:gap-12
          "
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-2">{stat.icon}</div>
              <span className="text-2xl font-semibold text-white">
                {stat.value}
              </span>
              <p className="text-sm text-zinc-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
