import { createSlice } from "@reduxjs/toolkit";

const emptyTableSlice = createSlice({
    name: 'emptyTable',
    initialState: { tableIsEmpty: true },
    reducers: {
        nodata(state){
            state.tableIsEmpty = true;
        },
        hasdata(state){
            state.tableIsEmpty = false;
        },
    } 
});

export const emptyTableActions = emptyTableSlice.actions;

export default emptyTableSlice;