import { ExperienceGrid } from "~/components/experienceGrid"
import { PageTitle } from "~/components/pageTitle"
import { MY_EXPERIENCE } from "../../lib/data"

export const Experience = (props: {}) => {
  return (
    <section className="section container">
      <div className="content">
        <PageTitle title="My experience" />
        <div>
          <ExperienceGrid experience={MY_EXPERIENCE} />
        </div>
      </div>
    </section >
  )
}
