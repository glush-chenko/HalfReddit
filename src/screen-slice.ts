import {createSlice, PayloadAction, createSelector} from '@reduxjs/toolkit';
import {RootState} from "./app/store";

const XS_SCREEN_SIZE = 480;
const S_SCREEN_SIZE = 770;
const M_SCREEN_SIZE = 960;
const L_SCREEN_SIZE = 1200;

export const screenSlice = createSlice({
    name: 'screenSlice',
    initialState: {
        screenWidth: window.innerWidth,
        showNav: true,
    },
    reducers: {
        setScreenWidth: (state, action) => {
            state.screenWidth = action.payload;
        },
        toggleNav: (state, action: PayloadAction<boolean | undefined>) => {
            state.showNav = action.payload ? action.payload : !state.showNav;
        },
    },
});

export const { setScreenWidth, toggleNav} = screenSlice.actions;
export const selectShowNav = (state: RootState) => state.screenSlice.showNav;

export const selectScreenSizes = createSelector(
    [(state: RootState) => state.screenSlice.screenWidth],
    (screenWidth) => {
        return {
            isExtraSmall: screenWidth < XS_SCREEN_SIZE,
            isSmall: screenWidth < S_SCREEN_SIZE,
            isMedium: screenWidth < M_SCREEN_SIZE,
            isLarge: screenWidth < L_SCREEN_SIZE,
            isExtraLarge: screenWidth >= L_SCREEN_SIZE,
        }
    }
)

export default screenSlice.reducer;
