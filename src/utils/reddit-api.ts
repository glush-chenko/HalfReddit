import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ICard} from "../types/card.interface";
import {useAppSelector} from "../app/hooks";

const REQUESTS_PER_MINUTE = 10;
export const REQUEST_INTERVAL = 60000 / REQUESTS_PER_MINUTE;

interface RedditState {
    subreddits: [], //TODO create interface
    data: ICard[];
    comments: {
        //key - post id
        //value - comments
      [key: string]: [] //TODO create interface to comments
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

export const fetchRedditData = createAsyncThunk(
    'reddit/fetchData',
    async ({url, postId}: {url: string, postId?: string}) => {
        const response = await fetch(`https://www.reddit.com${url}`);
        const data = await response.json();
        return data;
    }
);

export const getPopular = () => {
    return fetchRedditData({
        url: "/r/popular/search.json?q=type:image&restrict_sr=on&sort=new"
    })
}

// export const getHome = () => {
//     return fetchRedditData({
//         url: "/r/"
//     })
// }

const redditSlice = createSlice({
    name: 'reddit',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRedditData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchRedditData.fulfilled, (state, action: PayloadAction<any>) => {
                state.status = 'succeeded';
                //TODO map action.payload
                state.data = action.payload.data.children.map((card: any): ICard => ({
                    id: card.data.id,
                    title: card.data.title,
                    author: card.data.author,
                    permalink: card.data.permalink,
                    url: card.data.url,
                    numComments: card.data.num_comments,
                    createdDate: card.data.created * 1000,
                    ups: Math.round(card.data.ups)
                }));
            })
            .addCase(fetchRedditData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message ?? 'Unknown error';
            });
    },
});

// export const {data, status, error} = useAppSelector((state) => state.reddit);

export default redditSlice.reducer;
