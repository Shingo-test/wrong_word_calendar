import React from "react";
import RokuyoFullCalendar from "./RokuyoFullCalendar";
import WrongWord, { randomIndex } from "./WrongWord";
import "./App.css";

function App() {
  const WrongWordIndex = randomIndex();
  // console.log(WrongWordIndex);
  return (
    <div className="App">
      <h1>
        Mistake Words <a href="#calendar">Calendar</a>
      </h1>
      <WrongWord index={WrongWordIndex} />

      <RokuyoFullCalendar />
    </div>
  );
}

export default App;
