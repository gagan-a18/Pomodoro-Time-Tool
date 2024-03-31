import { Button } from "@nextui-org/react";
import Description from "./components/Description/Description";
import Navbar from "./components/Navbar/Navbar";
import SelectTab from "./components/SelectTab/SelectTab";
import TimerContainer from "./components/TimerContainer/TimerContainer";
import { useAppSelector } from "./redux-toolkit/hooks";
import { motion } from "framer-motion";
import Cookies from "js-cookie";

function App() {

  const color_value = useAppSelector(state => state.category.color);//TO SET THE COLOR FOR RESPECTIVE TIMERS.
  const count_value = useAppSelector(state => state.count.count);//COUNT VALUE FOR SHIFTING BETWEEN RESPECTIVE TIMERS.

  const pomo_value = count_value === 1 ? 0 : Math.floor(count_value / 2);

  return (
    <>
      <main className={`flex flex-col ${color_value} text-foreground bg-background h-screen`}>
        <Navbar title="PomoFocus - Time Management Tool" />
        <Description />
        <SelectTab />
        <TimerContainer />
        <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2 }} className="flex w-fit mx-auto mt-10 bg-white/20 rounded-full p-3 text-2xl">
          POMODORO COUNT : {pomo_value}
        </motion.div>
        <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.1 }} >
          <Button onClick={() => { Cookies.remove("POMO_VALUE"); window.location.reload() }} className={"shadow-2xl shadow-black flex w-fit mx-auto mt-10 bg-white/20 rounded-full p-3 text-sm"}>Clear Pomodoro COUNT</Button>
        </motion.div>
      </main>

    </>
  )
}

export default App
