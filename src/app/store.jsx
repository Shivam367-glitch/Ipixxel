import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/Post/postsSlice';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});