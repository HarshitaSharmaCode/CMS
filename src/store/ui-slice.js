import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState: { uiIsVisible: true },
    reducers: {
        toggle(state){
            state.uiIsVisible = !state.uiIsVisible;
        }
    } 
});

export const uiActions = uiSlice.actions;

export default uiSlice;