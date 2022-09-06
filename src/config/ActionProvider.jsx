// in ActionProvider.jsx
import React from 'react';
import {useSelector,useDispatch} from "react-redux";
import {changeSelector,selectSelector} from "../redux/features/selector/selectorSlice";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
    const selector =useSelector(selectSelector)
    const dispatch = useDispatch();
    const handleHello = () => {
        const botMessage = createChatBotMessage('Hello. Nice to meet you.');

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    const handleTableNumber = () =>{
        const botMessage = createChatBotMessage('Please provide your first name. So we can invite you to our vip club.');

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

    // Put the handleHello function in the actions object to pass to the MessageParser
    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        handleHello,
                        handleTableNumber,
                        handleSelector
                    },
                });
            })}
        </div>
    );
};

export default ActionProvider;