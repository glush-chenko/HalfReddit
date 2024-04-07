import {configureStore, ThunkAction, Action, PayloadAction} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import searchReducer from "../features/header/header-search/header-search-slice"
import cardsReducer from "../features/main/content/content-slice"
import redditReducer, {REQUEST_INTERVAL} from "../utils/reddit-api"
import activeScreenReducer from "../features/main/nav/nav-top-section/nav-top-section-slice"
import subredditsReducer from "../features/main/right-section/subreddits/subreddits-slice"
import commentsReducer from '../components/card/card-slice';

const rateLimitingMiddleware = () => (next: Function) => (action: PayloadAction<string>) => {
    if (action.type === 'reddit/fetchData/pending') {
        return new Promise((resolve) => {
            setTimeout(() => {
                const result = next(action);
                resolve(result);
            }, REQUEST_INTERVAL);
        });
    }
    return next(action);
};

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        search: searchReducer,
        cards: cardsReducer,
        reddit: redditReducer,
        activeScreen: activeScreenReducer,
        subreddits: subredditsReducer,
        comments: commentsReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rateLimitingMiddleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
