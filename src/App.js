import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <div className="App">
      <div className="numbers">
        <span>{("0" + (Math.floor(time / 60000) % 60)).slice(-2)}:</span> 
        <span>{("0" + (Math.floor(time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>

      <div className="buttonContainer">
        {!timerOn && time === 0 && (
          <button className="btn" onClick={() => setTimerOn(true)}>START</button>
        )}
        {!timerOn &&(
          <button className="btn" onClick={() => setTimerOn(true)}>RESUME</button>
          )}
        {timerOn && time !== 0 && (
          <button className="btn" onClick={() => setTimerOn()}>STOP</button>
        )}
        {!timerOn && time > 0 && (
          <button className="btn" onClick={() => setTime(0)}>RESET</button>
        )}
      </div>
    </div>
  );
}

export default App;
