import { SectionLayout } from "~/layouts/SectionLayout"
import { ProjectCard } from "~/components/ProjectCard"
import { PROJECTS } from "../../lib/data"

export const Projects = () => {
  return (
    <SectionLayout
      title='01 / SELECTED WORK'
      subHeading="A few systems I’ve helped ship."
    >
      <div className="flex gap-3">
        {
          PROJECTS.map((project) => (
            <ProjectCard {...project} />
          ))
        }
      </div>
    </SectionLayout>
  )
}
