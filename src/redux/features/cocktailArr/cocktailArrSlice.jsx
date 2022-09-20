import {createSlice} from "@reduxjs/toolkit";

export const cocktailArrSlice = createSlice({
    name:'cocktailArr',
    initialState:{
        value:[],
    },
    reducers:{
        setCocktailArr:(state,action)=>{
            state.value.push(action.payload);
        }
    }
})

export const {setCocktailArr} = cocktailArrSlice.actions

export const selectCocktailArr = (state) => state.cocktailArr.value;

export default cocktailArrSlice.reducer