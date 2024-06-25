import cardsReducer from "../features/main/content/content-slice"
import redditReducer from "../utils/reddit-api"
import activeScreenReducer from "../features/main/nav/nav-top-section/nav-top-section-slice"
import subredditsReducer from "../features/main/right-section/subreddits/subreddits-slice"
import {combineReducers} from "@reduxjs/toolkit";
import recentReducer from "../features/main/nav/recent/recent-slice"
import screenReducer from "../screen-slice"

const rootReducer = combineReducers({
    cards: cardsReducer,
    reddit: redditReducer,
    activeScreen: activeScreenReducer,
    subreddits: subredditsReducer,
    recentSlice: recentReducer,
    screenSlice: screenReducer,
});

export default rootReducer;