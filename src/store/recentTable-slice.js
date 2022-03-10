import { createSlice } from "@reduxjs/toolkit";

const recentSlice = createSlice({
    name: 'recent',
    initialState: { recentIsVisible: true },
    reducers: {
        visible(state){
            state.recentIsVisible = true;
        },
        notVisible(state){
            state.recentIsVisible = false;
        }
    } 
});

export const recentActions = recentSlice.actions;

export default recentSlice;