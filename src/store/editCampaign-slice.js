import { createSlice } from "@reduxjs/toolkit";

const editSlice = createSlice({
    name: 'edit',
    initialState: { editCampIsVisible: false },
    reducers: {
        toggle(state){
            state.editCampIsVisible = !state.editCampIsVisible;
        }
    } 
});

export const editActions = editSlice.actions;

export default editSlice;