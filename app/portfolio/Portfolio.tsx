import { About } from "./About";
import { Services } from "./Services";
import { Home } from "./Home";
import { Projects } from "./Projects";

import { HOME_TITLE } from "../../lib/data";


export function Portfolio() {
  return (
    <>
      <Home {...HOME_TITLE} />
      <About />
      <Services />
      <Projects />
    </>
  );
}

