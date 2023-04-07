import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="wrong_word_image">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Toma Kei wrong word calendar</h1>
      <div className="calendar">
        <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
      </div>
    </div>
  );
}

export default App;
