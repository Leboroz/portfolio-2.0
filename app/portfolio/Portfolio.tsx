import { About } from "./About";
import { Services } from "./Services";
import { Home } from "./Home";
import { Projects } from "./Projects";
import { ContactMe } from "./ContactMe";
import { HOME_TITLE, SOCIAL_LINKS } from "../../lib/data";


export function Portfolio() {
  return (
    <>
      <Home {...HOME_TITLE} />
      <About />
      <Services />
      <Projects />
      <ContactMe socials={SOCIAL_LINKS} />
    </>
  );
}

