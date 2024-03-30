import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from "./Features/category";
import timeReducer from "./Features/time";
import timeSwitchReducer from "./Features/timeSwitch";
import countReducer from "./Features/count";
export const store = configureStore({
    reducer: {
        category: categoryReducer,
        timeValue: timeReducer,
        timeSwitchValue: timeSwitchReducer,
        count: countReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch