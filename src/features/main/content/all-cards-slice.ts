import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {ICard} from "../../../types/card.interface";
import {RootState} from "../../../app/store";

interface ICardsSliceInitialState {
    cards: ICard[],
    isLoadingCards: boolean,
    failedToLoadCards: boolean,
    createCardsIsPending: boolean
}

export const loadPopularCardsData = createAsyncThunk(
    "popularCardsData/loadPopularCardsData",
    async () => {
        const response = await fetch("https://www.reddit.com/r/popular.json");
        return await response.json();
    }
)

export const loadProfileImg = createAsyncThunk(
    "popularCardsData/loadProfileImg",
    async (author: string) => {
        const response = await fetch(`https://www.reddit.com/user/${author}/about.json`);
        return await response.json();
    }
)

const initialState= {
    cards: [],
    isLoadingCards: false,
    failedToLoadCards: false,
    createCardsIsPending: false
} satisfies ICardsSliceInitialState as ICardsSliceInitialState

export const cardsSlice = createSlice({
    name: "cards",
    initialState: initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadPopularCardsData.pending, (state) => {
                state.isLoadingCards = true;
                state.failedToLoadCards = false;
            })
            .addCase(loadPopularCardsData.fulfilled, (state, action) => {
                state.cards = action.payload.data.children.map((card: any): ICard => ({
                    id: card.data.id,
                    title: card.data.title,
                    author: card.data.author,
                    permalink: card.data.permalink,
                    url: card.data.url,
                    numComments: card.data.num_comments,
                    createdDate: new Date(card.data.created * 1000),
                    ups: Math.round(card.data.ups)
                }));
            })
            .addCase(loadPopularCardsData.rejected, (state) => {
                state.isLoadingCards = false;
                state.failedToLoadCards = true;
            })
            .addCase(loadProfileImg.pending, (state) => {
                state.isLoadingCards = true;
                state.failedToLoadCards = false;
            })
            .addCase(loadProfileImg.fulfilled, (state, action) => {
                state.cards = state.cards.map((card) => {
                       if (card.author === action.meta.arg) {
                           card.authorImgUrl = action.payload.data.icon_img;
                       }
                       return card;
                })
            })
            .addCase(loadProfileImg.rejected, (state) => {
                state.isLoadingCards = false;
                state.failedToLoadCards = true;
            })
    }
});

export const selectAllCards = (state: RootState) => state.cards.cards;

export const isLoadingCards = (state: RootState) => state.cards.isLoadingCards;

export default cardsSlice.reducer;