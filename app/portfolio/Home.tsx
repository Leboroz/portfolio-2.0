import { PageTitle } from "~/components/PageTitle";
import { PrimaryButton } from "~/components/PrimaryButton";
import { Terminal, type TerminalProps } from "~/components/Terminal";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { ContentLayout } from "~/layouts/ContentLayout";
import { SectionLayout } from "~/layouts/SectionLayout";

interface HomeProps {
  title: string;
  subHeading: string;
  heading: string;
  callToAction: string;
  terminal: TerminalProps;
}

export const Home = (props: HomeProps) => {

  return (
    <SectionLayout id="intro">
      <ContentLayout>
        <div className="flex h-full flex-col gap-4 lg:flex-row lg:py-20">
          <article className="flex flex-col gap-8 lg:flex-1 ">
            <PageTitle title={props.title} />
            <h1 className="h1 relative" dangerouslySetInnerHTML={{ __html: props.heading }} />
            <p className="text-muted">{props.subHeading}</p>
            <a href="#contact">
              <PrimaryButton text={props.callToAction} type="button" icon={faArrowRight} />
            </a>
          </article>
          <Terminal {...props.terminal} className="flex-1" />
        </div>
      </ContentLayout>
    </SectionLayout>
  )
}
