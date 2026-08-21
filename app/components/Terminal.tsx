import { faCheck, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Tech } from "../../types";


export interface TerminalProps {
  user: string;
  className?: string;
  prompt: string;
  progress: string[];
  stack: Tech[];
}

export const Terminal = ({ user, className, prompt, progress, stack }: TerminalProps) => {
  return (
    <article className={`flex flex flex-col rounded-2xl border border-terminal-line bg-atomic-black font-kode-mono ${className}`}>
      <div className="flex justify-between border-b border-terminal-line px-3 py-2">
        <span className="text-sm text-muted">{`~/${user}/portfolio`}</span>
        <span className="
          relative 
          font-kode-mono
          text-sm font-bold
          text-terminal-green
          before:absolute
          before:top-1/2
          before:-left-3
          before:-translate-y-1/2
          before:font-bold
          before:content-['•']
          ">LIVE</span>
      </div>

      <div className="flex flex-col gap-3 p-6 ">
        <div className="flex items-center gap-2 text-terminal-green"><FontAwesomeIcon icon={faChevronRight} />{prompt}</div>
        <ul className="mb-5">
          {progress.map((output: string) => (<li key={output} className="flex gap-2"><FontAwesomeIcon icon={faCheck} /> {output}</li>))}
        </ul>
        <ul className="flex flex-wrap gap-3">
          {
            stack.map((tech: Tech) => (
              <li key={tech.name}>
                <img className="aspect-square w-10 object-contain" src={tech.icon} alt={tech.name} />
              </li>
            ))
          }
        </ul>
      </div>
    </article>
  )
}
