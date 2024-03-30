import { useAppSelector } from "../../../redux-toolkit/hooks";
import Timer from "./Timer";

const Time_Object = (value: number) => {
    const time_object = new Date();
    time_object.setSeconds(time_object.getSeconds() + value);
    return time_object;
}


const TimeCard = () => {

    const pomodoro_value = useAppSelector(state => state.timeValue.PomodoroNumber);
    const short_break_value = useAppSelector(state => state.timeValue.ShortBreakNumber);
    const long_break_value = useAppSelector(state => state.timeValue.LongBreakNumber);

    const POMO_TIME = Time_Object(pomodoro_value);
    const SB_TIME = Time_Object(short_break_value);
    const LB_TIME = Time_Object(long_break_value);

    return (
        <>
            <div className="w-3/12">
                <Timer expiryTimestamp={POMO_TIME} time_value={pomodoro_value} />
            </div>
            <div className="w-3/12">
                <Timer expiryTimestamp={SB_TIME} time_value={short_break_value} />
            </div>
            <div className="w-3/12">
                <Timer expiryTimestamp={LB_TIME} time_value={long_break_value} />
            </div>
        </>
    )
}

export default TimeCard