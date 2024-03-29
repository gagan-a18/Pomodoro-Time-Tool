import { PayloadAction, createSlice } from "@reduxjs/toolkit"


const initialState = {
    name: "Pomodoro",
    color: "red",
}

export const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        changeState: (state, action: PayloadAction<{ name: string, color: string }>) => {
            const { name, color } = action.payload
            state.name = name;
            state.color = color;
        }
    }
})

export const { changeState } = categorySlice.actions;
export default categorySlice.reducer;