import { configureStore } from '@reduxjs/toolkit';
import { articlesApi } from './Articles/articlesOperations';
import { filterSlice } from './Articles/filterSlice';

export const store = configureStore({
  reducer: {
    [articlesApi.reducerPath]: articlesApi.reducer,
    filter: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    articlesApi.middleware,
  ],
});
