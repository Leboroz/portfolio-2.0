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
    <article className={`flex flex flex-col bg-black border border-muted rounded-2xl font-kode-mono ${className}`}>
      <div className="flex justify-between border-b border-muted py-2 px-3">
        <span className="text-muted text-sm">{`~/${user}/portfolio`}</span>
        <span className="relative font-kode-mono text-sm text-terminal-green before:content-['•'] before:absolute before:-left-3 before:font-bold">LIVE</span>
      </div>

      <div className="flex flex-col gap-3 p-6 ">
        <div className="text-terminal-green flex gap-2 items-center"><FontAwesomeIcon icon={faChevronRight} />{prompt}</div>
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
