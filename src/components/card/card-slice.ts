import { createSlice } from '@reduxjs/toolkit';
import {RootState} from "../../app/store";

const initialState = {
    showComments: false,
};

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        toggleComments(state) {
            state.showComments = !state.showComments;
        },
    },
});

export const selectComments = (state: RootState) => state.comments.showComments;
export const {toggleComments} = commentsSlice.actions;
export default commentsSlice.reducer;