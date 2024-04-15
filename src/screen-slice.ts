import { createSlice } from '@reduxjs/toolkit';
import {RootState} from "./app/store";

export const screenSlice = createSlice({
    name: 'screenSlice',
    initialState: {
        screenWidth: window.innerWidth,
        showNav: false,
    },
    reducers: {
        setScreenWidth: (state, action) => {
            if (state.screenWidth >= 1200) {
                state.showNav = false;
            }
            state.screenWidth = action.payload;
        },
        toggleNav: (state) => {
            state.showNav = !state.showNav;
        }
    },
});

export const { setScreenWidth, toggleNav} = screenSlice.actions;
export const selectScreenWidth = (state: RootState) => state.screenSlice.screenWidth;
export const selectShowNav= (state: RootState) => state.screenSlice.showNav;

export default screenSlice.reducer;
