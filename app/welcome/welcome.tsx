import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Rubik } from "~/components/rubik";
import { About } from "./about";
import { Stack } from "./stack";
import { PageTitle } from "~/components/pageTitle";
import { Services } from "./services";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useMemo, useState } from "react";
import { START_DATE } from "../../lib/data";
import { Experience } from "./experience";

interface QuotedTextProps {
  text: string;
  className: string;
}

const QuotedText = ({ text, className }: QuotedTextProps) => (
  <p className={'relative pt-2' + ' ' + className}>
    <svg
      className="absolute bottom-full left-0 w-8 h-8 text-slate-700"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M14.017 21v-7.391c0-5.704 3.748-9.762 9.243-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-10.226zm-14.017 0v-7.391c0-5.704 3.748-9.762 9.244-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-10.227z" />
    </svg>
    {text}
  </p >
);

export function Welcome() {
  const [isImageHovered, setIsImageHovered] = useState<boolean>(false);

  const yearsOfExperience = useMemo(() => {
    const startDate = new Date(START_DATE);
    const today = new Date();

    return today.getFullYear() - startDate.getFullYear();
  }, []);

  return (
    <>
      <section id="intro" className="container flex px-15">
        <div className="flex items-center justify-between content relative overflow-hidden">
          <QuotedText
            text='Leo’s exceptional eye for detail and commitment to quality ensured our website’s success. Highly Recommended!'
            className={`flex-1 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isImageHovered ? '-translate-y-40' : ''}`}
          />
          <header
            className={`text-6xl bottom-div top-div self-start h-fit text-center flex flex-col items-center transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isImageHovered ? 'translate-y-80 opacity-0' : ''}`}
          >
            <h2 className="text-sm border py-2 px-5 mb-5 rounded-full w-fit">Hello!</h2>
            <h1 className=" font-semibold">I'm <span className="text-p2">Leonardo</span>, <br /> Front-end Developer</h1>
          </header>
          <div
            className={`flex-1 text-end transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isImageHovered ? '-translate-y-40' : ''}`}
          >
            <div>
              {new Array(5).fill(null).map((_, i) => (
                <FontAwesomeIcon key={i} icon={faStar} color="var(--color-p2)" />
              ))}
            </div>
            <p className="text-4xl font-semibold">{yearsOfExperience} years</p>
            <p>experience</p>
          </div>
          <div
            className="absolute bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2 w-1/2 aspect-square rounded-full bg-p3 flex items-center justify-center"
            onMouseEnter={() => setIsImageHovered(true)}
            onMouseLeave={() => setIsImageHovered(false)}
          >
            <img
              src="/arc-of-shapes.svg"
              alt="arc of shapes"
              className={`absolute bottom-1/2 w-full scale-0 object-cover object-center transition-scale duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isImageHovered ? 'scale-160' : ''}`}
            />
            <img
              src="/mypic.png"
              alt="center profile"
              className="absolute bottom-1/2 w-3/5 object-cover object-center"
            />
          </div>
        </div>
      </section>
      <About />
      <Stack />
      <Services />
      <Experience />
    </>
  );
}

