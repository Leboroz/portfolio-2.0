import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Rubik } from "~/components/rubik";
import { About } from "./about";
import { Stack } from "./stack";
import { PageTitle } from "~/components/pageTitle";
import { Services } from "./services";



export function Welcome() {
  return (
    <>
      <section className="flex h-[var(--home-height)]">
        <div className="flex-1 px-20 pb-20 flex flex-col justify-around" style={{ backgroundImage: 'url(/mypic.png)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'right' }}>
          <h1 className="h1 mb-10">
            Leonardo <br /> Albornoz.
          </h1>
          <ul className="flex g-5">
            <li>
              <a href='https://github.com/Leboroz'><FontAwesomeIcon icon={faGithub} size="2xl" className="text-s1" /></a>
            </li>
            <li>
              <a href='https://linkedin.com/in/leboroz'><FontAwesomeIcon icon={faLinkedin} size="2xl" className="text-s1" /></a>
            </li>
          </ul>
        </div>
        <article className="flex-1 p-20 flex flex-col justify-around">
          <div>
            <PageTitle title="- Introduction" />
            <h2 className="h3 mb-5">Developer, based in Venezuela.</h2>
            <p className="text-md mb-15">
              Hi! I'm Leo. A creative Developer with 3+ years of experience in building high-performance, scalable, and responsive web solution
            </p>
          </div>
          <a href="#contact" className="bg-s1 text-black px-10 py-5 rounded-full text-md text-inter w-fit font-bold">Let's work together!</a>
        </article>
        {/* <Canvas */}
        {/*   camera={{ */}
        {/*     fov: 75, */}
        {/*     near: 0.1, */}
        {/*     far: 1000, */}
        {/*     position: [0, 5, 10], */}
        {/*     rotation: [- Math.PI / 6, 0, 0] */}
        {/*   }} */}
        {/*   dpr={[1, 1.5]} */}
        {/* > */}
        {/*   <directionalLight position={[1, 2, 3]} intensity={4.5} /> */}
        {/*   <ambientLight intensity={4.5} /> */}
        {/* <Environment files='/textures/environment.exr'></Environment> */}
        {/*   <Rubik /> */}
        {/* </Canvas> */}
      </section>
      <About />
      <Stack />
      <Services />
    </>
  );
}

