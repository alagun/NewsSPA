import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface IHNItem {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  text: any
  id: number
  by?: string
  title?: string
  url?: string
  score?: number
  time?: number
  kids?: number[]
  type?: string
  descendants?: number
}

export const hackerNewsApi = createApi({
  reducerPath: 'hackerNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://hacker-news.firebaseio.com/v0/' }),
  endpoints: builder => ({
    getNewStoriesIds: builder.query<number[], void>({
      query: () => 'newstories.json',
      transformResponse: (res: number[]) => (res || []).slice(0, 100),
    }),
    getItem: builder.query<IHNItem, number>({ query: id => `item/${id}.json` }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getUser: builder.query<any, string>({ query: id => `user/${id}.json` }),
  }),
})

export const { useGetNewStoriesIdsQuery, useGetItemQuery, useGetUserQuery } = hackerNewsApi

