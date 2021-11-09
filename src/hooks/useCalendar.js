import { useState, createContext, useContext } from "react";

const CalendarContext = createContext({});

const events = [
  {
    id: 1,
    title: "Progressiva",
    date: "2021-11-12",
    start: "2021-11-12 09:00",
    professional: "Dr. Pedro",
  },
  {
    id: 2,
    title: "Corte e escova",
    date: "2021-11-12",
    start: "2021-11-12 11:00",
  },
  {
    id: 3,
    title: "Permanente",
    date: "2021-11-12",
    start: "2021-11-12 13:00",
  },
  {
    id: 4,
    title: "Luzes",
    date: "2021-11-12",
    start: "2021-11-12 15:00",
    end: "2021-11-12 14:00",
  },
  {
    id: 5,
    title: "Progressiva",
    date: "2021-11-12",
    start: "2021-11-12 17:00",
  },
  {
    id: 6,
    title: "Corte e escova",
    date: "2021-11-12",
    start: "2021-11-12 19:00",
  },
  {
    id: 7,
    title: "Permanente",
    date: "2021-11-12",
    start: "2021-11-12 21:00",
  },
  {
    id: 8,
    title: "Luzes",
    date: "2021-11-12",
    start: "2021-11-12 23:00",
  },
  {
    id: 9,
    title: "Progressiva",
    date: "2021-11-13",
    start: "2021-11-13 09:00",
  },
  {
    id: 10,
    title: "Corte e escova",
    date: "2021-11-13",
    start: "2021-11-13 11:00",
  },
  {
    id: 11,
    title: "Permanente",
    date: "2021-11-13",
    start: "2021-11-13 13:00",
  },
  {
    id: 12,
    title: "Luzes",
    date: "2021-11-13",
    start: "2021-11-13 15:00",
  },
  {
    id: 13,
    title: "Progressiva",
    date: "2021-11-13",
    start: "2021-11-13 17:00",
  },
  {
    id: 14,
    title: "Corte e escova",
    date: "2021-11-13",
    start: "2021-11-13 19:00",
  },
  {
    id: 15,
    title: "Permanente",
    date: "2021-11-13",
    start: "2021-11-13 21:00",
  },
  {
    id: 16,
    title: "Luzes",
    date: "2021-11-13",
    start: "2021-11-13 23:00",
  },
  {
    id: 17,
    title: "Progressiva",
    date: "2021-11-14",
    start: "2021-11-14 09:00",
  },
];

export function CalendarContextProvider({ children }) {
  const [eventsList, setEventsList] = useState([...events]);
  const [modalEvent, setModalEvent] = useState(false);

  const handleOpenModalEvent = () => {
    setModalEvent(true);
  };

  const handleCloseModalEvent = () => {
    setModalEvent(false);
  };

  const handleClickEvent = (target) => {
    const event = target.event;

    alert(`${event.title} - ${event.start}`);
  };

  const handleAddEvent = () => {
    const newEvent = {
      id: eventsList.length + 1,
      title: "Novo evento",
      date: generateRandomDate(),
      start: generateRandomDate(),
      backgroundColor: "#ff0000",
    };

    setEventsList([...eventsList, newEvent]);
  };

  const generateRandomDate = () => {
    const date = new Date();
    date.setDate(date.getDate() + Math.floor(Math.random() * 10));
    return date;
  };

  return (
    <CalendarContext.Provider
      value={{
        eventsList,
        handleClickEvent,
        handleAddEvent,
        modalEvent,
        handleOpenModalEvent,
        handleCloseModalEvent,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
}

export function useCalendar() {
  return useContext(CalendarContext);
}
