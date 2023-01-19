import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterArticles: (_, action) => {
      const filtredArticls = action.payload.toLowerCase();
      return filtredArticls;
    },
  },
});

export const { filterArticles } = filterSlice.actions;

// Selectors
export const getFilter = state => state.filter;
