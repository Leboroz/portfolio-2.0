import { KeyboardControls, OrbitControls, type KeyboardControlsEntry } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { useState, useMemo } from "react"
import { PrimaryButton } from "~/components/PrimaryButton"
import { Rubik } from "~/components/Rubik"
import { RubikPanel } from "~/components/RubikPanel"
import { ContentLayout } from "~/layouts/ContentLayout"
import { SectionLayout } from "~/layouts/SectionLayout"

export type RubikControls = "top" | "bottom" | "left" | "right" | "back" | "front" | "counter";

export const About = () => {
  const [showDisplay, setShowDisplay] = useState<boolean>(false);
  const keyboardControlsMap = useMemo<KeyboardControlsEntry<RubikControls>[]>(() => [
    { name: 'top', keys: ['KeyW'] },
    { name: 'bottom', keys: ['KeyS'] },
    { name: 'right', keys: ['KeyD'] },
    { name: 'left', keys: ['KeyA'] },
    { name: 'front', keys: ['KeyQ'] },
    { name: 'back', keys: ['KeyE'] },
    { name: 'counter', keys: ['ShiftLeft'] },
  ], []);
  const toggleKeyboardPanel = () => setShowDisplay(prev => !prev)

  return (
    <SectionLayout id="about" className="flex py-5">
      <ContentLayout
        title="Why hire me?"
        subHeading="Senior Front-End Engineer specializing in immersive 3D web experiences"
        className="flex-1 flex flex-col justify-around"
      >
        <p className="text-sm w-2/3">
          I am a performance-driven Full-stack Developer with a unique focus on 3D
          graphics and native web architecture. Combining rigorous backend integration
          experience with a passion for high-end visual engineering, I deliver lean,
          high-quality code and effective, creative solutions to complex technical challenges.
        </p>
        <PrimaryButton type="button" text='Hire me' />
      </ContentLayout>
      <div
        onMouseEnter={toggleKeyboardPanel}
        onMouseLeave={toggleKeyboardPanel}
        className="flex-1 cursor-grab relative hidden lg:block"
      >
        <KeyboardControls map={keyboardControlsMap}>
          {showDisplay && <RubikPanel />}
          <Canvas
            camera={{
              fov: 75,
              near: 0.1,
              far: 1000,
              position: [
                -7.17,
                6.14,
                6.99,
              ],
            }}
            dpr={[1, 1.5]}
          >
            <OrbitControls enableZoom={false} />
            <directionalLight position={[1, 2, 3]} color='#285A48' intensity={4.5} />
            <ambientLight intensity={5} />
            <Rubik />
          </Canvas>
        </KeyboardControls>
      </div>
    </SectionLayout>
  )
}

const QuatityBadge = () => (
  <div>

  </div>
);
