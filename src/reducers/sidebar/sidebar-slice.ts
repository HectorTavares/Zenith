import { createSlice } from "@reduxjs/toolkit";

const initialState: { isOpen: Boolean } = { isOpen: false };

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    closeSidebar: (state) => {
      state.isOpen = false;
    },
    openSidebar: (state) => {
      state.isOpen = true;
    },
  },
});

export const { closeSidebar, openSidebar } = sidebarSlice.actions;
export const sidebarReducer = sidebarSlice.reducer;
