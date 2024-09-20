// src/redux/store.jsx
import { configureStore } from '@reduxjs/toolkit';
import hoverReducer from './hoverSlice';

const store = configureStore({
  reducer: {
    hover: hoverReducer,
  },
});

export default store;
