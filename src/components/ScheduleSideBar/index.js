import React from "react";
import { FaRegCalendarCheck, MdOutlineOpenInBrowser } from "react-icons/all";
import { useCalendar } from "../../hooks/useCalendar";

import styles from "./styles.module.scss";

export function ScheduleSideBar() {
  const { eventsList, handleAddEvent, handleOpenModalEvent } = useCalendar();

  const formatDateAndHour = (date) => {
    const dateFormatted = new Date(date);
    const hours = dateFormatted.getHours();
    const minutes = dateFormatted.getMinutes();
    const ampm = hours >= 12 ? "pm" : "am";
    const hoursFormatted = hours % 12 === 0 ? 12 : hours % 12;
    const minutesFormatted = minutes < 10 ? `0${minutes}` : minutes;
    return `${dateFormatted.getDate()}/${dateFormatted.getMonth()}/${dateFormatted.getFullYear()} ${hoursFormatted}:${minutesFormatted} ${ampm}`;
  };

  return (
    <div className={styles.container}>
      <header>
        <h3>Minha agenda</h3>
        <button onClick={handleAddEvent}>novo evento</button>
      </header>

      <ul>
        {eventsList.map((event) => (
          <li key={event.id}>
            <div className={styles.cardDetails}>
              <small>{formatDateAndHour(event.start)}</small>
              <p>{event.title}</p>
              <span>{event?.professional}</span>
            </div>

            <div className={styles.cardOptions}>
              <button>
                <FaRegCalendarCheck size={16} />
              </button>
              <button onClick={handleOpenModalEvent}>
                <MdOutlineOpenInBrowser size={18} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
