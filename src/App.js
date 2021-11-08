import { CalendarGrid } from "./components/CalendarGrid";
import { ModalScheduleInfo } from "./components/ModalScheduleInfo";
import { CalendarContextProvider } from "./hooks/useCalendar";

function App() {
  return (
    <div className="App">
      <CalendarContextProvider>
        <CalendarGrid />
        <ModalScheduleInfo />
      </CalendarContextProvider>
    </div>
  );
}

export default App;
