import {createSlice} from "@reduxjs/toolkit";

export const selectorSlice = createSlice({
    name:'selector',
    initialState:{
      value:0,
    },
    reducers:{
        changeSelector:(state,action)=>{
            state.value = action.payload
        }
    }
})

export const {changeSelector} = selectorSlice.actions

export const selectSelector = (state) => state.selector.value;

export default selectorSlice.reducer