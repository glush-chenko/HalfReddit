import { createSlice } from '@reduxjs/toolkit';

interface TabsI {
    tabName: string
}

interface RecentI {
    recentTabs: TabsI[]
}

const initialState: RecentI = {
    recentTabs: [],
};

const tabsSlice = createSlice({
    name: 'tabs',
    initialState,
    reducers: {
        addRecentTab: (state, action) => {
            const { tabName } = action.payload;
            if (!state.recentTabs.includes(tabName)) {
                if (state.recentTabs.length >= 5) {
                    state.recentTabs.pop();
                }
                state.recentTabs.unshift(tabName);
            }
        },
    },
});

export const { addRecentTab } = tabsSlice.actions;
export default tabsSlice.reducer;