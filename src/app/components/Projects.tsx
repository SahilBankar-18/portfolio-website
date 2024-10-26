"use client";

import { useState } from "react";
import { Button } from "@/app/components/Button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/components/Tabs";
import Image from "next/image";
import { motion } from "framer-motion";
import vionsys from "@/app/Images/vionsys.jpg";
import greateway from "@/app/Images/greateway.jpg";
import ems from "@/app/Images/ems.jpg";
import srtemple from "@/app/Images/srtemple.jpg";
import nas from "@/app/Images/nas.jpg";

interface Project {
  id: number;
  name: string;
  description: string;
  type: "personal" | "official";
  image: any;
  codeLink?: string;
  projectLink: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "Dopefolio",
    description:
      "Dopefolio is a successful Open-Source project that I created which has been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally",
    type: "personal",
    image: "/placeholder.svg",
    codeLink: "https://github.com/username/dopefolio",
    projectLink: "https://dopefolio.com",
  },
  {
    id: 2,
    name: "Employee Management System",
    description:
      "A robust e-commerce solution developed for a major retail client, featuring advanced product management, user authentication, and secure payment integration.",
    type: "official",
    image: ems,
    projectLink: "https://www.vionsys-ems.org/login",
  },
  {
    id: 3,
    name: "Weather App",
    description:
      "A responsive weather application that provides real-time weather data and forecasts. Built with React and integrates with a weather API.",
    type: "personal",
    image: "/placeholder.svg",
    codeLink: "https://github.com/username/weather-app",
    projectLink: "https://weather-app-demo.com",
  },
  {
    id: 4,
    name: "Vionsys IT Solutions OFficial Website",
    description:
      "A comprehensive intranet solution designed for a multinational corporation, featuring document management, employee directories, and internal communication tools.",
    type: "official",
    image: vionsys,
    projectLink: "https://www.vionsys.com/",
  },
  {
    id: 5,
    name: "Task Manager",
    description:
      "A feature-rich task management application with user authentication, task prioritization, and team collaboration features.",
    type: "personal",
    image: "/placeholder.svg",
    codeLink: "https://github.com/username/task-manager",
    projectLink: "https://task-manager-demo.com",
  },
  {
    id: 6,
    name: "Greateway Software Solutions Pvt.Ltd Official Website",
    description:
      "A secure healthcare portal developed for a leading hospital, allowing patients to access medical records, schedule appointments, and communicate with healthcare providers.",
    type: "official",
    image: greateway,
    projectLink: "https://www.greateway.com/",
  },
  {
    id: 7,
    name: "NAS Infotech Pvt.Ltd. Official Website",
    description:
      "A secure healthcare portal developed for a leading hospital, allowing patients to access medical records, schedule appointments, and communicate with healthcare providers.",
    type: "official",
    image: nas,
    projectLink: "https://www.nas-infotech.com/",
  },
  {
    id: 8,
    name: "SR Temple Constructions Official Website",
    description:
      "A secure healthcare portal developed for a leading hospital, allowing patients to access medical records, schedule appointments, and communicate with healthcare providers.",
    type: "official",
    image: srtemple,
    projectLink: "https://www.srtempleconstructions.com/",
  },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState<"personal" | "official">(
    "personal"
  );

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full dark:bg-gray-900 py-12 md:py-24 lg:py-32"
    >
      <div className="container px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4"
        >
          PROJECTS
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 text-center mb-8"
        >
          Here you will find some of the personal and client projects that I
          created, each with its own case study.
        </motion.p>
        <Tabs
          defaultValue={activeTab}
          className="w-full"
          onValueChange={(value) =>
            setActiveTab(value as "personal" | "official")
          }
        >
          <TabsList className="flex justify-center gap-4 mb-8">
            <TabsTrigger
              value="personal"
              className={`py-2 px-4 ${
                activeTab === "personal" ? "bg-purple-600 text-white" : ""
              }`}
            >
              Personal Projects
            </TabsTrigger>
            <TabsTrigger
              value="official"
              className={`py-2 px-4 ${
                activeTab === "official" ? "bg-purple-600 text-white" : ""
              }`}
            >
              Official Projects
            </TabsTrigger>
          </TabsList>
          <TabsContent value="personal">
            {projects
              .filter((project) => project.type === "personal")
              .map((project, index) => (
                <ProjectItem
                  key={project.id}
                  project={project}
                  isEven={index % 2 !== 0}
                  index={index}
                />
              ))}
          </TabsContent>
          <TabsContent value="official">
            {projects
              .filter((project) => project.type === "official")
              .map((project, index) => (
                <ProjectItem
                  key={project.id}
                  project={project}
                  isEven={index % 2 !== 0}
                  index={index}
                />
              ))}
          </TabsContent>
        </Tabs>
      </div>
    </motion.section>
  );
}

function ProjectItem({
  project,
  isEven,
  index,
}: {
  project: Project;
  isEven: boolean;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`flex flex-col ${
        isEven ? "md:flex-row-reverse" : "md:flex-row"
      } gap-8 mb-16`}
    >
      <motion.div
        className="flex-1"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col justify-center items-center p-6">
          <div className="w-80 h-48  bg-gray-800 rounded-t-lg relative">
            {/* Laptop Screen */}
            <div className="w-full h-full bg-black rounded-t-lg overflow-hidden">
              {/* Replace the src with your image path */}
              <Image
                src={project.image}
                alt="Laptop Image"
                layout="fill"
                className="object-fill"
              />
            </div>
          </div>
          {/* Laptop Base */}
          <div className="w-80 h-8 bg-gray-800 rounded-b-lg"></div>
          {/* Laptop Keyboard */}
          <div className="w-96 h-4 bg-gray-600 mx-auto -mt-2 rounded-md"></div>
        </div>
      </motion.div>
      <div className="flex-1 flex flex-col justify-center">
        <motion.h3
          initial={{ opacity: 0, x: isEven ? 20 : -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
          className="text-2xl font-bold mb-2"
        >
          {project.name}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, x: isEven ? 20 : -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
          className="text-gray-600 dark:text-gray-300 mb-4"
        >
          {project.description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
          className="flex gap-4"
        >
          <Button>
            <a
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </Button>
          {project.type === "personal" && project.codeLink && (
            <Button variant="outline">
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Code
              </a>
            </Button>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}
