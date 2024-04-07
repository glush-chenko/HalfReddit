import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ICard} from "../types/card.interface";
import {RootState} from "../app/store";
import {ISubreddit} from "../types/subreddit.interface";
import {TOPIC_NAMES, TOPIC_REDDITS} from "../features/main/nav/nav-top-section/nav-top-section-slice";

enum REQUEST_DATA_TYPES {
    CARDS = "CARDS",
    SUBREDDITS = "SUBREDDITS"
}

const REQUESTS_PER_MINUTE = 10;
export const REQUEST_INTERVAL = 60000 / REQUESTS_PER_MINUTE;

interface RedditState {
    subreddits: ISubreddit[],
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
    async ({
               url,
               postId,
               dataType = REQUEST_DATA_TYPES.CARDS
           }: {
               url: string,
               postId?: string,
               dataType?: REQUEST_DATA_TYPES
           }
    ) => {
        const response = await fetch(`https://www.reddit.com${url}`);
        const data = await response.json();
        return {
            ...data,
            dataType,
        };
    }
);

export const getPopular = () => {
    return fetchRedditData({
        url: "/r/popular/search.json?q=type:image&restrict_sr=on&sort=hot"
    })
}

export const getHome = () => {
    return fetchRedditData({
        url: "/r/home/search.json?q=type:image&restrict_sr=on&sort=hot"
    })
}

export const getSubreddits = () => {
    return fetchRedditData({
            url: "/subreddits.json?limit=5",
            dataType: REQUEST_DATA_TYPES.SUBREDDITS,
        })
}

export const getTopic = (topic: TOPIC_NAMES) => {
    return fetchRedditData({
        url: `/${TOPIC_REDDITS[topic]}/search.json?q=type:image&restrict_sr=on&sort=hot`
    })
}

export const getSubreddit = (prefixed: string) => {
    return fetchRedditData({
        url: `/${prefixed}/search.json?q=type:image&restrict_sr=on&sort=hot`
    })
}

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
                if (action.payload.dataType === REQUEST_DATA_TYPES.CARDS) {
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
                } else {
                    state.subreddits = action.payload.data.children.map((subreddit: any): ISubreddit => ({
                        id: subreddit.data.id,
                        subscribers: subreddit.data.subscribers,
                        prefixed: subreddit.data.display_name_prefixed,
                        imgSub: subreddit.data.icon_img
                    }));
                }
            })
            .addCase(fetchRedditData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message ?? 'Unknown error';
            });
    },
});

// export const {data, status, error} = useAppSelector((state) => state.reddit);

export const selectRedditData = (state: RootState) => state.reddit.data;
export const selectSubreddits = (state: RootState) => state.reddit.subreddits;
export const status = (state: RootState) => state.reddit.status;

// export const  {data, status, error} = selectReddit = (state: RootState) => state.reddit;
export default redditSlice.reducer;
