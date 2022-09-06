import {configureStore} from "@reduxjs/toolkit";
import selectorReducer from "./features/selector/selectorSlice"
export default configureStore({
    reducer:{
        selector:selectorReducer
    },
})