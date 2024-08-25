// src/redux/hoverSlice.jsx
import { createSlice } from '@reduxjs/toolkit';

const hoverSlice = createSlice({
  name: 'hover',
  initialState: {
    hoveredCard: null,
  },
  reducers: {
    setHoveredCard: (state, action) => {
      state.hoveredCard = action.payload;
    },
    clearHoveredCard: (state) => {
      state.hoveredCard = null;
    },
  },
});

export const { setHoveredCard, clearHoveredCard } = hoverSlice.actions;
export default hoverSlice.reducer;
