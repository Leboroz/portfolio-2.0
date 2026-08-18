import * as THREE from 'three'
import { useRef, useEffect, type JSX } from 'react'
import { useGLTF, useKeyboardControls } from '@react-three/drei'
import type { GLTF } from 'three-stdlib'
import { useFrame } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    cube_1: THREE.Mesh
    cube_2: THREE.Mesh
    cube_3: THREE.Mesh
    cube_4: THREE.Mesh
    cube_5: THREE.Mesh
    cube_6: THREE.Mesh
    rbw_1: THREE.Mesh
    rbw_2: THREE.Mesh
    rbw_3: THREE.Mesh
    rbw_4: THREE.Mesh
    rbw_5: THREE.Mesh
    rbw_6: THREE.Mesh
    rw_1: THREE.Mesh
    rw_2: THREE.Mesh
    rw_3: THREE.Mesh
    rw_4: THREE.Mesh
    rw_5: THREE.Mesh
    rw_6: THREE.Mesh
    rwg_1: THREE.Mesh
    rwg_2: THREE.Mesh
    rwg_3: THREE.Mesh
    rwg_4: THREE.Mesh
    rwg_5: THREE.Mesh
    rwg_6: THREE.Mesh
    rg_1: THREE.Mesh
    rg_2: THREE.Mesh
    rg_3: THREE.Mesh
    rg_4: THREE.Mesh
    rg_5: THREE.Mesh
    rg_6: THREE.Mesh
    r_1: THREE.Mesh
    r_2: THREE.Mesh
    r_3: THREE.Mesh
    r_4: THREE.Mesh
    r_5: THREE.Mesh
    r_6: THREE.Mesh
    rb_1: THREE.Mesh
    rb_2: THREE.Mesh
    rb_3: THREE.Mesh
    rb_4: THREE.Mesh
    rb_5: THREE.Mesh
    rb_6: THREE.Mesh
    ryb_1: THREE.Mesh
    ryb_2: THREE.Mesh
    ryb_3: THREE.Mesh
    ryb_4: THREE.Mesh
    ryb_5: THREE.Mesh
    ryb_6: THREE.Mesh
    ry_1: THREE.Mesh
    ry_2: THREE.Mesh
    ry_3: THREE.Mesh
    ry_4: THREE.Mesh
    ry_5: THREE.Mesh
    ry_6: THREE.Mesh
    ryg_1: THREE.Mesh
    ryg_2: THREE.Mesh
    ryg_3: THREE.Mesh
    ryg_4: THREE.Mesh
    ryg_5: THREE.Mesh
    ryg_6: THREE.Mesh
    w_1: THREE.Mesh
    w_2: THREE.Mesh
    w_3: THREE.Mesh
    w_4: THREE.Mesh
    w_5: THREE.Mesh
    w_6: THREE.Mesh
    wg_1: THREE.Mesh
    wg_2: THREE.Mesh
    wg_3: THREE.Mesh
    wg_4: THREE.Mesh
    wg_5: THREE.Mesh
    wg_6: THREE.Mesh
    wb_1: THREE.Mesh
    wb_2: THREE.Mesh
    wb_3: THREE.Mesh
    wb_4: THREE.Mesh
    wb_5: THREE.Mesh
    wb_6: THREE.Mesh
    wbo_1: THREE.Mesh
    wbo_2: THREE.Mesh
    wbo_3: THREE.Mesh
    wbo_4: THREE.Mesh
    wbo_5: THREE.Mesh
    wbo_6: THREE.Mesh
    wo_1: THREE.Mesh
    wo_2: THREE.Mesh
    wo_3: THREE.Mesh
    wo_4: THREE.Mesh
    wo_5: THREE.Mesh
    wo_6: THREE.Mesh
    wgo_1: THREE.Mesh
    wgo_2: THREE.Mesh
    wgo_3: THREE.Mesh
    wgo_4: THREE.Mesh
    wgo_5: THREE.Mesh
    wgo_6: THREE.Mesh
    g_1: THREE.Mesh
    g_2: THREE.Mesh
    g_3: THREE.Mesh
    g_4: THREE.Mesh
    g_5: THREE.Mesh
    g_6: THREE.Mesh
    gy_1: THREE.Mesh
    gy_2: THREE.Mesh
    gy_3: THREE.Mesh
    gy_4: THREE.Mesh
    gy_5: THREE.Mesh
    gy_6: THREE.Mesh
    go_1: THREE.Mesh
    go_2: THREE.Mesh
    go_3: THREE.Mesh
    go_4: THREE.Mesh
    go_5: THREE.Mesh
    go_6: THREE.Mesh
    goy_1: THREE.Mesh
    goy_2: THREE.Mesh
    goy_3: THREE.Mesh
    goy_4: THREE.Mesh
    goy_5: THREE.Mesh
    goy_6: THREE.Mesh
    y_1: THREE.Mesh
    y_2: THREE.Mesh
    y_3: THREE.Mesh
    y_4: THREE.Mesh
    y_5: THREE.Mesh
    y_6: THREE.Mesh
    yb_1: THREE.Mesh
    yb_2: THREE.Mesh
    yb_3: THREE.Mesh
    yb_4: THREE.Mesh
    yb_5: THREE.Mesh
    yb_6: THREE.Mesh
    b_1: THREE.Mesh
    b_2: THREE.Mesh
    b_3: THREE.Mesh
    b_4: THREE.Mesh
    b_5: THREE.Mesh
    b_6: THREE.Mesh
    yo_1: THREE.Mesh
    yo_2: THREE.Mesh
    yo_3: THREE.Mesh
    yo_4: THREE.Mesh
    yo_5: THREE.Mesh
    yo_6: THREE.Mesh
    yob_1: THREE.Mesh
    yob_2: THREE.Mesh
    yob_3: THREE.Mesh
    yob_4: THREE.Mesh
    yob_5: THREE.Mesh
    yob_6: THREE.Mesh
    bo_1: THREE.Mesh
    bo_2: THREE.Mesh
    bo_3: THREE.Mesh
    bo_4: THREE.Mesh
    bo_5: THREE.Mesh
    bo_6: THREE.Mesh
    o_1: THREE.Mesh
    o_2: THREE.Mesh
    o_3: THREE.Mesh
    o_4: THREE.Mesh
    o_5: THREE.Mesh
    o_6: THREE.Mesh
  }
  materials: {
    base: THREE.MeshStandardMaterial
    yellow: THREE.MeshStandardMaterial
    red: THREE.MeshStandardMaterial
    blue: THREE.MeshStandardMaterial
    orange: THREE.MeshStandardMaterial
    green: THREE.MeshStandardMaterial
  }
}

