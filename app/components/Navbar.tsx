import { faBurger } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
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
  const navRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<Map<string, HTMLAnchorElement>>(new Map());

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


  const activeLink = linkRefs.current.get(activeSection);
  const containerLeft = navRef.current?.getBoundingClientRect().left || 0;
  const linkRect = activeLink?.getBoundingClientRect();

  const underlineStyle = linkRect
    ? {
      left: linkRect.left - containerLeft + 'px',
      width: linkRect.width + 'px',
    }
    : { left: '0px', width: '0px' };

  const toggleMenu = () => setShowMenu((prev) => !prev);

  return (
    <nav ref={navRef} className="flex gap-8 fixed px-2 font-kode-mono font-bold">
      {links.map((link) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          ref={(el) => {
            if (el) linkRefs.current.set(link.id, el);
            else linkRefs.current.delete(link.id);
          }}
          className={`relative pb-2 text-sm font-medium transition-colors ${activeSection === link.id
            ? 'text-white'
            : 'text-muted hover:text-white'
            }`}
        >
          {link.text}
        </a>
      ))}

      {/* Animated underline */}
      <div
        className="absolute bottom-0 h-[0.5px] bg-terminal-green transition-all duration-300 ease-out"
        style={underlineStyle}
      />
    </nav>
  );
};


export default Navbar;
