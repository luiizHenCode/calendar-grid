import { CalendarGrid } from "./components/CalendarGrid";
import { ModalScheduleInfo } from "./components/ModalScheduleInfo";
import { CalendarContextProvider } from "./hooks/useCalendar";
import { MyScheduling } from "./Layout/MyScheduling";

function App() {
  return (
    <div className="App">
      <MyScheduling />
    </div>
  );
}

export default App;
