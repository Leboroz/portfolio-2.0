import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface PrimaryButtonProps {
  text: string;
}
export const PrimaryButton = ({ text }: PrimaryButtonProps) => {
  return (
    <button className="w-fit rounded-full bg-terminal-green text-ink flex gap-3 items-center px-2 py-1">
      {text}<FontAwesomeIcon icon={faArrowRight} />
    </button>
  )
}
