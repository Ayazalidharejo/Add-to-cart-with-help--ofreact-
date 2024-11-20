import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Slice/Addcart/Addcart'
import ProductReducer from "./componants/ProductSlice/ProductSlice"

export const store = configureStore({
    reducer: {
        Counter:counterReducer,
        Products:ProductReducer,
    },
   
  })