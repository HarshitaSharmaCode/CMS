import { configureStore } from "@reduxjs/toolkit";
import campaignSlice from "./campaign-slice";
import dashboardSlice from "./dashboard-slice";
import buttonSlice from "./CCbutton-slice";
import PageCCbuttonSlice from "./PageCCbutton-slice";
import uiSlice from "./ui-slice";
import editSlice from "./editCampaign-slice";
import recentSlice from "./recentTable-slice";
import sentSlice from "./sentTable-slice";
import scheduledSlice from "./scheduledTable-slice";
import draftSlice from "./draftTable-slice";
import emptyTableSlice from "./emptyTable-slice";
import searchSlice from "./search-slice";

const store = configureStore({
  reducer: {
    campaign: campaignSlice.reducer,
    dashboard: dashboardSlice.reducer,
    search: searchSlice.reducer,
    emptyT: emptyTableSlice.reducer,
    btn: buttonSlice.reducer,
    pageCCbtn: PageCCbuttonSlice.reducer,
    ui: uiSlice.reducer,
    edit: editSlice.reducer,
    recent: recentSlice.reducer,
    sent: sentSlice.reducer,
    scheduled: scheduledSlice.reducer,
    draft: draftSlice.reducer,
  },
});

export default store;
