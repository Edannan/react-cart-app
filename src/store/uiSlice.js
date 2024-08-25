import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { showModal: false },
  reducers: {
    toggleModal(state, action) {
      state.showModal = !state.showModal;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
