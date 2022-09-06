// in MessageParser.js
import React from 'react';

const MessageParser = ({ children, actions }) => {
    const parse = (message) => {
        if (message.includes('hello')) {
            actions.handleHello();
        }else if(message.includes('ge')){
            actions.handleHello();
        }else if(!isNaN(message)){
            actions.handleTableNumber();
        }else if(message.includes('by f')){
            actions.handleSelector();
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