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
    <div className="absolute w-full h-full top-0 left-0 z-10 pointer-events-none">
      <div className="absolute bottom-0 left-0">
        <div className="flex gap-2 mb-3">
          <RubikPanelButton keyCap="q" pressed={front} />
          <RubikPanelButton keyCap="w" pressed={top} />
          <RubikPanelButton keyCap="e" pressed={back} />
        </div>
        <div className="flex gap-2 ms-3 mb-3">
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
    <div className={`rounded border border-terminal-line block w-15 pt-3 ps-3 capitalize ${props.long ? 'w-30 h-15' : 'aspect-square w-15'} ${props.pressed ? ' bg-terminal-green text-ink' : ''}`}>{props.keyCap}</div>
  )
}
