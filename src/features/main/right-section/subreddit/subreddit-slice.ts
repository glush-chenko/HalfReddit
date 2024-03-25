import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../../../app/store";


const initialState = {
    isImageLoading: false,
};

const imageSlice = createSlice({
    name: 'image',
    initialState,
    reducers: {
        setImageLoading(state, action) {
            state.isImageLoading = action.payload;
        },
    },
});

export const { setImageLoading } = imageSlice.actions;

export const isImageLoading = (state: RootState) => state.image.isImageLoading;

export default imageSlice.reducer;