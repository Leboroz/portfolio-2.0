interface ProjectCardProps {
  title: string;
  summary: string;
}

export const ProjectCard = ({ title, summary }: ProjectCardProps) => {
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
      <p className="text-muted">{summary}</p>

    </article>
  )
}
