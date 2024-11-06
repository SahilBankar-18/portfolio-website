"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { FaDownload } from "react-icons/fa";
import profile from "@/app/Images/profile.png";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/SahilSBankar.pdf";
    link.download = "SahilSBankar.pdf";
    link.click();
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen md:pt-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <main className="container h-full mx-auto px-4 py-20 flex flex-col items-center text-center gap-y-4">
        <div className="rounded-full md:h-32 h-32 bg-purple relative">
          <Image
            src={profile}
            alt="Profile picture"
            className="hexagon-image bg-cover relative top-[-100px]"
            width={200}
            height={500}
          />
        </div>
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
          HEY, I&apos;M SAHIL BANKAR
        </h1>
        <div className="text-xl text-gray-800 dark:text-gray-200">
          <TypeAnimation
            sequence={[
              "I am a Software Engineer",
              2000,
              "I am a Web Developer",
              2000,
              "I am a Full Stack Developer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>
        <p className="text-xl max-w-2xl text-gray-700 dark:text-gray-300">
          Specialized in developing and overseeing websites and web applications
          that play a pivotal role in achieving business success.
        </p>
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 bg-purple text-white px-8 py-3 rounded-full font-bold hover:bg-purple-700 transition-colors"
        >
          <FaDownload />
          Download CV
        </button>
      </main>
    </div>
  );
}
