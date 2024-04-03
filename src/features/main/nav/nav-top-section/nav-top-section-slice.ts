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
    CELEBRITY = "CELEBRITY",
    ART = "ART",
}

export const TOPIC_REDDITS = {
    [TOPIC_NAMES.GAMING]: "r/Gaming",
    [TOPIC_NAMES.SPORTS]: "r/Sports",
    [TOPIC_NAMES.BUSINESS]: "r/Business",
    [TOPIC_NAMES.CRYPTO]: "r/Crypto",
    [TOPIC_NAMES.TELEVISION]: "r/Television",
    [TOPIC_NAMES.CELEBRITY]: "r/Celebrity",
    [TOPIC_NAMES.ART]: "r/Art",
}

export const ActiveScreenSlice = createSlice({
    name: "activeScreen",
    initialState: {
        currentScreenName: SCREEN_NAMES.POPULAR,
        activeSubreddit: "",
        activeTopic: "",
    },
    reducers: {
        setActiveScreen: (state, action) => {
            state.currentScreenName = action.payload;
        },
        setActiveTopic: (state, action) => {
            state.activeTopic = action.payload;
            state.currentScreenName = SCREEN_NAMES.TOPIC;
        },
    },
});

export const {setActiveScreen, setActiveTopic} = ActiveScreenSlice.actions;

export const selectActiveScreen = (state: RootState) => state.activeScreen.currentScreenName;
export const selectActiveTopic = (state: RootState) => state.activeScreen.activeTopic;

export default ActiveScreenSlice.reducer;