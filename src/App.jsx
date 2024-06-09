import Spline from '@splinetool/react-spline';
import LandingPage from './landingpage/LandingPage'
import TitlePage from './landingpage/TitlePage';
import TheatrePage from './landingpage/TheatrePage';
import * as React from 'react';
import { useRef } from 'react';

export default function App() {
  const [scene, setScene] = React.useState(0);
  const [position, setPosition] = React.useState(0);
  const [prevPosition, setPrevPosition] = React.useState(0);
  /** For storing camera positions */
  const [myDict, setMyDict] = React.useState({
    'Cube 7': 0,
    'Character': 1,
    'table': 2,
    'Cameracine': 3,
    'Group 6': 4,
    'Sunglasses': 5
  });
  /* SceneId and position are for rendering 2D elements. 3D scenes are managed by Spline */
  const spline = useRef();
  /** Refer to the spline app here */
  function onLoad(splineApp) {
    spline.current = splineApp;
  }
  const setSceneId = (id) => {
    setScene(id);
    if (id === 1) {
      spline.current.emitEvent('mouseDown', 'Sphere');
    }
    else if (id === 2) {
      spline.current.emitEvent('mouseDown', 'Cube 5');
    }
  }
  const restorePosition = () => {
    setPosition(0);
    spline.current.emitEvent('mouseDown', 'Cube 7');
  }
  /* Mousedown event listener */
  function onMouseDown(e) {
    if (e.target.name === 'Sphere') {
      setSceneId(1);
    }
    else {
      setPrevPosition(myDict[e.target.name]);
      if (position !== myDict[e.target.name]) {
        
        setPosition(myDict[e.target.name]);
      }
      if (position === myDict[e.target.name]) {
        setPosition(0);
      }
    }
    if (e.target.name === 'Sunglasses' && position === 5) {
      setPosition(0);
    }
    if (e.target.name === 'Cube 5') {
      setSceneId(2);
    }
  }
  return (
    <>
      <Spline scene="https://prod.spline.design/CxPqYHBbbYBenNLy/scene.splinecode" onMouseDown={onMouseDown} onLoad={onLoad} />
      {scene === 0 && <TitlePage changeScene={setSceneId}/>}
      {scene === 1 && <TheatrePage onMouseDown={onMouseDown} changeScene={setSceneId} position={position} changePosition={restorePosition} />}
      {scene === 2 && <LandingPage />}
    </>
  );
}
