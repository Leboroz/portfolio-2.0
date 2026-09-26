import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import type { Link } from "../../types";

interface NavbarProps {
  links: Link[];
}

const Navbar = ({ links }: NavbarProps) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState("home");
  const navRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<Map<string, HTMLAnchorElement>>(new Map());

  // Intersection Observer for active link detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px -20% 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Desktop active underline positioning
  const activeLink = linkRefs.current.get(activeSection);
  const containerLeft = navRef.current?.getBoundingClientRect().left || 0;
  const linkRect = activeLink?.getBoundingClientRect();

  const underlineStyle = linkRect
    ? {
      left: `${linkRect.left - containerLeft}px`,
      width: `${linkRect.width}px`,
    }
    : { left: "0px", width: "0px" };

  const toggleMenu = () => setShowMenu((prev) => !prev);
  const closeMenu = () => setShowMenu(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/40 px-4 py-3 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between">

        {/* Mobile Toggle Button */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle Navigation"
          className="p-1 text-white transition-colors hover:text-terminal-green focus:outline-none md:hidden"
        >
          <FontAwesomeIcon icon={showMenu ? faXmark : faBars} size="lg" />
        </button>

        {/* Desktop Navigation */}
        <nav
          ref={navRef}
          className="relative hidden gap-8 font-kode-mono font-medium md:flex"
        >
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              ref={(el) => {
                if (el) linkRefs.current.set(link.id, el);
                else linkRefs.current.delete(link.id);
              }}
              className={`relative pb-2 text-sm transition-colors ${activeSection === link.id
                  ? "text-white"
                  : "text-muted hover:text-white"
                }`}
            >
              {link.text}
            </a>
          ))}

          {/* Animated active tab underline (Desktop) */}
          <div
            className="absolute bottom-0 h-px bg-terminal-green transition-all duration-300 ease-out"
            style={underlineStyle}
          />
        </nav>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-x-0 top-[57px] origin-top border-b border-white/10 bg-black/95 font-kode-mono backdrop-blur-lg transition-all duration-300 ease-in-out md:hidden ${showMenu
            ? "pointer-events-auto scale-y-100 opacity-100"
            : "pointer-events-none scale-y-0 opacity-0"
          }`}
      >
        <div className="flex flex-col space-y-4 px-6 py-4">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={closeMenu}
              className={`py-1 text-base font-medium transition-colors ${activeSection === link.id
                  ? "border-l-2 border-terminal-green pl-2 font-bold text-terminal-green"
                  : "text-muted hover:text-white"
                }`}
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
