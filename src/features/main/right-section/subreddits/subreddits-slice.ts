import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {ISubreddit} from "../../../../types/subreddit.interface";

export const loadSubreddits = createAsyncThunk(
    "subreddits/loadSubreddits",
    async () => {
        const response = await fetch(`https://www.reddit.com/subreddits.json?limit=5`);
        const data = await response.json();
        return data;
    }
)

const initialState= {
    subreddits: [],
    isLoadingCards: false,
    failedToLoadCards: false
}

export const subredditsSlice = createSlice({
    name: "subreddits",
    initialState: initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadSubreddits.pending, (state) => {
                state.isLoadingCards = true;
                state.failedToLoadCards = false;
            })
            .addCase(loadSubreddits.fulfilled, (state, action) => {
                state.subreddits = action.payload.data.children.slice().map((subreddit: any): ISubreddit => ({
                    id: subreddit.data.id,
                    subscribers: subreddit.data.subscribers,
                    prefixed: subreddit.data.display_name_prefixed,
                    imgSub: subreddit.data.icon_img
                }));
            })
            .addCase(loadSubreddits.rejected, (state) => {
                state.isLoadingCards = false;
                state.failedToLoadCards = true;
            });
    }
});


// export const selectSubreddits = (state: RootState) => state.subreddits.subreddits;

export default subredditsSlice.reducer;