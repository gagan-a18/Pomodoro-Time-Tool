import Description from "./components/Description/Description";
import Navbar from "./components/Navbar/Navbar";
import SelectTab from "./components/SelectTab/SelectTab";
import TimerContainer from "./components/TimerContainer/TimerContainer";
import { useAppSelector } from "./redux-toolkit/hooks";

function App() {

  const color_value = useAppSelector(state => state.category.color);

  return (
    <>
      <main className={`flex flex-col ${color_value} text-foreground bg-background h-screen`}>
        <Navbar title="PomoFocus - Time Management Tool" />
        <Description />
        <SelectTab />
        <TimerContainer />
      </main>

    </>
  )
}

export default App
