import { ContentLayout } from "~/layouts/ContentLayout"
import { ProjectCard } from "~/components/ProjectCard"
import { SectionLayout } from "~/layouts/SectionLayout"
import { useEffect, useState } from "react"
import getProjects from "~/utils/getProjects"
import type { Project } from "../../types"

export const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  useEffect(() => {
    const githubHandle: string = import.meta.env.VITE_GITHUB_HANDLE;

    getProjects(githubHandle).then((projects: Project[]) => {
      setProjects(projects)
    })
  }, [])

  return (
    <SectionLayout id="work">
      <ContentLayout
        title='02 / SELECTED WORK'
        subHeading="A few systems I’ve ship."
      >
        <div className="grid grid-cols-3 gap-3 lg:flex-row lg:flex-wrap lg:overflow-y-scroll">
          {
            projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))
          }
        </div>

        <div className="flex flex-col gap-5 rounded-2xl bg-surface p-5 font-kode-mono text-sm text-terminal-green lg:flex-row">
          <div className="flex flex-1 flex-col gap-1">
            <span className="text-xl font-bold">{projects.length}</span>
            <span>SELECTED BUILDS</span>
          </div>
          <div className="flex flex-1 flex-col gap-1">
            <span className="font-bold text-white">REACT</span>
            <span>CORE SURFACE</span>
          </div>
          <div className="flex flex-1 flex-col gap-1">
            <span className="font-bold">SHIPPED</span>
            <span>DEPLOY MODE</span>
          </div>
        </div>
      </ContentLayout>
    </SectionLayout>
  )
}
