interface ProjectCardProps {
  title: string;
  summary: string;
  techStack: string[];
}

export const ProjectCard = ({ title, summary, techStack }: ProjectCardProps) => {
  return (
    <article className="flex flex-1 flex-col gap-3 rounded-2xl bg-surface p-5">
      <div className="
          flex 
          h-[130px] 
          items-center 
          justify-center
          rounded-2xl
          bg-gradient-to-br
          from-[#35491B] via-[#283518] to-[#171F13]
        ">

      </div>
      <h3 className="font-kode-mono text-xl font-bold">{title}</h3>
      <p className="
        line-clamp-3
        h-[70px] 
        min-h-15 
        overflow-hidden 
        text-muted
        ">{summary}</p>
      <span className="font-kode-mono text-terminal-green">{techStack.join(' • ')}</span>

    </article>
  )
}
