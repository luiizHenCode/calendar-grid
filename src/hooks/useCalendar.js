import { useState, createContext, useContext } from "react";

const CalendarContext = createContext({});

export function CalendarContextProvider({ children }) {
  const [eventsList, setEventsList] = useState([
    {
      id: 1,
      title: "Progressiva",
      date: "2021-11-12",
      start: "2021-11-12 09:00",
      end: "2021-11-12 10:00",
      backgroundColor: "#ff0000",
    },
    {
      id: 2,
      title: "Corte e escova",
      date: "2021-11-12",
      start: "2021-11-12 13:00",
      end: "2021-11-12 14:00",
    },
  ]);

  const handleClickEvent = (target) => {
    const event = target.event;

    alert(`${event.title} - ${event.start}`);
  };

  const handleAddEvent = () => {
    const newEvent = {
      id: eventsList.length + 1,
      title: "Novo evento",
      date: "2021-11-24",
      start: "2021-11-24 09:00",
      end: "2021-11-24 10:00",
      backgroundColor: "#ff0000",
    };

    setEventsList([...eventsList, newEvent]);
  };

  return (
    <CalendarContext.Provider
      value={{ eventsList, handleClickEvent, handleAddEvent }}
    >
      {children}
    </CalendarContext.Provider>
  );
}

export function useCalendar() {
  return useContext(CalendarContext);
}
