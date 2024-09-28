"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Link2 } from "lucide-react";
import Link from "next/link";

const projectsData = [
  {
    title: "Climaton Landing Page",
    description: "Responsive Landing Web Page",
    img: "/images/climaton.png",
    github: "https://github.com/Orazmyrat-Hojamyradov/Climaton-web-page",
    deploy: "https://climaton-web-page-pink.vercel.app/",
    delay: 0,
  },
  {
    title: "Github Search",
    description: "Github-search page based on REST API of Github",
    img: "/images/github-search.png",
    github: "https://github.com/Orazmyrat-Hojamyradov/Github-search",
    deploy: "https://github-search-oraz.vercel.app/",
    delay: 0.1,
  },
];

export default function Project() {
  return (
    <AnimatePresence>
      {projectsData.map((project) => (
        <motion.div
          initial={{ x: "70%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          exit={{ x: "0%" }}
          transition={{
            duration: 0,
            delay: project.delay,
          }}
          key={project.title}
          className={"project"}
        >
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <div className="links">
            <Link target="_blank" href={project.github} className="link">
              <Link2 className="icon" />
              Github
            </Link>
            <Link target="_blank" href={project.deploy} className="link">
              <Link2 className="icon" />
              Website
            </Link>
          </div>
        </motion.div>
      ))}
    </AnimatePresence>
  );
}
