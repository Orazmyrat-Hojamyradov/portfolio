"use client";

import Link from "next/link";
import "@/app/globals.scss";
import useDownloader from "react-use-downloader";

const links = [
  {
    name: "Projects",
    href: "/projects",
  },

  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Header() {
  const { download } = useDownloader();

  const fileUrl = "/CV-Orazmyrat.pdf";
  const filename = "CV-Orazmyrat.pdf";

  return (
    <div className="navbar-wrapper">
      <div className="navbar">
        {links.map((link) => (
          <Link className="link" href={link.href} key={link.href}>
            {link.name}
          </Link>
        ))}
        <a onClick={() => download(fileUrl, filename)} className="link">
          CV
        </a>
      </div>
    </div>
  );
}
