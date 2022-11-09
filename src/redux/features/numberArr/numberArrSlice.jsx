import {createSlice} from "@reduxjs/toolkit";

export const numberArrSlice = createSlice({
    name:'numberArr',
    initialState:{
        value:[],
    },
    reducers:{
        setNumberArr:(state,action)=>{
            state.value.push(action.payload);
        },
        plusOneNumber:(state,action)=>{
            state.value[action.payload]++;
        },
        decOneNumber:(state,action)=>{
            if(state.value[action.payload]>0){
                state.value[action.payload]--;
            }
        },
        deleteOneNumber:(state,action)=>{
            delete state.value[action.payload];
        }
    }
})

export const {setNumberArr,plusOneNumber,decOneNumber,deleteOneNumber} = numberArrSlice.actions

export const selectNumberArr = (state) => state.numberArr.value;

export default numberArrSlice.reducer