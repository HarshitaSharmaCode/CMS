import { createSlice } from "@reduxjs/toolkit";

const sentSlice = createSlice({
    name: 'sent',
    initialState: { sentIsVisible: false },
    reducers: {
        visible(state){
            state.sentIsVisible = true;
        },
        notVisible(state){
            state.sentIsVisible = false;
        }
    } 
});

export const sentActions = sentSlice.actions;

export default sentSlice;