"use client";

import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const COLORS = [
  { name: "Fuchsia", value: "#d946ef" },
  { name: "Lavanda", value: "#a78bfa" },
  { name: "Azul", value: "#60a5fa" },
  { name: "Turquesa", value: "#2dd4bf" },
  { name: "Âmbar", value: "#fbbf24" },
  { name: "Rosa", value: "#f9a8d4" },
];

export default function ColorSwitcher() {
  const [color, setColor] = useState("#a78bfa");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("accentColor");
    const initial = saved || color;
    document.documentElement.style.setProperty("--accent-color", initial);
    if (saved) setColor(saved);
  }, []);

  const handleChange = (newColor: string) => {
    document.documentElement.style.setProperty("--accent-color", newColor);
    localStorage.setItem("accentColor", newColor);
    setColor(newColor);
    setOpen(false);
  };

  return (
    <div className="relative">
      {/* Botão principal */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 bg-[#1e1e1f] px-3 py-2 rounded-full shadow-md border border-accent hover:shadow-lg transition-all"
      >
        <div
          className="w-5 h-5 rounded-full border border-white/40"
          style={{ backgroundColor: color }}
        ></div>
        {open ? (
          <ChevronUp size={16} className="text-white/60" />
        ) : (
          <ChevronDown size={16} className="text-white/60" />
        )}
      </button>

      {/* Dropdown de cores */}
      {open && (
        <div className="absolute right-0 mt-2 bg-[#1e1e1f] border border-zinc-700 rounded-xl p-2 shadow-xl flex gap-2">
          {COLORS.map((c) => (
            <button
              key={c.value}
              onClick={() => handleChange(c.value)}
              title={c.name}
              className={`w-6 h-6 rounded-full border-2 transition-all ${
                color === c.value
                  ? "scale-110 border-white"
                  : "border-transparent"
              }`}
              style={{ backgroundColor: c.value }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
