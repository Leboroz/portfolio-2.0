import { faBurger } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

type Link = { href: string; text: string };

interface NavbarProps {
  links: Link[];
}

const Navbar = ({ links }: NavbarProps) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

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

const LinkList = ({ links }) => (
  <ul className="flex gap-2 items-center">
    {links.map((link) => (
      <li key={link.text} className="h-fit">
        <a className="px-2" href={link.href}>{link.text}</a>
      </li>
    ))}
  </ul>
)
export default Navbar;
