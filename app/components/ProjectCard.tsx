interface ProjectCardProps {
  title: string;
  summary: string;
  techStack: string[];
}

export const ProjectCard = ({ title, summary, techStack }: ProjectCardProps) => {
  return (
    <article className="rounded-2xl bg-surface flex flex-col gap-3 flex-1 p-5">
      <div className="
          h-[130px] 
          rounded-2xl 
          bg-gradient-to-br 
          from-[#35491B]
          via-[#283518]
          to-[#171F13]
          flex items-center justify-center
        ">

      </div>
      <h3 className="font-kode-mono font-bold text-xl">{title}</h3>
      <p className="
        text-muted
        min-h-[60px] 
        h-[70px] 
        overflow-hidden 
        line-clamp-3
        ">{summary}</p>
      <span className="text-terminal-green font-kode-mono">{techStack.join(' • ')}</span>

    </article>
  )
}
