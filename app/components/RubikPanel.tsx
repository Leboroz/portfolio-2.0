import { faArrowRotateBackward, faArrowRotateForward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useKeyboardControls } from "@react-three/drei";
import type { RubikControls } from "~/portfolio/About";

interface RubikPanelProps { }

export const RubikPanel = (props: RubikPanelProps) => {
  const controls = useKeyboardControls<RubikControls>(state => state);
  const { top, bottom, left, right, back, front, counter } = controls;
  console.log(top)

  return (
    <div className="pointer-events-none absolute top-0 left-0 z-10 size-full">
      <div className="absolute bottom-0 left-0">
        <div className="mb-3 flex gap-2">
          <RubikPanelButton keyCap="q" pressed={front} />
          <RubikPanelButton keyCap="w" pressed={top} />
          <RubikPanelButton keyCap="e" pressed={back} />
        </div>
        <div className="ms-3 mb-3 flex gap-2">
          <RubikPanelButton keyCap="a" pressed={left} />
          <RubikPanelButton keyCap="s" pressed={bottom} />
          <RubikPanelButton keyCap="d" pressed={right} />
        </div>
        <div className="flex">
          <RubikPanelButton keyCap="shift" long pressed={counter} />
          <div className="p-5"><FontAwesomeIcon icon={counter ? faArrowRotateBackward : faArrowRotateForward} size="lg" /></div>
        </div>
      </div>
    </div>
  )
}

interface RubikPanelButtonProps {
  keyCap: string;
  pressed: boolean;
  long?: boolean;
}

const RubikPanelButton = (props: RubikPanelButtonProps) => {
  return (
    <div className={`block w-15 rounded border border-terminal-line ps-3 pt-3 capitalize ${props.long ? 'h-15 w-30' : 'aspect-square w-15'} ${props.pressed ? ' bg-terminal-green text-ink' : ''}`}>{props.keyCap}</div>
  )
}
