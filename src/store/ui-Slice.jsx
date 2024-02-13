import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { countries: [], theme: false,},
  reducers: {
    replaceCountry(state, action) {
      state.countries = action.payload.countries;
    },
    toggleTheme(state) {
      if (!state.theme) {
        state.theme = true;
      } else {
        state.theme = false;
      }
    },

  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
