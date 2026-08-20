import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface TagProps {
  text: string;
}

export const Tag = ({ text }: TagProps) => {
  return (
    <span className="bg-black h3 text-terminal-green rounded-2xl py-4 px-5">
      <FontAwesomeIcon icon={faCheck} /> {' ' + text}
    </span>
  )
}
