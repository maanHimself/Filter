import { Canvas } from '@react-three/fiber'
import { Physics, usePlane, useBox } from '@react-three/cannon'
import { OrbitControls,FlyControls,MapControls } from '@react-three/drei'
import { useState } from 'react'

function Plane(props) {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }))
  return (
    <mesh ref={ref}   >
      <planeGeometry args={[100, 100]} />
      <shadowMaterial color="#171717" transparent opacity={0.4} />
    </mesh>
  )
}

function Cube(props) {
  const [hover, setHover] = useState(false)
  const [ref] = useBox(() => ({ mass: 1, position: [0, 5, 0], ...props }))
  return (
    <mesh
      ref={ref}
      receiveShadow
      castShadow
      onPointerOver={() => setHover(true)} 
      onPointerOut={() => setHover(false)}>
      <boxGeometry />
      <meshLambertMaterial color={hover ? "red" : "hotpink" } />
    </mesh>
  )
}

function Phys(props){
  return (
    <>
    <Canvas shadows dpr={[1, 2]} gl={{ alpha: false }} camera={{ position: [-1, 5, 5], fov: 45 }}>
      <color attach="background" args={['lightblue']} />
      <ambientLight />
      <directionalLight position={[10, 10, 10]} castShadow shadow-mapSize={[2048, 2048]} />
      <MapControls />
      <Physics>
        <Plane position={[0, -2.5, 0]} />
        <Cube position={[0.1, 5, 0]} />
        <Cube position={[0, 10, -1]} />
        <Cube position={[0, 20, -2]} />
      </Physics>
  </Canvas>
  </>
  )
}

export default Phys