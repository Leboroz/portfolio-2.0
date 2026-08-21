import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface TagProps {
  text: string;
}

export const Tag = ({ text }: TagProps) => {
  return (
    <span className="h3 rounded-2xl bg-atomic-black px-5 py-4 text-terminal-green">
      <FontAwesomeIcon icon={faCheck} /> {' ' + text}
    </span>
  )
}
