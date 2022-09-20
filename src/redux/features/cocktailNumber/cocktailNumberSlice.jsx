import {createSlice} from "@reduxjs/toolkit";

export const cocktailNumberSlice = createSlice({
    name:'cocktailNumber',
    initialState:{
        value:0,
    },
    reducers:{
        setCocktailNumber:(state,action)=>{
            state.value = action.payload
        }
    }
})

export const {setCocktailNumber} = cocktailNumberSlice.actions

export const selectCocktailNumber = (state) => state.cocktailNumber.value;

export default cocktailNumberSlice.reducer