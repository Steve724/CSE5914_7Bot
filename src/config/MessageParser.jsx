// in MessageParser.js
import React,{useState,useEffect} from 'react';
import {useSelector,useDispatch} from "react-redux";
import {setStep,selectStep} from "../redux/features/step/stepSlice";
import {setTableNumber,selectTableNumber} from "../redux/features/tableNumber/tableNumberSlice";
import {selectCocktail,setCocktail} from "../redux/features/cocktail/cocktailSlice";
import {setCocktailNumber,selectCocktailNumber} from "../redux/features/cocktailNumber/cocktailNumberSlice";
import {setCocktailArr,selectCocktailArr} from "../redux/features/cocktailArr/cocktailArrSlice";
import {setNumberArr,selectNumberArr} from "../redux/features/numberArr/numberArrSlice";

function MessageParser({ children, actions }){
    const step = useSelector(selectStep);
    const cocktail = useSelector(selectCocktail);
    const cocktailNumber = useSelector(selectCocktailNumber);
    const cocktailArr = useSelector(selectCocktailArr);
    const dispatch = useDispatch();
    const [cocktailName,setCocktailName] = useState("");
    // const [cocktailObject,setCocktailObject] = useState({
    //     name:cocktail,
    //     number:cocktailNumber
    // })
    const parse = (message) => {
        if (message.includes('hello')) {
            actions.handleHello();
        }else if(message.includes('ge')){
            actions.handleHello();
        }else if(!isNaN(message)&&step===0){
            var tmp = parseInt(message);
            dispatch(setTableNumber(tmp));
            actions.handleTableNumber();
            // console.log(step);
        }else if(message.includes('by f')){
            actions.handleSelector();
        }else if(message.includes('Margarita')&&step===1){
            dispatch(setCocktail(message));
            if(!cocktailArr.includes(message)){
                dispatch(setCocktailArr(message));
            }
            actions.handleCocktail();
        }else if(!isNaN(message)&&step===1){
            var tmp = parseInt(message);
            dispatch(setCocktailNumber(tmp));
            // dispatch(setCocktailArr(cocktailObject));
            // console.log(cocktailObject);
            dispatch(setNumberArr(tmp));
            console.log(cocktailNumber);
            actions.handleCocktailNumber();
        }else if(message.includes('No')&&step===1){
            fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
                .then(response=>response.json())
                .then(data=>{
                    setCocktailName(data.drinks[0].strDrink);
                    actions.handleRandomCocktail(data.drinks[0].strDrink);
                    setCocktail(data.drinks[0].strDrink);
                })
        }
    };

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    parse: parse,
                    actions,
                });
            })}
        </div>
    );
};

export default MessageParser;