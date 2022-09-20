import {configureStore} from "@reduxjs/toolkit";
import selectorReducer from "./features/selector/selectorSlice"
import stepReducer from "./features/step/stepSlice"
import tableNumberReducer from "./features/tableNumber/tableNumberSlice"
import cocktailReducer from "./features/cocktail/cocktailSlice"
import cocktailNumberReducer from "./features/cocktailNumber/cocktailNumberSlice"
import cocktailArrReducer from "./features/cocktailArr/cocktailArrSlice"
import numberArrReducer from "./features/numberArr/numberArrSlice"
export default configureStore({
    reducer:{
        selector:selectorReducer,
        step:stepReducer,
        tableNumber:tableNumberReducer,
        cocktail:cocktailReducer,
        cocktailNumber:cocktailNumberReducer,
        cocktailArr:cocktailArrReducer,
        numberArr:numberArrReducer
    },
})