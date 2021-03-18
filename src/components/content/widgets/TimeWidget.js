import React, {useState, useEffect} from "react";
import {ClockTimeZone, renderDate} from "./utilities";


const TimeWidget = ({timezone}) => {
  const [date, setDate] = useState(ClockTimeZone(timezone));

  useEffect(() => {
    const timerId = setInterval(() => {
      date.setSeconds(date.getSeconds() + 1);
      setDate(new Date(date.getTime()));
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
        <div>
          <span>{renderDate(date)}</span>
        </div>
  );
};

export default TimeWidget;
