import { createSlice } from "@reduxjs/toolkit";

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState: {
        dashboardIsVisible: false,
    },
    reducers: {
        visible(state){
            state.dashboardIsVisible = true;
        },
        notVisible(state){
            state.dashboardIsVisible = false;
        },
    } 
});

export const dashboardActions = dashboardSlice.actions;

export default dashboardSlice;