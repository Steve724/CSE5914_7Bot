import {createSlice} from "@reduxjs/toolkit";

export const tableNumberSlice = createSlice({
    name:"tableNumber",
    initialState:{
        value:0
    },
    reducers:{
        setTableNumber:(state,action) =>{
            state.value = action.payload
        },
    },
})

export const {setTableNumber} = tableNumberSlice.actions

export const selectTableNumber = (state) => state.tableNumber.value;

export default tableNumberSlice.reducer