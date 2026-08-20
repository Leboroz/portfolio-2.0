
import { PageTitle } from "~/components/PageTitle"
import { SubHeading } from "~/components/SubHeading"

interface SectionLayoutProps {
  title: string;
  subHeading: string;
  children?: React.ReactNode;
}
export const SectionLayout = ({ title, subHeading, children }: SectionLayoutProps) => {
  return (
    <section id="services" className="section container">

      <div className="content flex flex-col justify-center gap-7">
        <header className="flex flex-col gap-3">
          <PageTitle title={title} />
          <SubHeading text={subHeading} />
        </header>

        {children}
      </div>

    </section >
  )
}
