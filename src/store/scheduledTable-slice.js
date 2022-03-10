import { createSlice } from "@reduxjs/toolkit";

const scheduledSlice = createSlice({
    name: 'scheduled',
    initialState: { scheduledIsVisible: false },
    reducers: {
        visible(state){
            state.scheduledIsVisible = true;
        },
        notVisible(state){
            state.scheduledIsVisible = false;
        }
    } 
});

export const scheduledActions = scheduledSlice.actions;

export default scheduledSlice;