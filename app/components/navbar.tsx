import { faBurger } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

type Link = { href: string; text: string };

interface NavbarProps {
  links: Link[];
}

const Navbar = ({ links }: NavbarProps) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const middleIndex = Math.floor(links.length / 2);
  const firstHalf = links.slice(0, middleIndex);
  const secondHalf = links.slice(middleIndex);

  const toggleMenu = () => setShowMenu((prev) => !prev);

  return (
    <nav className="bg-black-100 lg:fixed lg:top-4 lg:left-1/2 lg:-translate-x-1/2 py-5 px-7 lg:rounded-full lg:w-[90%] lg:z-10">
      <button
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        className="lg:hidden"
      >
        <FontAwesomeIcon icon={faBurger} />
      </button>

      <div className={showMenu ? 'hidden' : 'block' + ' lg:flex lg:justify-between'}>
        <ul className="flex gap-20">
          {firstHalf.map((link) => (
            <li key={link.text}>
              <a href={link.href}>{link.text}</a>
            </li>
          ))}
        </ul>

        <img src="" alt="logo" />

        <ul className="flex gap-20">
          {secondHalf.map((link) => (
            <li key={link.text}>
              <a href={link.href}>{link.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav >
  );
};

export default Navbar;
