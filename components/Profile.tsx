"use client";
import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { motion, AnimatePresence } from "framer-motion";

export const Profile = () => {
  const [expanded, setExpanded] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-[#1e1e1f] border border-[#2b2b2c] rounded-xl w-[300px] flex flex-col items-center justify-between transition-all duration-300 overflow-hidden">
      <div
        className={`flex ${
          isDesktop
            ? "flex-col items-center mt-6"
            : "flex-row items-center justify-center mt-4 gap-3"
        }`}
      >
        <Stack direction="row" spacing={2}>
          <Avatar
            alt="FrancisBoy"
            src="/mobprofile.png"
            sx={{
              width: isDesktop ? 120 : 56,
              height: isDesktop ? 120 : 56,
            }}
          />
        </Stack>
        <span className="rounded-[12px] p-2 mt-4 bg-[#2b2b2c] text-[.8rem] font-bold text-zinc-200">
          Software Developer
        </span>
      </div>

      <hr className="border border-[#2b2b2c] w-[80%] my-4" />

      <AnimatePresence>
        {(expanded || isDesktop) && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-4 mb-6 text-zinc-400 text-sm"
          >
            <a
              href="mailto:28francis.junior@gmail.com"
              target="_blank"
              className="flex items-center gap-2 hover:text-fuchsia-500 transition-colors duration-200"
            >
              <FaEnvelope size={18} />
              <span className="hidden sm:inline">
                28francis.junior@gmail.com
              </span>
            </a>
            <a
              href="https://github.com/franch62"
              target="_blank"
              className="flex items-center gap-2 hover:text-fuchsia-500 transition-colors duration-200"
            >
              <FaGithub size={18} />
              <span className="hidden sm:inline">github.com/Franch62</span>
            </a>
            <a
              href="https://linkedin.com/in/franch5"
              target="_blank"
              className="flex items-center gap-2 hover:text-fuchsia-500 transition-colors duration-200"
            >
              <FaLinkedin size={18} />
              <span className="hidden sm:inline">linkedin.com/in/franch5</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {!isDesktop && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="md:hidden text-xs text-zinc-400 mb-4 hover:text-fuchsia-500 transition-colors"
        >
          {expanded ? "Minimizar ▲" : "Expandir ▼"}
        </button>
      )}
    </div>
  );
};
