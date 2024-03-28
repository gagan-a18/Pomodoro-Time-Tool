import { PayloadAction, createSlice } from "@reduxjs/toolkit"


const initialState = {
    name: "Pomodoro",
}

export const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        changeState: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        }
    }
})

export const { changeState } = categorySlice.actions;
export default categorySlice.reducer;