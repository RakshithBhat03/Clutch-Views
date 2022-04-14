import { useState, useEffect } from "react";
import { getFormattedTime } from "../../utils/getFormattedTime";
import "./Time.css";
function Time() {
  const [date, setDate] = useState(new Date());
  const [isTime24Formart, setTimeIs24Format] = useState(false);
  const { time12Format, time24Format } = getFormattedTime(date);
  useEffect(() => {
    setInterval(() => setDate(new Date()), 1000);
  }, []);
  return (
    <div className="time-wrapper">
      <p className="display-time">
        {isTime24Formart ? time24Format : time12Format}
      </p>
      <button
        className="btn-time-switch"
        onClick={() => setTimeIs24Format((state) => !state)}>
        <i className="fas fa-sync"></i>
      </button>
    </div>
  );
}

export { Time };
