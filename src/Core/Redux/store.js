import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./slice/drawerSlice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
  },
});
