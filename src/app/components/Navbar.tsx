"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import { BsMoonStars } from "react-icons/bs";
import { LuSunMoon } from "react-icons/lu";
import { HiMenu, HiX } from "react-icons/hi";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent hydration mismatch errors

  return (
    <nav className="container fixed bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 mx-auto px-4 py-4 flex justify-between items-center z-30">
      <div className="flex items-center space-x-4">
        <Image
          src="/placeholder.svg"
          alt="Profile"
          width={50}
          height={50}
          className="rounded-full"
        />
      </div>
      <div className="hidden md:flex items-center space-x-6">
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-purple-600 transition-colors"
        >
          HOME
        </ScrollLink>
        <ScrollLink
          to="about"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-purple-600 transition-colors"
        >
          ABOUT
        </ScrollLink>
        <ScrollLink
          to="projects"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-purple-600 transition-colors"
        >
          PROJECTS
        </ScrollLink>
        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-purple-600 transition-colors"
        >
          CONTACT
        </ScrollLink>
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
          aria-label="Toggle dark mode"
        >
          {theme === "dark" ? <LuSunMoon size={20} /> : <BsMoonStars size={20} />}
        </button>
      </div>
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <HiX size={20} /> : <HiMenu size={20} />}
        </button>
      </div>
      {/* Mobile Menu */}
      <div className={`absolute top-16 right-4 bg-white dark:bg-gray-900 shadow-lg rounded-md menu ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="flex flex-col items-center">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="block px-4 py-2 cursor-pointer hover:text-purple-600 transition-colors"
          >
            HOME
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className="block px-4 py-2 cursor-pointer hover:text-purple-600 transition-colors"
          >
            ABOUT
          </ScrollLink>
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            className="block px-4 py-2 cursor-pointer hover:text-purple-600 transition-colors"
          >
            PROJECTS
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className="block px-4 py-2 cursor-pointer hover:text-purple-600 transition-colors"
          >
            CONTACT
          </ScrollLink>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white transition-colors mt-2"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? <LuSunMoon size={20} /> : <BsMoonStars size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
