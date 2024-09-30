import Link from "next/link";
import "@/app/globals.scss";

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
  return (
    <div className="navbar-wrapper">
      <div className="navbar">
        {links.map((link) => (
          <Link className="link" href={link.href} key={link.href}>
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
