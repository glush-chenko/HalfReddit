import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../../../app/store";
export enum SCREEN_NAMES {
    HOME = "HOME",
    POPULAR = "POPULAR",
    SUBREDDIT = "SUBREDDIT",
    TOPIC = "TOPIC",
}

export enum TOPIC_NAMES {
    GAMING = "GAMING",
    SPORTS = "SPORTS",
    BUSINESS = "BUSINESS",
    CRYPTO = "CRYPTO",
    TELEVISION = "TELEVISION",
    ANIME = "ANIME",
    ART = "ART",
}

export const TOPIC_REDDITS = {
    [TOPIC_NAMES.GAMING]: "r/Gaming",
    [TOPIC_NAMES.SPORTS]: "r/Sports",
    [TOPIC_NAMES.BUSINESS]: "r/Business",
    [TOPIC_NAMES.CRYPTO]: "r/Crypto",
    [TOPIC_NAMES.TELEVISION]: "r/Television",
    [TOPIC_NAMES.ANIME]: "r/Anime",
    [TOPIC_NAMES.ART]: "r/Art",
}

interface IInitialState {
    currentScreenName: SCREEN_NAMES,
    activeSubreddit: string,
    activeTopic: TOPIC_NAMES | null
}

const initialState: IInitialState = {
    currentScreenName: SCREEN_NAMES.POPULAR,
    activeSubreddit: "",
    activeTopic: null
}

export const ActiveScreenSlice = createSlice({
    name: "activeScreen",
    initialState: initialState,
    reducers: {
        setActiveScreen: (state, action) => {
            state.currentScreenName = action.payload;
        },
        setActiveTopic: (state, action) => {
            state.activeTopic = action.payload;
            state.currentScreenName = SCREEN_NAMES.TOPIC;
        },
        setActiveSubreddit: (state, action) => {
            state.activeSubreddit = action.payload;
            state.currentScreenName = SCREEN_NAMES.SUBREDDIT;
        }
    },
});

export const {setActiveScreen, setActiveTopic, setActiveSubreddit} = ActiveScreenSlice.actions;

export const selectActiveScreen = (state: RootState) => state.activeScreen.currentScreenName;
export const selectActiveTopic = (state: RootState) => state.activeScreen.activeTopic;
export const selectActiveSubreddit = (state: RootState) => state.activeScreen.activeSubreddit;

export default ActiveScreenSlice.reducer;