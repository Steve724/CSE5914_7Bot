import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import CockTailInfo from "./CockTailInfo";
import {useSelector} from "react-redux";
import {selectSelector} from "../redux/features/selector/selectorSlice";

export default function GetCockTailData(){
    const [drinks,setDrinks] = useState([]);
    const selector = useSelector(selectSelector);

    useEffect(()=>{
        let url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";
        if(selector===1){
            url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";
        }
        fetch(url)
            .then(response=>response.json())
            .then(data=>{
                setDrinks(data.drinks);
            })
    })
    return (
        <div>
            {
                drinks.length!=0 &&
                drinks.map((item,index)=>{
                    return (
                        <div key={index}>
                            <CockTailInfo strDrink={item.strDrink} strDrinkThumb={item.strDrinkThumb} strIngredient1={item.strIngredient1} strIngredient2={item.strIngredient2} strIngredient3={item.strIngredient3} strIngredient4={item.strIngredient4}/>
                        </div>
                    )
                })
            }
        </div>
    )
}