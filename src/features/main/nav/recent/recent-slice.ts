import {AnyAction, createSlice} from '@reduxjs/toolkit';
import {RootState} from "../../../../app/store";
import {ISubreddit} from "../../../../types/subreddit.interface";
import {REHYDRATE} from "redux-persist";

const MINUTES_30 = 1800000;

interface RecentI {
    recent: ISubreddit[],
}

const initialState: RecentI = {
    recent: [],
};

const recent = createSlice({
    name: 'recentSlice',
    initialState,
    reducers: {
        addRecent: (state, action) => {
            const recent = state.recent.filter((item) => {
                return item.prefixed !== action.payload.prefixed
            })
            state.recent = [
                {
                    ...action.payload,
                    lastActivity: Date.now(),
                },
                ...recent.slice(0, 4)
            ];
        },
    },
    extraReducers: (builder) => {
        builder.addCase(REHYDRATE, (state, action: AnyAction) => {
            console.log(action.payload.recentSlice.recent)
            state.recent = action.payload.recentSlice.recent.filter((item: ISubreddit) => {
                const now = Date.now();

                if (item.lastActivity) {
                    const diff =  now - item.lastActivity;
                    return diff < MINUTES_30;
                }
                return item;
            })
        });
    },
})

export const { addRecent } = recent.actions;
export const selectRecent = (state: RootState) => state.recentSlice.recent;
export default recent.reducer;