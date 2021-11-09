import React, { useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

import styles from "./styles.module.scss";
import { useCalendar } from "../../hooks/useCalendar";
import { EventItemCalendar } from "../EventItemCalendar";
import moment from "moment";

export function CalendarGrid() {
  const { eventsList, handleOpenModalEvent } = useCalendar();

  const buttonTexts = {
    today: "Hoje",
    month: "Mês",
    week: "Semana",
    day: "Dia",
    list: "Lista",
  };

  const headerToolbar = {
    left: "title",
    right: "today prev,next",
  };

  const handleClickEvent = (event) => {
    handleOpenModalEvent();
  };

  useEffect(() => {
    const date = moment("2018-01-04", "YYYY-MM-DD");
    FullCalendar.initialDate(date);
  }, []);

  return (
    <div className={styles.container}>
      <FullCalendar
        locale="pt-br"
        buttonText={buttonTexts}
        moreLinkText="agendamentos"
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={headerToolbar}
        titleFormat={{
          month: "short",
          year: "numeric",
        }}
        events={eventsList}
        eventContent={EventItemCalendar}
        dayMaxEvents={true}
        selectable={true}
        eventClick={handleClickEvent}
      />
    </div>
  );
}
