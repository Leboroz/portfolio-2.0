import { useMemo, useState } from "react";
import { START_DATE } from "../../lib/data";
import { PageTitle } from "~/components/PageTitle";
import { PrimaryButton } from "~/components/PrimaryButton";
import { Teminal } from "~/components/Teminal";

interface HomeProps {
  title: string;
  subHeading: string;
  heading: string;
  callToAction: string;
}

export const Home = (props: HomeProps) => {

  const yearsOfExperience = useMemo(() => {
    const startDate = new Date(START_DATE);
    const today = new Date();

    return today.getFullYear() - startDate.getFullYear();
  }, []);

  return (
    <section id="intro" className="container flex">
      <article className="flex flex-col gap-3">
        <PageTitle title={props.title} />
        <h1 className="h1" dangerouslySetInnerHTML={{ __html: props.heading }} />
        <p>{props.subHeading}</p>
        <PrimaryButton text={props.callToAction} />
      </article>
      <Teminal />
    </section>
  )
}
