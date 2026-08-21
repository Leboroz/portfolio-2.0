import { ContentLayout } from "~/layouts/ContentLayout"
import { ProjectCard } from "~/components/ProjectCard"
import { PROJECTS } from "../../lib/data"
import { SectionLayout } from "~/layouts/SectionLayout"

export const Projects = () => {
  return (
    <SectionLayout id="work">
      <ContentLayout
        title='02 / SELECTED WORK'
        subHeading="A few systems I’ve helped ship."
      >
        <div className="flex flex-col lg:flex-row gap-3">
          {
            PROJECTS.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))
          }
        </div>

        <div className="rounded-2xl bg-surface p-5 flex flex-col lg:flex-row g-5 text-terminal-green font-kode-mono text-sm">
          <div className="flex flex-col flex-1 gap-1">
            <span className="font-bold text-xl">03</span>
            <span>SELECTED BUILDS</span>
          </div>
          <div className="flex flex-col flex-1 gap-1">
            <span className="text-white font-bold">REACT + WEBGL</span>
            <span>CORE SURFACE</span>
          </div>
          <div className="flex flex-col flex-1 gap-1">
            <span className="font-bold">SHIPPED</span>
            <span>DEPLOY MODE</span>
          </div>
        </div>
      </ContentLayout>
    </SectionLayout>
  )
}
