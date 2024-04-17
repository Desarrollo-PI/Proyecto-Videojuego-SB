import logo from './logo.svg';
import './App.css';

import { OrbitControls } from "@react-three/drei";
import WorldLevelOne from "./game/levelOne/World";
import Lights from "./game/globals/Lights";
import Environments from "./game/globals/Environments";
import { Perf } from "r3f-perf";
import { Suspense } from "react";

function App() {
  return (
    <>
      <OrbitControls  />
      <Suspense fallback={null} >
          <Lights />
          <Environments />
          <WorldLevelOne />
      </Suspense>
    </>
  ) ;
}

export default App;
