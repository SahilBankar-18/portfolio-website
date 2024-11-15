import Image from 'next/image';
import Link from 'next/link';

type Project = {
  image: string;
  title: string;
  technologies: string[];
  codeLink: string;
  projectLink: string;
};

const projects: Project[] = [
  {
    image: "",
    title: "An innovative project for task management.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    codeLink: "/project-one-code",
    projectLink: "/project-one",
  },
  {
    image: "",
    title: "A cutting-edge e-commerce platform.",
    technologies: ["Next.js", "Firebase", "Redux"],
    codeLink: "/project-two-code",
    projectLink: "/project-two",
  },
  {
    image: "",
    title: "A real-time chat application.",
    technologies: ["Node.js", "Socket.io", "Express"],
    codeLink: "/project-three-code",
    projectLink: "/project-three",
  },
  {
    image: "",
    title: "A customizable blogging platform.",
    technologies: ["Gatsby", "GraphQL", "CSS Modules"],
    codeLink: "/project-four-code",
    projectLink: "/project-four",
  },
  {
    image: "",
    title: "A weather forecasting app.",
    technologies: ["React Native", "OpenWeather API"],
    codeLink: "/project-five-code",
    projectLink: "/project-five",
  },
  {
    image: "",
    title: "A portfolio website showcasing projects.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    codeLink: "/project-six-code",
    projectLink: "/project-six",
  },
];

const Projects = () => {
  return (
    <div className="dark:bg-gray-900 py-12">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl tracking-normal pb-4 font-bold text-center text-gray-800 dark:text-white mb-8">
          Projects
        </h1>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg transform transition-transform duration-500 hover:-translate-y-3 hover:shadow-xl overflow-hidden"
            >
              {/* Project Image */}
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              {/* Project Details */}
              <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h2>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-4">
                  <strong>Technologies:</strong> {project.technologies.join(", ")}
                </p>
                {/* Buttons */}
                <div className="flex justify-between">
                  <Link href={project.codeLink} className="border-2 border-purple-500 text-purple-500 font-semibold py-1 px-3 rounded-md hover:bg-purple-500 hover:text-white transition-all">

                    View Code

                  </Link>
                  <Link href={project.projectLink} className="border-2 border-purple-500 text-purple-500 font-semibold py-1 px-3 rounded-md hover:bg-purple-500 hover:text-white transition-all">

                    View Project

                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
