import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  console.log(time);
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourAngle = ((hours % 12) + minutes / 60) * 30; // Each hour is 30 degrees
  const minuteAngle = (minutes + seconds / 60) * 6; // Each minute is 6 degrees
  const secondAngle = seconds * 6; // Each second is 6 degrees
  return (
    <div className="maincontainer">
      <h1>analog clock</h1>
      <div className="analogclock">
        <div
          className="hand hour-hand"
          style={{ transform: `rotate(${hourAngle}deg)` }}
        ></div>
        <div
          className="hand minute-hand"
          style={{ transform: `rotate(${minuteAngle}deg)` }}
        ></div>
        <div
          className="hand second-hand"
          style={{ transform: `rotate(${secondAngle}deg)` }}
        ></div>
      </div>
    </div>
  );
}

export default App;
