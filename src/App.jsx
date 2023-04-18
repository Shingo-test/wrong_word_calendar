import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import WrongWord, { WrongWordsLength } from "./WrongWord";
import "./App.css";

function App() {
  const WrongWordIndex = Math.floor(Math.random() * WrongWordsLength);
  // console.log(WrongWordIndex);
  return (
    <div className="App">
      <h1>
        Toma Kei wrong word <a href="#calendar">calendar</a>
      </h1>
      <WrongWord index={WrongWordIndex} />
      <div className="calendar" id="calendar">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          locale={"ja"} //日本語ローカライズの適応
          buttonText={{ today: "今日" }} // 今日ボタンのローカライズがされてなかった
          firstDay={1} // 週の初めを月曜日にする
          // direction="rtl" // 日付の表示場所を左上にする 曜日の順番が反転してしまう
        />
      </div>
    </div>
  );
}

export default App;
