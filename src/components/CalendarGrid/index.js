import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

import styles from "./styles.module.scss";
import { useCalendar } from "../../hooks/useCalendar";

export function CalendarGrid() {
  const { eventsList } = useCalendar();

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

  return (
    <div className={styles.container}>
      <FullCalendar
        locale="pt-br"
        buttonText={buttonTexts}
        moreLinkText="agendamentos"
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={headerToolbar}
        events={eventsList}
        weekNumbers={true}
        weekText="S"
        dayMaxEvents={true}
        selectable={true}
        navLinks={true}
        timeZone="UTC"
        aspectRatio={2}
      />
    </div>
  );
}
