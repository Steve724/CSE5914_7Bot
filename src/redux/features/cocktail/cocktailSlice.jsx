import {createSlice} from "@reduxjs/toolkit";

export const cocktailSlice = createSlice({
    name:'cocktail',
    initialState:{
        value:"",
    },
    reducers:{
        setCocktail:(state,action)=>{
            state.value = action.payload
        }
    }
})

export const {setCocktail} = cocktailSlice.actions

export const selectCocktail = (state) => state.cocktail.value;

export default cocktailSlice.reducer