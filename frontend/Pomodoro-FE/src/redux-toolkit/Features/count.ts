import { createSlice } from "@reduxjs/toolkit"
import Cookies from "js-cookie"
import cookieSet from "../../helpers/cookieSet";
const POMO_VALUE = Cookies.get("POMO_VALUE");
{ !POMO_VALUE && cookieSet("POMO_VALUE", String(1)) };
console.log(POMO_VALUE)
const initialState = {
    count: Number(POMO_VALUE) || 1,
}

export const countSlice = createSlice({
    name: "count",
    initialState: initialState,
    reducers: {
        changeState: (state) => {
            state.count += 1;
        }
    }
})

export const { changeState: changeCountState } = countSlice.actions;

export default countSlice.reducer;