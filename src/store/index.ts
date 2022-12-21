import { configureStore } from '@reduxjs/toolkit'

import { api } from 'store/services/api'

import countSliderSlice from './counterSliderSlice'

const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        countSlider: countSliderSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware)
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
