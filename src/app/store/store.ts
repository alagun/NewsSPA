import { hackerNewsApi } from '@/features/hacker-news-api/hackerNewsApi'
import themeSlice from '@/features/theme/themeSlice'
import { configureStore } from '@reduxjs/toolkit'


export const store = configureStore({
  reducer: {
    [hackerNewsApi.reducerPath]: hackerNewsApi.reducer,
    theme: themeSlice,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['persist/PERSIST'],
    },
  }).concat(
    hackerNewsApi.middleware,
  ),
})