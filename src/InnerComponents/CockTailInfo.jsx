import React from "react";
import ReactDOM from "react-dom/client";
import "./cockTail.css"
import {setCocktailArr,selectCocktailArr} from "../redux/features/cocktailArr/cocktailArrSlice";
import {useDispatch,useSelector} from "react-redux";
import { placeholderText } from 'react-chatbot-kit';
export default function CockTailInfo({strDrink,strDrinkThumb,strIngredient1,strIngredient2,strIngredient3,strIngredient4}){
    const dispatch = useDispatch();
    const cocktailArr = useSelector(selectCocktailArr);
    function handleClick(){
        if(!cocktailArr.includes(strDrink)){
            dispatch(setCocktailArr(strDrink));

        }
    }
    return (
        <div style={{borderWidth:"1px",borderRadius:"20px",borderColor:"black",borderStyle:"solid",marginLeft:"200px",marginRight:"800px"}}>
            <img src={strDrinkThumb} style={{width:"150px",height:"120px",display:"inline-block",paddingTop:"5px",paddingLeft:"5px"}}/>
            <p style={{display:"inline-block",float:"right"}} onClick={()=>{
                handleClick();
            }}>{strDrink}</p>
            <h5 className="item" style={{color:"black",margin:"3px",paddingLeft:"10px"}}>Ingredient:</h5>
            <p className="item">{strIngredient1}</p>
            <p className="item">{strIngredient2}</p>
            <p className="item">{strIngredient3}</p>
            <p className="item">{strIngredient4}</p>
        </div>
    )
}