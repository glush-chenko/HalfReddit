import {createSlice} from '@reduxjs/toolkit';
import {IComment} from "../../types/comment.interface";
import {RootState} from "../../app/store";

// interface CommentsState {
//     comments: {
//         [postId: string]: IComment[]
//     }
// }
//
// const initialState: CommentsState = {
//     comments: {}
// };
//
// const commentsSlice = createSlice({
//     name: 'commentsSlice',
//     initialState,
//     reducers: {
        // updateComments: (state, action) => {
        //     const { postId, commentsData } = action.payload;
        //     state.comments[postId] = commentsData;
        // },
//     }
// });
//
// export const selectCommentsByPostId = (postId: string) => (state: RootState) => state.commentsSlice.comments[postId];
//
// export const { updateComments } = commentsSlice.actions;
// //
// export default commentsSlice.reducer;