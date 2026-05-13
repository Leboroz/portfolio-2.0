import { faBurger } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Navbar = (props: {}) => {
  const [showMenu, setShowMenu] = useState<Boolean>(false);

  return (
    <header className="flex justify-center lg:justify-between px-20 pt-3">
      <div className="flex items-center gap-9">
        <h2 className="text-4xl">Leboroz</h2>
      </div>
      <div className=" items-center flex lg:gap-16 min-h-0 text-s1">
        <div className="hidden lg:block">
          <nav className="rounded-3xl flex border border-gray-200 p-6 dark:border-gray-700 space-y-4">
            <p className="leading-6 text-gray-700 dark:text-gray-200 text-center lg:hidden">
              What&apos;s next?
            </p>
            <ul className="flex">
              {resources.map(({ href, text }) => (
                <li key={href}>
                  <a
                    className="group flex items-center gap-3 self-stretch p-3 leading-normal hover:underline "
                    href={href}
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <button type="button" className="lg:hidden w-12 absolute top-1 left-1" onClick={() => setShowMenu(prev => !prev)}>
          <FontAwesomeIcon className="text-5xl" icon={faBurger} color="var(--secondary-color)" />
        </button>
        {showMenu && <div className="lg:hidden w-full max-w-[320px] space-y-6 fixed px-2 top-15 left-0">
          <nav className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4">
            <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
              What&apos;s next?
            </p>
            <ul>
              {resources.map(({ href, text }) => (
                <li key={href}>
                  <a
                    className="group flex items-center gap-3 self-stretch p-3 leading-normal hover:underline"
                    href={href}
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>}

      </div>
    </header>
  )
}

const resources = [
  {
    href: "#home",
    text: "Home",
  },
  {
    href: "#experties",
    text: "Experties",
  },
  {
    href: "#work",
    text: "My Work",
  },
  {
    href: "#experience",
    text: "Experience",
  },
  {
    href: "#contact",
    text: "Contact",
  },
];
export default Navbar;
