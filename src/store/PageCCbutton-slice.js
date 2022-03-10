import { createSlice } from "@reduxjs/toolkit";

const PageCCbuttonSlice = createSlice({
  name: "PageCCbutton",
  initialState: { PageCCIsVisible: false },
  reducers: {
    toggle(state) {
      state.PageCCIsVisible = !state.PageCCIsVisible;
    },
    addCampaignName(state, action) {
      const cName = action.payload;
      state.campaignName.push({
        campaignId: cName.Id,
        campaignName: cName.enteredName,
      });
    },
  },
});

export const PageCCbuttonActions = PageCCbuttonSlice.actions;

export default PageCCbuttonSlice;
