import { PrimaryButton } from "./PrimaryButton";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  sourceCode?: string;
  liveUrl?: string;
}

export const ProjectCard = ({ title, description, techStack, sourceCode, liveUrl }: ProjectCardProps) => {
  if (title.includes('-')) {
    title = title.split('-').join(' ');
  }
  return (
    <article className="flex flex-col gap-3 rounded-2xl bg-surface p-5">
      <div className="
          flex 
          h-[130px] 
          items-center 
          rounded-2xl
          bg-gradient-to-br
          from-[#35491B] via-[#283518] to-[#171F13]
          ps-5
        ">
        <img src='/logo/react.png' alt="react logo" />
      </div>
      <h3 className="font-kode-mono text-xl font-bold capitalize">{title}</h3>
      <p className="
        line-clamp-3
        h-[70px] 
        min-h-15 
        overflow-hidden 
        text-muted
        ">{description}</p>
      <div className="flex gap-3">
        {liveUrl && <a href={liveUrl} target="_blank" rel="noreferrer"><PrimaryButton type="button" text="LIVE" /></a>}
        {sourceCode && <a href={sourceCode} target="_blank" rel="noreferrer"><PrimaryButton type="button" text="SOURCE" /></a>}
      </div>
      <span className="font-kode-mono text-terminal-green">{techStack.join(' • ')}</span>

    </article>
  )
}
