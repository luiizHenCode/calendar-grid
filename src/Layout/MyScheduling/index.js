import React from "react";
import { CalendarGrid } from "../../components/CalendarGrid";
import { ModalScheduleInfo } from "../../components/ModalScheduleInfo";
import { ScheduleSideBar } from "../../components/ScheduleSideBar";
import { CalendarContextProvider } from "../../hooks/useCalendar";

import styles from "./styles.module.scss";

export function MyScheduling() {
  return (
    <div className={styles.container}>
      <CalendarContextProvider>
        <ModalScheduleInfo />
        <ScheduleSideBar />
        <CalendarGrid />
      </CalendarContextProvider>
    </div>
  );
}
