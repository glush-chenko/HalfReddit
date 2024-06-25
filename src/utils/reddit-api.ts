import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ICard} from "../types/card.interface";
import {RootState} from "../app/store";
import {ISubreddit} from "../types/subreddit.interface";
import {IComment} from "../types/comment.interface";

interface RedditState {
    subreddits: ISubreddit[],
    data: ICard[];
    comments: {
        //key - post id
        //value - comments
        [key: string]: IComment[]
    };
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: RedditState = {
    subreddits: [],
    data: [],
    comments: {},
    status: 'idle',
    error: null,
};

export const loadCardsData = createAsyncThunk(
    "cardsData/loadCardsData",
    async (
        {prefixed, search = ""}: {prefixed: string, search?: string}
    ) => {
        const response = await fetch(`https://www.reddit.com/${prefixed}/search.json?q=${search}type:image&restrict_sr=on&sort=hot`);
        return await response.json();
    }
)

export const loadSubredditsData = createAsyncThunk(
    "subredditsData/loadSubredditsData",
    async () => {
        const response = await fetch(`https://www.reddit.com/subreddits.json?limit=5`);
        return await response.json();
    }
)

export const loadCommentsData = createAsyncThunk(
    "commentsData/loadCommentsData",
    async (
        {permalink, id}: { permalink: string, id: string }
    ) => {
        const response = await fetch(`https://www.reddit.com${permalink}.json?limit=16`);
        const data = await response.json();
        return {
            ...data,
            postId: id
        }
    }
)

const redditSlice = createSlice({
    name: 'reddit',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadCardsData.pending, (state) => {
                state.status = 'loading';
                state.data = [];
            })
            .addCase(loadCardsData.fulfilled, (state, action:PayloadAction<any>) => {
                state.status = 'succeeded';

                state.data = action.payload.data.children.map((card: any): ICard => ({
                    id: card.data.id,
                    title: card.data.title,
                    author: card.data.author,
                    permalink: card.data.permalink,
                    url: card.data.url,
                    numComments: card.data.num_comments,
                    createdDate: card.data.created * 1000,
                    ups: Math.round(card.data.ups),
                }));
            })
            .addCase(loadCardsData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message ?? 'Unknown error';
            })
            .addCase(loadSubredditsData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(loadSubredditsData.fulfilled, (state, action: PayloadAction<any>) => {
                state.status = 'succeeded';

                state.subreddits = action.payload.data.children.map((subreddit: any): ISubreddit => ({
                    id: subreddit.data.id,
                    subscribers: subreddit.data.subscribers,
                    prefixed: subreddit.data.display_name_prefixed,
                    imgSub: subreddit.data.icon_img
                }));
            })
            .addCase(loadSubredditsData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message ?? 'Unknown error';
            })
            .addCase(loadCommentsData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(loadCommentsData.fulfilled, (state, action: PayloadAction<any>) => {
                state.status = 'succeeded';

                state.comments[action.payload.postId] = action.payload[1].data.children.reduce((acc: IComment[], comment: any) => {
                    if (comment.kind !== "more" && comment.data.author !== "AutoModerator") {
                        acc.push({
                            id: comment.data.id,
                            author: comment.data.author,
                            text: comment.data.body_html,
                            ups: comment.data.ups,
                            createdDate: comment.data.created * 1000,
                            replies: comment.data.replies,
                        });
                    }
                    return acc;
                }, []);
            })
            .addCase(loadCommentsData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message ?? 'Unknown error';
            })
    },
});

export const selectRedditData = (state: RootState) => state.reddit.data;
export const selectSubreddits = (state: RootState) => state.reddit.subreddits;
export const selectCommentsById = (id: string) => (state: RootState) => {
    return state.reddit.comments[id];
}
export const selectStatus = (state: RootState) => state.reddit.status;
export default redditSlice.reducer;