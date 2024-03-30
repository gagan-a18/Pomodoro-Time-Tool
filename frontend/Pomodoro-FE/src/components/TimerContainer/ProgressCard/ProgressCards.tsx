import { useState } from "react";
import { useAppSelector } from "../../../redux-toolkit/hooks";
import ProgressCard from "./ProgressCard";

const ProgressCards = () => {


    const POMO_value = useAppSelector(state => state.timeValue.PomodoroNumber);
    const SB_value = useAppSelector(state => state.timeValue.ShortBreakNumber);
    const LB_value = useAppSelector(state => state.timeValue.LongBreakNumber);

    return (
        <>
            <div className="w-3/12">
                <ProgressCard time_value={POMO_value} value_category="Pomodoro" />
            </div>
            <div className="w-3/12">
                <ProgressCard time_value={SB_value} value_category="Short Break" />
            </div>
            <div className="w-3/12">
                <ProgressCard time_value={LB_value} value_category="Long Break" />
            </div>
        </>
    )
}

export default ProgressCards;