// in ActionProvider.jsx
import React from 'react';
import {useSelector,useDispatch} from "react-redux";
import {changeSelector,selectSelector} from "../redux/features/selector/selectorSlice";
import {setStep,selectStep} from "../redux/features/step/stepSlice";
import {setCocktail,selectCocktail} from "../redux/features/cocktail/cocktailSlice";
import {setCocktailNumber,selectCocktailNumber} from "../redux/features/cocktailNumber/cocktailNumberSlice";
import {setCocktailArr,selectCocktailArr} from "../redux/features/cocktailArr/cocktailArrSlice";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
    const selector =useSelector(selectSelector);
    const dispatch = useDispatch();
    const step = useSelector(selectStep);
    const cocktail = useSelector(selectCocktail);
    const cocktailNumber = useSelector(selectCocktailNumber);
    const cocktailArr = useSelector(selectCocktailArr);
    const handleHello = () => {
        const botMessage = createChatBotMessage('Hello. Nice to meet you.');

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    const handleTableNumber = () =>{
        const botMessage = createChatBotMessage('Do you have specific choice ?');
        //change step to 1
        dispatch(setStep(1));
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    const handleSelector = () =>{
        const botMessage = createChatBotMessage('By first letter.');
        dispatch(changeSelector(1));
        console.log(selector);
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    const handleCocktail = () => {
        const botMessage = createChatBotMessage('How many bottles are needed ?');
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    }

    const handleCocktailNumber = () => {
        const botMessage = createChatBotMessage('Do you have another specific choice ?');
        // dispatch(setStep(2));
        // dispatch(setCocktailArr(cocktailObject));
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    }

    const handleRandomCocktail = (cocktailName) => {
        const botMessage = createChatBotMessage(`Would you like to try ${cocktailName} ?`);
        // dispatch(setStep(2));
        // dispatch(setCocktailArr(cocktailObject));
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    }
    // Put the handleHello function in the actions object to pass to the MessageParser
    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        handleHello,
                        handleTableNumber,
                        handleSelector,
                        handleCocktail,
                        handleCocktailNumber,
                        handleRandomCocktail
                    },
                });
            })}
        </div>
    );
};

export default ActionProvider;