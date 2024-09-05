"use client";

import clsx from "clsx";
import { Link2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const projectsData = [
  {
    title: "Climaton Landing Page",
    description: "Responsive Landing Web Page",
    img: "/images/climaton.png",
    github: "https://github.com/Orazmyrat-Hojamyradov/Climaton-web-page",
    deploy: "https://climaton-web-page-pink.vercel.app/",
  },
  {
    title: "Github Search",
    description: "Github-search page based on REST API of Github",
    img: "/images/github-search.png",
    github: "https://github.com/Orazmyrat-Hojamyradov/Github-search",
    deploy: "https://github-search-oraz.vercel.app/",
  },
];

export default function Project() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <>
      {projectsData.map((project) => (
        <div
          key={project.title}
          className={clsx("project", visible ? "visible" : "")}
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
        </div>
      ))}
    </>
  );
}
