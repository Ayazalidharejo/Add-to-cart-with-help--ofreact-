import { createSlice } from '@reduxjs/toolkit'


  const initialState = {
  
    value: 0,
  }

  export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        Addcart:((state)=>{
            state.value +=1
        })
    }
    });




















    export const { Addcart } = counterSlice.actions
    export default counterSlice.reducer