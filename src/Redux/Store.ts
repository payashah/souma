import { configureStore } from "@reduxjs/toolkit";
import dropdownReducer from '../components/DropDown/DropDownSlice';
import mehrTahlilReducer from "../sections/Yahlil/MehrTahlilSlice"
import mehrAmuzReducer from "../sections/Amuz/MehrAmuzSlice"


export const store = configureStore({

    reducer: {
        dropdown: dropdownReducer,
        mehrTahlil: mehrTahlilReducer,
        mehrAmuz: mehrAmuzReducer,

    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

