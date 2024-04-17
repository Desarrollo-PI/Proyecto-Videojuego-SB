import logo from './logo.svg';
import './App.css';

import { OrbitControls } from "@react-three/drei";
import WorldLevelOne, {WorldLevelOneWithPhysisc} from "./game/levelOne/World";
import Lights from "./game/globals/Lights";
import Environments from "./game/globals/Environments";
import { Perf } from "r3f-perf";
import { Suspense } from "react";
import { Physics } from '@react-three/rapier';

function App() {
  return (
    <>
      <OrbitControls  />
      <Suspense fallback={null} >
          <Lights />
          <Environments />
          <Physics debug>
            <WorldLevelOneWithPhysisc />
          </Physics>
      </Suspense>
    </>
  ) ;
}

export default App;
