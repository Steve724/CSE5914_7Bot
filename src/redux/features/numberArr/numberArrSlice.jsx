import {createSlice} from "@reduxjs/toolkit";

export const numberArrSlice = createSlice({
    name:'numberArr',
    initialState:{
        value:[],
    },
    reducers:{
        setNumberArr:(state,action)=>{
            state.value.push(action.payload);
        }
    }
})

export const {setNumberArr} = numberArrSlice.actions

export const selectNumberArr = (state) => state.numberArr.value;

export default numberArrSlice.reducer