import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    value: "Pause",
}

export const timeSwitchSlice = createSlice({
    name: "timeSwitch_value",
    initialState: initialState,
    reducers: {
        changeState: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { changeState: changeTimeSwitchValue } = timeSwitchSlice.actions;
export default timeSwitchSlice.reducer