import { Environment, KeyboardControls, OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Physics } from "@react-three/rapier"
import { Rubik } from "~/components/rubik"


export const About = (props: {}) => {
  return (
    <section id="about" className="section container bg-p2 pt-20 pb-50 text-p3">
      <div className="w-1/2 h-full cursor-grab">
        <KeyboardControls map={[
          { name: 'top', keys: ['KeyW'] },
          { name: 'bottom', keys: ['KeyS'] },
          { name: 'right', keys: ['KeyD'] },
          { name: 'left', keys: ['KeyA'] },
          { name: 'front', keys: ['KeyQ'] },
          { name: 'back', keys: ['KeyE'] },
          { name: 'counter', keys: ['ShiftLeft'] },
        ]}
        >
          <RubikPanel />
          <Canvas
            camera={{
              fov: 75,
              near: 0.1,
              far: 1000,
              position: [
                -6.170832126477689,
                4.14290430247447,
                4.988205176763846,
              ],
            }}
            dpr={[1, 1.5]}
          >
            <OrbitControls />
            <directionalLight position={[1, 2, 3]} intensity={4.5} />
            <ambientLight intensity={4.5} />
            <Rubik />
          </Canvas>
        </KeyboardControls>
      </div>
    </section>
  )
}
