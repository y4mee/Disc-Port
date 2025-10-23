"use client";

import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import MainFrame from "./MainFrame";
import { motion, AnimatePresence } from "framer-motion";

const Bg = () => {
  const [isDark, setIsDark] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => setIsLoaded(true), []);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <>
      {/* Background Layer */}
      <AnimatePresence mode="wait">
        {isDark ? (
          <motion.div
            key="dark"
            className="fixed inset-0 z-0 w-full h-full bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="./image 2.png"
              alt="dark bg"
              className="w-full h-full object-cover absolute opacity-60"
            />
          </motion.div>
        ) : (
          <motion.div
            key="light"
            className="fixed inset-0 z-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="./bg3.jpg"
              alt="light bg"
              className="w-full h-full object-cover absolute"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Foreground */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4 md:p-0">
        {/* Toggle Button */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
          className="fixed top-6 right-6 z-20 md:top-6 md:right-6"
        >
          <div
            onClick={toggleTheme}
            className="relative w-16 h-32 rounded-full cursor-pointer transition-all duration-300 ease-in-out bg-white/70 border border-white hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
          >
            <motion.div
              animate={{ top: isDark ? 64 : 8 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
              className={`absolute left-2 w-12 h-12 rounded-full shadow-lg flex items-center justify-center ${
                isDark ? "bg-black" : "bg-white"
              }`}
            >
              {isDark ? (
                <Moon size={20} className="text-white fill-white" />
              ) : (
                <Sun size={20} className="text-black fill-black" />
              )}
            </motion.div>

            <div className="absolute inset-0 flex flex-col items-center justify-between py-4">
              <Sun
                size={16}
                className={`text-gray-400 transition-opacity duration-300 ${
                  isDark ? "opacity-30" : "opacity-0"
                }`}
              />
              <Moon
                size={16}
                className={`text-gray-400 transition-opacity duration-300 ${
                  !isDark ? "opacity-30" : "opacity-0"
                }`}
              />
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          className="w-full max-w-[1500px] mx-auto"
        >
          <MainFrame isDark={isDark} />
        </motion.div>
      </div>
    </>
  );
};

export default Bg;
