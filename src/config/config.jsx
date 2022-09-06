// in config.js
import { createChatBotMessage } from 'react-chatbot-kit';

const botName = 'ExcitementBot';

const config = {
    initialMessages: [createChatBotMessage(`Hello There! Welcome to cocktail recommendations! I am ${botName}.
Please tell me your table number！`)],
    botName: botName,
    customStyles: {
        botMessageBox: {
            backgroundColor: '#376B7E',
        },
        chatButton: {
            backgroundColor: '#5ccc9d',
        }


    },
};

export default config;