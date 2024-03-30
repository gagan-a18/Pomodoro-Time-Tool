import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from "./Features/category";
import timeReducer from "./Features/time";
import timeSwitchReducer from "./Features/timeSwitch";
export const store = configureStore({
    reducer: {
        category: categoryReducer,
        timeValue: timeReducer,
        timeSwitchValue: timeSwitchReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch