"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsMoonStars } from "react-icons/bs";
import { LuSunMoon } from "react-icons/lu";
import { HiMenu, HiX } from "react-icons/hi"; // Import hamburger and cross icons
import { useTheme } from "next-themes";
import { gsap } from "gsap";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      gsap.to(".menu", { duration: 0.3, opacity: 1, y: 0, display: 'block' });
    } else {
      gsap.to(".menu", { duration: 0.3, opacity: 0, y: -20, display: 'none' });
    }
  }, [isMenuOpen]);

  if (!mounted) return null; // Prevent hydration mismatch errors

  return (
    <nav className="container fixed bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 mx-auto px-4 py-6 flex justify-between items-center z-10">
      <div className="flex items-center space-x-4">
        <Image
          src="/placeholder.svg"
          alt="Profile"
          width={50}
          height={50}
          className="rounded-full"
        />
        <span className="font-bold text-xl">RAM MAHESHWARI</span>
      </div>
      <div className="hidden md:flex items-center space-x-6">
        <Link href="/" className="hover:text-purple-600 transition-colors">HOME</Link>
        <Link href="/about" className="hover:text-purple-600 transition-colors">ABOUT</Link>
        <Link href="/projects" className="hover:text-purple-600 transition-colors">PROJECTS</Link>
        <Link href="/contact" className="hover:text-purple-600 transition-colors">CONTACT</Link>
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
      <div className={`absolute top-16 right-4 bg-white dark:bg-gray-900 shadow-lg rounded-md menu`} style={{ display: 'none' }}>
        <div className="flex flex-col items-center">
          <Link href="/" className="block px-4 py-2 hover:text-purple-600 transition-colors">HOME</Link>
          <Link href="/about" className="block px-4 py-2 hover:text-purple-600 transition-colors">ABOUT</Link>
          <Link href="/projects" className="block px-4 py-2 hover:text-purple-600 transition-colors">PROJECTS</Link>
          <Link href="/contact" className="block px-4 py-2 hover:text-purple-600 transition-colors">CONTACT</Link>
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
