import { useMemo, useState } from "react";
import { START_DATE } from "../../lib/data";
import { PageTitle } from "~/components/PageTitle";
import { PrimaryButton } from "~/components/PrimaryButton";
import { Terminal, type TerminalProps } from "~/components/Terminal";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface HomeProps {
  title: string;
  subHeading: string;
  heading: string;
  callToAction: string;
  terminal: TerminalProps;
}

export const Home = (props: HomeProps) => {

  const yearsOfExperience = useMemo(() => {
    const startDate = new Date(START_DATE);
    const today = new Date();

    return today.getFullYear() - startDate.getFullYear();
  }, []);

  return (
    <section id="intro" className="container items-center py-10 lg:flex lg:pt-0">
      <div className="flex h-fit flex-col gap-5 lg:flex-row lg:items-stretch">
        <article className="flex flex-col gap-5 lg:flex-1 lg:justify-between">
          <PageTitle title={props.title} />
          <h1 className="h1" dangerouslySetInnerHTML={{ __html: props.heading }} />
          <p className="text-muted">{props.subHeading}</p>
          <a href="#contact">
            <PrimaryButton text={props.callToAction} type="button" icon={faArrowRight} />
          </a>
        </article>
        <Terminal {...props.terminal} className="flex-1" />
      </div>
    </section>
  )
}
