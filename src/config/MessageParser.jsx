// in MessageParser.js
import React,{useState,useEffect} from 'react';
import {useSelector,useDispatch} from "react-redux";
import {setStep,selectStep} from "../redux/features/step/stepSlice";
import {setTableNumber,selectTableNumber} from "../redux/features/tableNumber/tableNumberSlice";
import {selectCocktail,setCocktail} from "../redux/features/cocktail/cocktailSlice";
import {setCocktailNumber,selectCocktailNumber} from "../redux/features/cocktailNumber/cocktailNumberSlice";
import {setCocktailArr,selectCocktailArr} from "../redux/features/cocktailArr/cocktailArrSlice";
import {setNumberArr,selectNumberArr} from "../redux/features/numberArr/numberArrSlice";
let drink_list = []
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
    //
    const parse = (message) => {

        fetch('http://localhost:5005/webhooks/rest/webhook', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'charset':'UTF-8',
            },
            credentials: "same-origin",
            body: JSON.stringify({ "sender": "1", "message": message }),
        })
            .then(response => response.json())
            .then((response) => {
                if(response){
                    for(let i=0;i<response.length;i++){
                        const temp = response[i]
                        const recipient_msg = temp["text"];

                        actions.handleMsg(recipient_msg)
                    }
                }
            })

        fetch('http://localhost:5005/model/parse', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'charset':'UTF-8',
            },
            credentials: "same-origin",
            body: JSON.stringify({ "text": message }),
        })
            .then(response => response.json())
            .then((response) => {
                console.log(response)
                console.log(response.intent.name)
                if (response.entities.length === 2){
                    console.log(`Msg has a quantity. Quantity is ${response.entities[0].value}`)
                    dispatch(setNumberArr(response.entities[0].value));
                    // console.log(`entity value is ${response.entities[0].value}`)
                }
                if (response.intent.name==="order" && response.entities.length === 1) {
                    if(response.entities.length != 0){
                        dispatch(setCocktailArr(response.entities[0].value))
                        drink_list.push(response.entities[0].value)
                    }
                }
                else if(response.intent.name==="check_list"){
                    let msg = ""
                    if (drink_list.length === 0){
                        msg = "It seems like you haven't ordered anything yet."
                    }
                    else {
                        msg = "So far you have ordered a cup of "
                        for(let i=0;i<drink_list.length;i++){
                            msg += drink_list[i] + " and a cup of "
                        }
                        msg = msg.substring(0, msg.length-14) + "."
                    }
                    actions.handleMsg(msg)
                }
                else if(response.intent.name==="remove_drink"){
                    let msg = ""
                    let find = false

                    const index = drink_list.indexOf(response.entities[0].value)
                    if(index>-1){
                        drink_list.splice(index, 1)
                        find = true
                    }
                    if(find === false){
                        msg = "Hmm, I don't think you ordered a " + response.entities[0].value
                    }
                    else{
                        msg = `Yep, I have removed ${response.entities[0].value} from your order!<`
                    }
                    actions.handleMsg(msg)
                }
                else if(response.intent.name==="tell_table_num"){
                    dispatch(setTableNumber(response.entities[0].value));
                }
                else if(response.intent.name === "ask_recom"){
                    let msg = "";
                    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
                        .then(response=>response.json())
                        .then(data=>{
                            msg = `Yeah, I would recommend ${data.drinks[0].strDrink}!`;
                            actions.handleMsg(msg);
                        })
                }
                console.log(`drink_list is ${drink_list}`)
            })


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