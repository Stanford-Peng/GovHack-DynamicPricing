import { useEffect, useState } from "react";
import "./JourneyCounter.css";
function JourneyCounter() {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const [count, setCount] = useState(11038);
  setDelay();
  function setDelay() {
    setTimeout(function () {
      setCount(count + getRandomInt(1, 15));
    }, 1000);
  }
  return (
    <div className="JourneyCounter">
      <h1 id="stats-number">{numberWithCommas(count)}</h1>
    </div>
  );
}
export default JourneyCounter;
