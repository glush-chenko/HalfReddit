import {createSlice} from '@reduxjs/toolkit';
import {RootState} from "../../../app/store";

export const headerSearchSlice = createSlice({
    name: "search",
    initialState: "",
    reducers: {
        setSearchTerm: (_state, action) => (action.payload),
        clearSearchTerm: (_state) => (""),
    },
});

export const {setSearchTerm, clearSearchTerm} = headerSearchSlice.actions;

export const selectSearchTerm = (state: RootState) => state.search;

export default headerSearchSlice.reducer;