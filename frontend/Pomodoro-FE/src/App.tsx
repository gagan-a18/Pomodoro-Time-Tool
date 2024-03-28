import Description from "./components/Description/Description";
import Navbar from "./components/Navbar/Navbar";
import SelectTab from "./components/SelectionTabs/SelectTab";

function App() {
  return (
    <>
      <main className={`flex flex-col red text-foreground bg-background h-screen`}>
        <Navbar title="PomoFocus - Time Management Tool" />
        <Description />
        <SelectTab />
      </main>

    </>
  )
}

export default App
