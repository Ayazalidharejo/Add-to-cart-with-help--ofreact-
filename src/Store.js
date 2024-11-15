import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Slice/Addcart/Addcart'

export const store = configureStore({
    reducer: {
        Counter:counterReducer,
    },
  })