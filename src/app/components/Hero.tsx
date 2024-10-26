"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import profile from "@/app/Images/profile.png";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen md:pt-24 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
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
          HEY, I'M SAHIL BANKAR
        </h1>
        <div className="text-xl h-20 text-gray-800 dark:text-gray-200">
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
        <Link
          href="/projects"
          className="bg-purple text-white px-8 py-3 rounded-full font-bold hover:bg-purple-700 transition-colors"
        >
          PROJECTS
        </Link>
      </main>
    </div>
  );
}
