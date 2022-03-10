import { createSlice } from "@reduxjs/toolkit";

const draftSlice = createSlice({
    name: 'draft',
    initialState: { draftIsVisible: false },
    reducers: {
        visible(state){
            state.draftIsVisible = true;
        },
        notVisible(state){
            state.draftIsVisible = false;
        }
    } 
});

export const draftActions = draftSlice.actions;

export default draftSlice;