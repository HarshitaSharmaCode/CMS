import { createSlice } from "@reduxjs/toolkit";

const buttonSlice = createSlice({
    name: 'button',
    initialState: {
        cCModalIsVisible: false,
    },
    reducers: {
        toggle(state){
            state.cCModalIsVisible = !state.cCModalIsVisible;
        }
    } 
});

export const buttonActions = buttonSlice.actions;

export default buttonSlice;