import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import iCalendarPlugin from "@fullcalendar/icalendar";
import eventIcs from "./assets/zenbunka.ics";
import "./RokuyoFullCalendar.css";

// かれんだー情報をfetchするのは諦める
// "https://calendar.google.com/calendar/ical/br7nsak3pjv3d379ddrf4bfgpo7splo1%40import.calendar.google.com/public/basic.ics";

function RokuyoFullCalendar() {
  return (
    <div className="calendar" id="calendar">
      <FullCalendar
        plugins={[dayGridPlugin, iCalendarPlugin]}
        initialView="dayGridMonth"
        locale={"ja"} //日本語ローカライズの適応
        buttonText={{ today: "今日" }} // 今日ボタンのローカライズがされてなかった
        firstDay={1} // 週の初めを月曜日にする
        events={{ url: eventIcs, format: "ics" }}
        fixedWeekCount={false}
        eventBorderColor="#ffffff00"
        eventBackgroundColor="#ffffff00"
      />
    </div>
  );
}

export default RokuyoFullCalendar;
