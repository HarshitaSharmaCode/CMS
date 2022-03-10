import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: { searchIsVisible: false },
    reducers: {
        visible(state){
            state.searchIsVisible = true;
        },
        notVisible(state){
            state.searchIsVisible = false;
        }
    } 
});

export const searchActions = searchSlice.actions;

export default searchSlice;