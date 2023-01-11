import React, { useState } from 'react';
import 'mind-ar/dist/mindar-image.prod.js';
import 'aframe';
import 'mind-ar/dist/mindar-image-aframe.prod.js';
import './App.css';
import ModeViewAR from "./mindar-viewer";

function App() {
  const [started, setStarted] = useState(false);
  const [x, setX] = useState(1);
  const [y, setY] = useState(1);
  const [z, setZ] = useState(1);
  const [oldX, setOldX] = useState(0);
  const [oldY, setOldY] = useState(0);
  const [oldZ, setOldZ] = useState(0);


  //If any input changes reset
  const basicReset = () => {
    setStarted(true);
   
  };

  //fonction pour mettre à jour les valeurs
  const changeValue = () => {
    // const { x1 } = old1.target.value;
    // const { y1 } = old2.target.value;
    // const { z1 } = old3.target.value;
    // const { x2 } = new1.target.value;
    // const { y2 } = new2.target.value;
    // const { z2 } = new3.target.value;
    // for (var i = 0; i < 10; i++) {
    //   setOldX(i);
    //   setOldY(i);
    //   setOldZ(i);
    //   i++;
    //   setX(i++);
    //   setY(i++);
    //   setZ(i++);

    //   console.log(`${oldX} ${oldY} ${oldZ} ; to: ${x} ${y} ${z};`);
    //   //
    // }
    setOldX(-1.5);
    setOldY(0);
    setOldZ(0);
    setX(-1.4);
    setY(0);
    setZ(0);
   
    basicReset();
  };

  return (
    <div className="App">
      <h1>
        Example React component with{" "}
        <a href="https://github.com/hiukim/mind-ar-js" target="_blank">
          MindAR
        </a>
      </h1>

      <div>
        {/* {!started && <button onClick={() => {setStarted(true)}}>Start</button>} */}
        {!started && <button onClick={changeValue}>Start</button>}
        {started && (
          <button
            onClick={() => {
              setStarted(false);
             
            }}
          >
            Stop
          </button>
        )}
      </div>

      {started && (
        <div className="container">
          {/* <MindARViewer/> */}
          <ModeViewAR
            newdX={x}
            newdY={y}
            newdZ={z}
            olddX={oldX}
            olddY={oldY}
            olddZ={oldZ}
         
           
          />
          <video></video>
        </div>
      )}
    </div>
  );
}

export default App;

