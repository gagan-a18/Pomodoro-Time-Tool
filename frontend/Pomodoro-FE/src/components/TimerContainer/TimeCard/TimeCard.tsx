import { motion } from "framer-motion";
import { useAppSelector } from "../../../redux-toolkit/hooks";
import Timer from "./Timer";
import ProgressCard from "../ProgressCard/ProgressCard";

const Time_Object = (value: number) => {
    const time_object = new Date();
    time_object.setSeconds(time_object.getSeconds() + value);
    return time_object;
}



const TimeCard = () => {

    const category = useAppSelector(state => state.category.name);

    const pomodoro_value = useAppSelector(state => state.timeValue.PomodoroNumber);
    const short_break_value = useAppSelector(state => state.timeValue.ShortBreakNumber);
    const long_break_value = useAppSelector(state => state.timeValue.LongBreakNumber);

    const POMO_TIME = Time_Object(pomodoro_value);
    const SB_TIME = Time_Object(short_break_value);
    const LB_TIME = Time_Object(long_break_value);

    return (
        <>
            <motion.div initial={{ y: -100 }} animate={{ y: 0 }} transition={{ delay: 1.5 }} className={`w-3/12 ${category === "Pomodoro" ? "shadow-2xl shadow-black py-2 rounded-3xl ml-1 bg-white/20" : "opacity-10"}`}>
                <div className="mt-2 relative top-1">
                    <ProgressCard time_value={pomodoro_value} value_category="Pomodoro" />
                </div>
                <Timer expiryTimestamp={POMO_TIME} time_value={pomodoro_value} value_category="Pomodoro" />
            </motion.div>
            <motion.div initial={{ y: -100 }} animate={{ y: 0 }} transition={{ delay: 1.6 }} className={`w-3/12 ${category === "Short Break" ? "shadow-2xl shadow-black py-2 rounded-3xl ml-1 bg-white/20" : "opacity-10"}`}>
                <div className="mt-2 relative top-1">
                    <ProgressCard time_value={short_break_value} value_category="Short Break" />
                </div>
                <Timer expiryTimestamp={SB_TIME} time_value={short_break_value} value_category="Short Break" />
            </motion.div>
            <motion.div initial={{ y: -100 }} animate={{ y: 0 }} transition={{ delay: 1.7 }} className={`w-3/12 ${category === "Long Break" ? "shadow-2xl shadow-black py-2 rounded-3xl ml-1 bg-white/20" : "opacity-10"}`}>
                <div className="mt-2 relative top-1">
                    <ProgressCard time_value={long_break_value} value_category="Long Break" />
                </div>
                <Timer expiryTimestamp={LB_TIME} time_value={long_break_value} value_category="Long Break" />
            </motion.div>
        </>
    )
}

export default TimeCard