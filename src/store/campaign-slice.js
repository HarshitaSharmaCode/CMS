import { createSlice } from "@reduxjs/toolkit";

const campaignSlice = createSlice({
    name: 'campaign',
    initialState: {
        campaignIsVisible: true,
    },
    reducers: {
        visible(state){
            state.campaignIsVisible = true;
        },
        notVisible(state){
            state.campaignIsVisible = false;
        },
    } 
});

export const campaignActions = campaignSlice.actions;

export default campaignSlice;