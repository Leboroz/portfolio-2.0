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
      className={`flex w-fit cursor-pointer items-center gap-3 rounded-full bg-terminal-green px-4 py-2 font-kode-mono font-bold text-ink ${className}`}
      disabled={disabled}
    >
      {text}{icon ? <FontAwesomeIcon icon={icon!} /> : null}
    </button>
  )
}
