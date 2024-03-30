import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    PomodoroNumber: 15,
    ShortBreakNumber: 5,
    LongBreakNumber: 10,
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