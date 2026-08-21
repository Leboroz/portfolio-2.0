import { faBurger } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import type { Link } from "../../types";

interface NavbarProps {
  links: Link[];
}

interface LinkProps {
  links: Link[];
}

const Navbar = ({ links }: NavbarProps) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState('home');

  const LinkList = ({ links }: LinkProps) => (
    <ul className="flex gap-2 items-center">
      {links.map((link) => (
        <li key={link.id} className="h-fit">
          <a className="px-2" href={`#${link.id}`}>{link.text}</a>
        </li>
      ))}
    </ul>
  )

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-80px 0px -20% 0px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const toggleMenu = () => setShowMenu((prev) => !prev);

  return (
    <nav className="bg-black-100 lg:fixed lg:top-0 py-1 px-2 lg:rounded-full lg:w-full lg:z-10">
      <button
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        className="lg:hidden"
      >
        <FontAwesomeIcon icon={faBurger} />
      </button>

      <div className={showMenu ? 'hidden' : 'block' + ' lg:flex lg:justify-between'}>

        <div className="flex g-1">

        </div>

        <LinkList links={links} />
      </div>
    </nav >
  );
};


export default Navbar;
