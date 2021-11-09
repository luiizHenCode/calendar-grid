import React from "react";
import { useCalendar } from "../../hooks/useCalendar";

import styles from "./styles.module.scss";

export function EventItemCalendar(eventInfo) {

  const { event } = eventInfo;


  const formatHourAndMinute = (getDate) => {
    const date = new Date(getDate);
    const hour = date.getHours();
    const minute = date.getMinutes();
    const hourFormatted = hour < 10 ? `0${hour}` : hour;
    const minuteFormatted = minute < 10 ? `0${minute}` : minute;
    return `${hourFormatted}:${minuteFormatted}`;
  };

  return (
    <div className={styles.container} >
      <small>{formatHourAndMinute(event.start)}</small>
      <span>{event.title}</span>
    </div>
  );
}
