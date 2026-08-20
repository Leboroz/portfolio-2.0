
import { PageTitle } from "~/components/PageTitle"
import { SubHeading } from "~/components/SubHeading"
export const SectionLayout = ({ children }) => {
  return (
    <section id="services" className="section container">

      <div className="content flex flex-col justify-center gap-7">
        <header className="flex flex-col gap-3">
          <PageTitle title='My Services' />
          <SubHeading text='From the first wireframe to the final frame.' />
        </header>

        {children}
      </div>

    </section >
  )
}
