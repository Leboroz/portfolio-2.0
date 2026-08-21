import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from '@fortawesome/fontawesome-svg-core';

interface PrimaryButtonProps {
  text: string;
  type: "submit" | "reset" | "button" | undefined;
  disabled?: boolean;
  icon?: IconProp;
  className?: string;
}
export const PrimaryButton = ({ text, type, disabled = false, icon, className }: PrimaryButtonProps) => {
  return (
    <button
      type={type}
      className={`w-fit cursor-pointer rounded-full font-kode-mono font-bold bg-terminal-green text-ink flex gap-3 items-center px-4 py-2 ${className}`}
      disabled={disabled}
    >
      {text}{icon ? <FontAwesomeIcon icon={icon!} /> : null}
    </button>
  )
}
