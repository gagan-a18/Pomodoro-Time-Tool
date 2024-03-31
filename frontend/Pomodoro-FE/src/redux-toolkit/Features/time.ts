import { createSlice } from "@reduxjs/toolkit"
import Cookies from "js-cookie";


const initialState = {
    PomodoroNumber: Number(Cookies.get("POMO_NUMBER")) || 1500,
    ShortBreakNumber: Number(Cookies.get("SB_NUMBER")) || 300,
    LongBreakNumber: Number(Cookies.get("LB_NUMBER")) || 900,
}

export const timeSlice = createSlice({
    name: "time_value",
    initialState: initialState,
    reducers: {
        changeState: (state, action) => {
            const { PomodoroNumber, ShortBreakNumber, LongBreakNumber } = action.payload;
            state.PomodoroNumber = PomodoroNumber;
            state.ShortBreakNumber = ShortBreakNumber;
            state.LongBreakNumber = LongBreakNumber;
        }
    }
})

export const { changeState: changeTimeValue } = timeSlice.actions;
export default timeSlice.reducer