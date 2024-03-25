import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import searchReducer from "../features/header/header-search-slice"
import cardsReducer from "../features/main/content/all-cards-slice"
import imageReducer from "../features/main/right-section/subreddit/subreddit-slice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    search: searchReducer,
    cards: cardsReducer,
    image: imageReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
