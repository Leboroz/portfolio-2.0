import { PrimaryButton } from "./PrimaryButton";

interface ProjectCardProps {
  title: string;
  summary: string;
  techStack: string[];
  sourceCode?: string;
  liveUrl?: string;
}

export const ProjectCard = ({ title, summary, techStack, sourceCode, liveUrl }: ProjectCardProps) => {
  return (
    <article className="flex flex-1 flex-col gap-3 rounded-2xl bg-surface p-5">
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
      <h3 className="font-kode-mono text-xl font-bold">{title}</h3>
      <p className="
        line-clamp-3
        h-[70px] 
        min-h-15 
        overflow-hidden 
        text-muted
        ">{summary}</p>
      <div className="flex gap-3">
        {liveUrl && <a href={liveUrl} target="_blank" rel="noreferrer"><PrimaryButton type="button" text="LIVE" /></a>}
        {sourceCode && <a href={sourceCode} target="_blank" rel="noreferrer"><PrimaryButton type="button" text="SOURCE" /></a>}
      </div>
      <span className="font-kode-mono text-terminal-green">{techStack.join(' • ')}</span>

    </article>
  )
}