export enum Movement {
  top = 'top',
  bottom = 'bottom',
  right = 'right',
  left = 'left',
  front = 'front',
  back = 'back',
}


type RubikMove = { coordinates: number, orientation: number, axis: 'x' | 'y' | 'z' };

const rubikMovesMap: Record<Movement, RubikMove> = {
  [Movement.top]: {
    orientation: -1,
    coordinates: 2,
    axis: 'y',
  },
  [Movement.bottom]: {
    coordinates: -2,
    orientation: 1,
    axis: 'y',
  },
  [Movement.right]: {
    coordinates: 2,
    orientation: -1,
    axis: 'x',
  },
  [Movement.left]: {
    coordinates: -2,
    orientation: 1,
    axis: 'x',
  },
  [Movement.front]: {
    coordinates: 2,
    orientation: -1,
    axis: 'z',
  },
  [Movement.back]: {
    coordinates: -2,
    orientation: 1,
    axis: 'z',
  }
}

export function Rubik(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/rubik.glb') as GLTFResult;
  const rootRef = useRef<THREE.Group>(null!);
  const pivotRef = useRef<THREE.Group>(null!);
  const movementQueue = useRef<{ move: string, orientation: number }[]>([]);
  const moving = useRef<boolean>(false)

  const [subcribeKeys, getKeys] = useKeyboardControls();

  const applyTorque = (axis: 'x' | 'y' | 'z', coordinate: number, torqueStrength: number, orientation: number) => {
    const groupsToMove: THREE.Object3D[] = []
    rootRef.current.children.forEach((child) => {
      if (child.type === 'Group' && Math.round(child.position[axis]) === coordinate) {
        groupsToMove.push(child)
      }
    })

    groupsToMove.forEach((obj) => pivotRef.current.attach(obj))
    const targetRotation = Math.PI / 2 * orientation;

    pivotRef.current.rotation[axis] += torqueStrength * orientation;
    pivotRef.current.updateMatrixWorld();
    if (Math.abs(pivotRef.current.rotation[axis]) > Math.abs(targetRotation)) {
      pivotRef.current.rotation[axis] = targetRotation;
      pivotRef.current.updateMatrixWorld();
      groupsToMove.forEach((obj) => rootRef.current.attach(obj));
      movementQueue.current.splice(0, 1);

      moving.current = false;
    }
    groupsToMove.forEach((obj) => rootRef.current.attach(obj))
    pivotRef.current.updateMatrixWorld();
  }

  useFrame((_state, delta) => {

    const torqueStrength = 18 * delta;

    if (movementQueue.current.length > 0) {
      const currentMovementQueued = movementQueue.current[0];
      let { axis, coordinates, orientation }: RubikMove = rubikMovesMap[currentMovementQueued.move];
      orientation *= currentMovementQueued.orientation;

      if (!moving.current) {
        pivotRef.current.rotation.set(0, 0, 0)
        pivotRef.current.updateMatrixWorld()
        moving.current = true;
      }
      applyTorque(axis, coordinates, torqueStrength, orientation);
    }
  })


  const addMovement = (move: string) => {
    const { counter } = getKeys();
    movementQueue.current.push({ move, orientation: counter ? -1 : 1 });
  }

  useEffect(() => {
    const keys = getKeys();
    Object.keys(keys).forEach((move: string) => {
      if (move === 'counter') return;

      subcribeKeys(
        (state) => state[move],
        (state) => {
          if (state) addMovement(Movement[move as keyof typeof Movement]);
        },
      )
    })

  }, [])


  return (
    <group {...props} dispose={null}>
      <group ref={pivotRef} />

      <group ref={rootRef}>
        <group name="rbw" position={[-2, 2, 2]}>
          <mesh name="rbw_1" geometry={nodes.rbw_1.geometry} material={materials.base} />
          <mesh name="rbw_2" geometry={nodes.rbw_2.geometry} material={materials.base} />
          <mesh name="rbw_3" geometry={nodes.rbw_3.geometry} material={materials.red} />
          <mesh name="rbw_4" geometry={nodes.rbw_4.geometry} material={materials.blue} />
          <mesh name="rbw_5" geometry={nodes.rbw_5.geometry} material={materials.base} />
          <mesh name="rbw_6" geometry={nodes.rbw_6.geometry} material={materials.base} />
        </group>
        <group name="rw" position={[0, 2, 2]}>
          <mesh name="rw_1" geometry={nodes.rw_1.geometry} material={materials.base} />
          <mesh name="rw_2" geometry={nodes.rw_2.geometry} material={materials.base} />
          <mesh name="rw_3" geometry={nodes.rw_3.geometry} material={materials.red} />
          <mesh name="rw_4" geometry={nodes.rw_4.geometry} material={materials.base} />
          <mesh name="rw_5" geometry={nodes.rw_5.geometry} material={materials.base} />
          <mesh name="rw_6" geometry={nodes.rw_6.geometry} material={materials.base} />
        </group>
        <group name="rwg" position={[2, 2, 2]}>
          <mesh name="rwg_1" geometry={nodes.rwg_1.geometry} material={materials.base} />
          <mesh name="rwg_2" geometry={nodes.rwg_2.geometry} material={materials.base} />
          <mesh name="rwg_3" geometry={nodes.rwg_3.geometry} material={materials.red} />
          <mesh name="rwg_4" geometry={nodes.rwg_4.geometry} material={materials.base} />
          <mesh name="rwg_5" geometry={nodes.rwg_5.geometry} material={materials.base} />
          <mesh name="rwg_6" geometry={nodes.rwg_6.geometry} material={materials.green} />
        </group>
        <group name="rg" position={[2, 2, 0]}>
          <mesh name="rg_1" geometry={nodes.rg_1.geometry} material={materials.base} />
          <mesh name="rg_2" geometry={nodes.rg_2.geometry} material={materials.base} />
          <mesh name="rg_3" geometry={nodes.rg_3.geometry} material={materials.red} />
          <mesh name="rg_4" geometry={nodes.rg_4.geometry} material={materials.base} />
          <mesh name="rg_5" geometry={nodes.rg_5.geometry} material={materials.base} />
          <mesh name="rg_6" geometry={nodes.rg_6.geometry} material={materials.green} />
        </group>
        <group name="r" position={[0, 2, 0]}>
          <mesh name="r_1" geometry={nodes.r_1.geometry} material={materials.base} />
          <mesh name="r_2" geometry={nodes.r_2.geometry} material={materials.base} />
          <mesh name="r_3" geometry={nodes.r_3.geometry} material={materials.red} />
          <mesh name="r_4" geometry={nodes.r_4.geometry} material={materials.base} />
          <mesh name="r_5" geometry={nodes.r_5.geometry} material={materials.base} />
          <mesh name="r_6" geometry={nodes.r_6.geometry} material={materials.base} />
        </group>
        <group name="rb" position={[-2, 2, 0]}>
          <mesh name="rb_1" geometry={nodes.rb_1.geometry} material={materials.base} />
          <mesh name="rb_2" geometry={nodes.rb_2.geometry} material={materials.base} />
          <mesh name="rb_3" geometry={nodes.rb_3.geometry} material={materials.red} />
          <mesh name="rb_4" geometry={nodes.rb_4.geometry} material={materials.blue} />
          <mesh name="rb_5" geometry={nodes.rb_5.geometry} material={materials.base} />
          <mesh name="rb_6" geometry={nodes.rb_6.geometry} material={materials.base} />
        </group>
        <group name="ryb" position={[-2, 2, -2]}>
          <mesh name="ryb_1" geometry={nodes.ryb_1.geometry} material={materials.base} />
          <mesh name="ryb_2" geometry={nodes.ryb_2.geometry} material={materials.yellow} />
          <mesh name="ryb_3" geometry={nodes.ryb_3.geometry} material={materials.red} />
          <mesh name="ryb_4" geometry={nodes.ryb_4.geometry} material={materials.blue} />
          <mesh name="ryb_5" geometry={nodes.ryb_5.geometry} material={materials.base} />
          <mesh name="ryb_6" geometry={nodes.ryb_6.geometry} material={materials.base} />
        </group>
        <group name="ry" position={[0, 2, -2]}>
          <mesh name="ry_1" geometry={nodes.ry_1.geometry} material={materials.base} />
          <mesh name="ry_2" geometry={nodes.ry_2.geometry} material={materials.yellow} />
          <mesh name="ry_3" geometry={nodes.ry_3.geometry} material={materials.red} />
          <mesh name="ry_4" geometry={nodes.ry_4.geometry} material={materials.base} />
          <mesh name="ry_5" geometry={nodes.ry_5.geometry} material={materials.base} />
          <mesh name="ry_6" geometry={nodes.ry_6.geometry} material={materials.base} />
        </group>
        <group name="ryg" position={[2, 2, -2]}>
          <mesh name="ryg_1" geometry={nodes.ryg_1.geometry} material={materials.base} />
          <mesh name="ryg_2" geometry={nodes.ryg_2.geometry} material={materials.yellow} />
          <mesh name="ryg_3" geometry={nodes.ryg_3.geometry} material={materials.red} />
          <mesh name="ryg_4" geometry={nodes.ryg_4.geometry} material={materials.base} />
          <mesh name="ryg_5" geometry={nodes.ryg_5.geometry} material={materials.base} />
          <mesh name="ryg_6" geometry={nodes.ryg_6.geometry} material={materials.green} />
        </group>
        <group name="w" position={[0, 0, 2]}>
          <mesh name="w_1" geometry={nodes.w_1.geometry} material={materials.base} />
          <mesh name="w_2" geometry={nodes.w_2.geometry} material={materials.base} />
          <mesh name="w_3" geometry={nodes.w_3.geometry} material={materials.base} />
          <mesh name="w_4" geometry={nodes.w_4.geometry} material={materials.base} />
          <mesh name="w_5" geometry={nodes.w_5.geometry} material={materials.base} />
          <mesh name="w_6" geometry={nodes.w_6.geometry} material={materials.base} />
        </group>
        <group name="wg" position={[2, 0, 2]}>
          <mesh name="wg_1" geometry={nodes.wg_1.geometry} material={materials.base} />
          <mesh name="wg_2" geometry={nodes.wg_2.geometry} material={materials.base} />
          <mesh name="wg_3" geometry={nodes.wg_3.geometry} material={materials.base} />
          <mesh name="wg_4" geometry={nodes.wg_4.geometry} material={materials.base} />
          <mesh name="wg_5" geometry={nodes.wg_5.geometry} material={materials.base} />
          <mesh name="wg_6" geometry={nodes.wg_6.geometry} material={materials.green} />
        </group>
        <group name="wb" position={[-2, 0, 2]}>
          <mesh name="wb_1" geometry={nodes.wb_1.geometry} material={materials.base} />
          <mesh name="wb_2" geometry={nodes.wb_2.geometry} material={materials.base} />
          <mesh name="wb_3" geometry={nodes.wb_3.geometry} material={materials.base} />
          <mesh name="wb_4" geometry={nodes.wb_4.geometry} material={materials.blue} />
          <mesh name="wb_5" geometry={nodes.wb_5.geometry} material={materials.base} />
          <mesh name="wb_6" geometry={nodes.wb_6.geometry} material={materials.base} />
        </group>
        <group name="wbo" position={[-2, -2, 2]}>
          <mesh name="wbo_1" geometry={nodes.wbo_1.geometry} material={materials.base} />
          <mesh name="wbo_2" geometry={nodes.wbo_2.geometry} material={materials.base} />
          <mesh name="wbo_3" geometry={nodes.wbo_3.geometry} material={materials.base} />
          <mesh name="wbo_4" geometry={nodes.wbo_4.geometry} material={materials.blue} />
          <mesh name="wbo_5" geometry={nodes.wbo_5.geometry} material={materials.orange} />
          <mesh name="wbo_6" geometry={nodes.wbo_6.geometry} material={materials.base} />
        </group>
        <group name="wo" position={[0, -2, 2]}>
          <mesh name="wo_1" geometry={nodes.wo_1.geometry} material={materials.base} />
          <mesh name="wo_2" geometry={nodes.wo_2.geometry} material={materials.base} />
          <mesh name="wo_3" geometry={nodes.wo_3.geometry} material={materials.base} />
          <mesh name="wo_4" geometry={nodes.wo_4.geometry} material={materials.base} />
          <mesh name="wo_5" geometry={nodes.wo_5.geometry} material={materials.orange} />
          <mesh name="wo_6" geometry={nodes.wo_6.geometry} material={materials.base} />
        </group>
        <group name="wgo" position={[2, -2, 2]}>
          <mesh name="wgo_1" geometry={nodes.wgo_1.geometry} material={materials.base} />
          <mesh name="wgo_2" geometry={nodes.wgo_2.geometry} material={materials.base} />
          <mesh name="wgo_3" geometry={nodes.wgo_3.geometry} material={materials.base} />
          <mesh name="wgo_4" geometry={nodes.wgo_4.geometry} material={materials.base} />
          <mesh name="wgo_5" geometry={nodes.wgo_5.geometry} material={materials.orange} />
          <mesh name="wgo_6" geometry={nodes.wgo_6.geometry} material={materials.green} />
        </group>
        <group name="g" position={[2, 0, 0]}>
          <mesh name="g_1" geometry={nodes.g_1.geometry} material={materials.base} />
          <mesh name="g_2" geometry={nodes.g_2.geometry} material={materials.base} />
          <mesh name="g_3" geometry={nodes.g_3.geometry} material={materials.base} />
          <mesh name="g_4" geometry={nodes.g_4.geometry} material={materials.base} />
          <mesh name="g_5" geometry={nodes.g_5.geometry} material={materials.base} />
          <mesh name="g_6" geometry={nodes.g_6.geometry} material={materials.green} />
        </group>
        <group name="gy" position={[2, 0, -2]}>
          <mesh name="gy_1" geometry={nodes.gy_1.geometry} material={materials.base} />
          <mesh name="gy_2" geometry={nodes.gy_2.geometry} material={materials.yellow} />
          <mesh name="gy_3" geometry={nodes.gy_3.geometry} material={materials.base} />
          <mesh name="gy_4" geometry={nodes.gy_4.geometry} material={materials.base} />
          <mesh name="gy_5" geometry={nodes.gy_5.geometry} material={materials.base} />
          <mesh name="gy_6" geometry={nodes.gy_6.geometry} material={materials.green} />
        </group>
        <group name="go" position={[2, -2, 0]}>
          <mesh name="go_1" geometry={nodes.go_1.geometry} material={materials.base} />
          <mesh name="go_2" geometry={nodes.go_2.geometry} material={materials.base} />
          <mesh name="go_3" geometry={nodes.go_3.geometry} material={materials.base} />
          <mesh name="go_4" geometry={nodes.go_4.geometry} material={materials.base} />
          <mesh name="go_5" geometry={nodes.go_5.geometry} material={materials.orange} />
          <mesh name="go_6" geometry={nodes.go_6.geometry} material={materials.green} />
        </group>
        <group name="goy" position={[2, -2, -2]}>
          <mesh name="goy_1" geometry={nodes.goy_1.geometry} material={materials.base} />
          <mesh name="goy_2" geometry={nodes.goy_2.geometry} material={materials.yellow} />
          <mesh name="goy_3" geometry={nodes.goy_3.geometry} material={materials.base} />
          <mesh name="goy_4" geometry={nodes.goy_4.geometry} material={materials.base} />
          <mesh name="goy_5" geometry={nodes.goy_5.geometry} material={materials.orange} />
          <mesh name="goy_6" geometry={nodes.goy_6.geometry} material={materials.green} />
        </group>
        <group name="y" position={[0, 0, -2]}>
          <mesh name="y_1" geometry={nodes.y_1.geometry} material={materials.base} />
          <mesh name="y_2" geometry={nodes.y_2.geometry} material={materials.yellow} />
          <mesh name="y_3" geometry={nodes.y_3.geometry} material={materials.base} />
          <mesh name="y_4" geometry={nodes.y_4.geometry} material={materials.base} />
          <mesh name="y_5" geometry={nodes.y_5.geometry} material={materials.base} />
          <mesh name="y_6" geometry={nodes.y_6.geometry} material={materials.base} />
        </group>
        <group name="yb" position={[-2, 0, -2]}>
          <mesh name="yb_1" geometry={nodes.yb_1.geometry} material={materials.base} />
          <mesh name="yb_2" geometry={nodes.yb_2.geometry} material={materials.yellow} />
          <mesh name="yb_3" geometry={nodes.yb_3.geometry} material={materials.base} />
          <mesh name="yb_4" geometry={nodes.yb_4.geometry} material={materials.blue} />
          <mesh name="yb_5" geometry={nodes.yb_5.geometry} material={materials.base} />
          <mesh name="yb_6" geometry={nodes.yb_6.geometry} material={materials.base} />
        </group>
        <group name="b" position={[-2, 0, 0]}>
          <mesh name="b_1" geometry={nodes.b_1.geometry} material={materials.base} />
          <mesh name="b_2" geometry={nodes.b_2.geometry} material={materials.base} />
          <mesh name="b_3" geometry={nodes.b_3.geometry} material={materials.base} />
          <mesh name="b_4" geometry={nodes.b_4.geometry} material={materials.blue} />
          <mesh name="b_5" geometry={nodes.b_5.geometry} material={materials.base} />
          <mesh name="b_6" geometry={nodes.b_6.geometry} material={materials.base} />
        </group>
        <group name="yo" position={[0, -2, -2]}>
          <mesh name="yo_1" geometry={nodes.yo_1.geometry} material={materials.base} />
          <mesh name="yo_2" geometry={nodes.yo_2.geometry} material={materials.yellow} />
          <mesh name="yo_3" geometry={nodes.yo_3.geometry} material={materials.base} />
          <mesh name="yo_4" geometry={nodes.yo_4.geometry} material={materials.base} />
          <mesh name="yo_5" geometry={nodes.yo_5.geometry} material={materials.orange} />
          <mesh name="yo_6" geometry={nodes.yo_6.geometry} material={materials.base} />
        </group>
        <group name="yob" position={[-2, -2, -2]}>
          <mesh name="yob_1" geometry={nodes.yob_1.geometry} material={materials.base} />
          <mesh name="yob_2" geometry={nodes.yob_2.geometry} material={materials.yellow} />
          <mesh name="yob_3" geometry={nodes.yob_3.geometry} material={materials.base} />
          <mesh name="yob_4" geometry={nodes.yob_4.geometry} material={materials.blue} />
          <mesh name="yob_5" geometry={nodes.yob_5.geometry} material={materials.orange} />
          <mesh name="yob_6" geometry={nodes.yob_6.geometry} material={materials.base} />
        </group>
        <group name="bo" position={[-2, -2, 0]}>
          <mesh name="bo_1" geometry={nodes.bo_1.geometry} material={materials.base} />
          <mesh name="bo_2" geometry={nodes.bo_2.geometry} material={materials.base} />
          <mesh name="bo_3" geometry={nodes.bo_3.geometry} material={materials.base} />
          <mesh name="bo_4" geometry={nodes.bo_4.geometry} material={materials.blue} />
          <mesh name="bo_5" geometry={nodes.bo_5.geometry} material={materials.orange} />
          <mesh name="bo_6" geometry={nodes.bo_6.geometry} material={materials.base} />
        </group>
        <group name="o" position={[0, -2, 0]}>
          <mesh name="o_1" geometry={nodes.o_1.geometry} material={materials.base} />
          <mesh name="o_2" geometry={nodes.o_2.geometry} material={materials.base} />
          <mesh name="o_3" geometry={nodes.o_3.geometry} material={materials.base} />
          <mesh name="o_4" geometry={nodes.o_4.geometry} material={materials.base} />
          <mesh name="o_5" geometry={nodes.o_5.geometry} material={materials.orange} />
          <mesh name="o_6" geometry={nodes.o_6.geometry} material={materials.base} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/rubik.glb')
