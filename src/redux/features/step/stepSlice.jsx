import {createSlice} from "@reduxjs/toolkit";

export const stepSlice = createSlice({
    name:'step',
    initialState:{
        value:0,
    },
    reducers:{
        setStep:(state,action) =>{
            state.value = action.payload
        },
    },
})

export const {setStep} = stepSlice.actions

export const selectStep = (state) => state.step.value;

export default stepSlice.reducer