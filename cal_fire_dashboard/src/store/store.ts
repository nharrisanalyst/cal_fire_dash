import { configureStore } from '@reduxjs/toolkit'
import geoReducer from './slices/geoDataSlice';

const store = configureStore({
    reducer:{
        geoData:geoReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;