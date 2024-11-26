import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const ProductSlice =createSlice({
    name:"product",

    initialState:{
        items:[],
        Istoast:false,
       
    },
    reducers:{
      addProduct:(state, action)=>{
        // console.log(action ,"action");
        
       
        // const isExist =state.items.find(item=> item.id === action.payload.id);
        const IsExist = state.items.find(item=> item.id === action.payload.id)
        if (IsExist) {
        state.Istoast=true;
        }else{
            state.items.push({...action.payload,quanitity:1})
        }
  


      },
      increasequanitity:(state ,action)=>{
        const CartProduct = state.items.find(item=> item.id === action.payload.id)
        if (CartProduct) {
          CartProduct.quanitity +=1;
        }
      
        

      },
      dicrementquanitity:(state ,action)=>{
        const CartProduct = state.items.find(item=> item.id === action.payload.id)
        if (CartProduct &&CartProduct.quanitity>1) {
          CartProduct.quanitity -=1;
        }else{
         state.items=state.items.filter((item)=> item.id !==action.payload.id)
        }
      
        

      },
      RemoveItem:(state,action)=>{
        state.items=state.items.filter((item)=> item.id !==action.payload.id)
      }
    } 

   
})





export const {addProduct,increasequanitity,dicrementquanitity,RemoveItem}=  ProductSlice.actions
export default ProductSlice.reducer