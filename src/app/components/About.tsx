"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/app/components/Button";
import { Card, CardContent } from "@/app/components/Card";
import { FaGraduationCap, FaUserTie } from "react-icons/fa6";
import { TbBriefcaseFilled } from "react-icons/tb";
import { SiDailydotdev } from "react-icons/si";
import about from "@/app/Images/aboutMe.jpg";

export default function About() {
  const [activeSection, setActiveSection] = useState<
    "about" | "skills" | "education" | "experience"
  >("about");

  const technologies = {
    frontend: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS"],
    backend: ["Node.js", "Express", "Java"],
    databases: ["PostgreSQL", "MongoDB", "MySQL"],
    others: ["Github", "Jira", "Postman", "Firebase"],
  };

  const education = [
    {
      degree: "BBA(Computer Applications)",
      year: "2021",
      institution: "RNC Bytco College, Nashik",
    },
    { degree: "MCA", year: "2023", institution: "Sandip University, Nashik" },
    {
      degree: "Full Stack Java Development Course",
      year: "2023",
      institution: "Qspiders Training Institute, Wakad, Pune",
    },
  ];

  const experience = [
    {
      position: "Web Developer Intern",
      company: "Vionsys IT Solutions India Pvt.Ltd.",
      period: "8 April 2024 to 7 July 2024 (3-Months)",
    },
    {
      position: "Software Engineer",
      company: "Vionsys IT Solutions India Pvt.Ltd.",
      period: "8 July 2024 to Present",
    },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <div className="container mx-auto h-full bg-gray-100 dark:bg-gray-900 py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar Buttons */}
        <div className="space-y-6">
          <Button
            variant={activeSection === "about" ? "default" : "outline"}
            className="w-full flex justify-start gap-4 items-center"
            onClick={() => setActiveSection("about")}
          >
            <FaUserTie className="mr-2 h-6 w-6" /> About Me
          </Button>
          <Button
            variant={activeSection === "education" ? "default" : "outline"}
            className="w-full flex justify-start gap-4 items-center"
            onClick={() => setActiveSection("education")}
          >
            <FaGraduationCap className="mr-2 h-6 w-6" /> Education
          </Button>
          <Button
            variant={activeSection === "experience" ? "default" : "outline"}
            className="w-full flex justify-start gap-4 items-center"
            onClick={() => setActiveSection("experience")}
          >
            <TbBriefcaseFilled className="mr-2 h-6 w-6" /> Experience
          </Button>
          <Button
            variant={activeSection === "skills" ? "default" : "outline"}
            className="w-full flex justify-start gap-4 items-center"
            onClick={() => setActiveSection("skills")}
          >
            <SiDailydotdev className="mr-2 h-6 w-6" /> Skilled Technologies
          </Button>
        </div>

        {/* Content Section */}
        <div className="md:col-span-3">
          <AnimatePresence mode="wait">
            {activeSection === "about" && (
              <motion.div
                key="about"
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid md:grid-cols-2 gap-8"
              >
                <Image
                  src={about}
                  alt="Profile"
                  width={400}
                  height={400}
                  quality={100}
                  className="rounded-lg object-cover w-full"
                />
                <div>
                  <h2 className="text-3xl border-b-4 border-purple pb-2 font-bold mb-4">About Me</h2>
                  <p className="leading-relaxed">
                    I am a Software Engineer with 7 months of hands-on
                    experience in full-stack development. I thrive on solving
                    complex challenges and am committed to writing clean,
                    efficient code. In my free time, I explore open-source
                    projects and connect with the developer community.
                  </p>
                </div>
              </motion.div>
            )}
            {activeSection === "education" && (
              <motion.div
                key="education"
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <h2 className="text-3xl border-b-4 border-purple pb-2 font-bold mb-6">Education</h2>
                <motion.div
                  className="space-y-10"
                  variants={containerVariants}
                >
                  {education.map((edu) => (
                    <motion.div key={edu.degree} variants={itemVariants} className="flex items-start">
                      <FaGraduationCap className="mr-4 h-8 w-8 text-primary" />
                      <div>
                        <h3 className="text-xl font-semibold">{edu.degree}</h3>
                        <p>{edu.institution}</p>
                        <p className="text-sm">{edu.year}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}
            {activeSection === "experience" && (
              <motion.div
                key="experience"
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <h2 className="text-3xl border-b-4 border-purple pb-2 font-bold mb-6">Experience</h2>
                <motion.div
                  className="space-y-8"
                  variants={containerVariants}
                >
                  {experience.map((exp) => (
                    <motion.div key={exp.position} variants={itemVariants} className="flex items-start">
                      <TbBriefcaseFilled className="mr-4 h-8 w-8 text-primary" />
                      <div>
                        <h3 className="text-xl font-semibold">{exp.position}</h3>
                        <p>{exp.company}</p>
                        <p className="text-sm">{exp.period}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}
            {activeSection === "skills" && (
              <motion.div
                key="skills"
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <h2 className="text-3xl border-b-4 border-purple pb-2 font-bold mb-6">
                  Skilled Technologies
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(technologies).map(([category, techs]) => (
                    <motion.div
                      key={category}
                      variants={itemVariants}
                    >
                      <Card className="h-full">
                        <CardContent className="p-6">
                          <h3 className="text-xl font-semibold capitalize mb-4">
                            {category}
                          </h3>
                          <ul className="space-y-2">
                            {techs.map((tech) => (
                              <li key={tech} className="flex items-center">
                                <SiDailydotdev className="mr-2 h-4 w-4" />
                                {tech}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
