import { RootState } from './store.types'

export const selectTheme = (state: RootState) => state.theme
export const selectThemeMode = (state: RootState) => state.theme.mode

export const selectHackerNewsApi = (state: RootState) => state.hackerNewsApi

export const selectIsDarkMode = (state: RootState) => state.theme.mode === 'dark'
export const selectIsLightMode = (state: RootState) => state.theme.mode === 'light'

export const selectNewStoriesIds = (state: RootState) => state.hackerNewsApi.queries['getNewStoriesIds(undefined)']?.data as number[] | undefined

export const selectItemById = (id: number) => (state: RootState) => state.hackerNewsApi.queries[`getItem(${id})`]?.data
