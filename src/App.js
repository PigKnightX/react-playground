// import logo from './logo.svg';
import './App.css';
// import * as Three from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei'

// function Box(props) {
//   return (
//     <mesh></mesh>
//   );
// }

function App() {
  return (
    <div id="canvas-container">
      <Canvas
        shadows={true}
        camera={ {fov: 45, near: 1, far: 500, position: [0, 0, 5]}}
        className="canvas-ele"
      >
        <ambientLight intensity={0.5} />
        <directionalLight color="red" position={[1, 1, 5]} />
        <OrbitControls />
        <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
