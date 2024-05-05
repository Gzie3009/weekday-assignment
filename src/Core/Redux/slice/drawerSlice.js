// slice.js
import { createSlice } from "@reduxjs/toolkit";

export const sidebarSlice = createSlice({
  name: "sidebars",
  initialState: {
    isSidebarOpen: false,
    isProfileOpen: false,
  },
  reducers: {
    toggleSidebar: (state, action) => {
      state.isSidebarOpen = action.payload;
    },
    toggleProfile: (state, action) => {
      state.isProfileOpen = action.payload;
    },
    toggleBottomProfile: (state, action) => {
      state.isBottomProfileOpen = action.payload;
    },
  },
});

export const { toggleSidebar, toggleProfile } = sidebarSlice.actions;

export default sidebarSlice.reducer;
