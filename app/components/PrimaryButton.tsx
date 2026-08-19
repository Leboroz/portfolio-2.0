import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface PrimaryButtonProps {
  text: string;
}
export const PrimaryButton = ({ text }: PrimaryButtonProps) => {
  return (
    <button className="w-fit rounded-full font-kode-mono bg-terminal-green text-ink flex gap-3 items-center px-4 py-2">
      {text}<FontAwesomeIcon icon={faArrowRight} />
    </button>
  )
}
