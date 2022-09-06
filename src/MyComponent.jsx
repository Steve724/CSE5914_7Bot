import config from "./config/config";
import MessageParser from "./config/MessageParser";
import ActionProvider from "./config/ActionProvider";
import {Chatbot} from "react-chatbot-kit";
import "./chatBot.css"
export default function MyComponent(){
    return (
        <div style={{position:"absolute",marginLeft:"800px",marginTop:"200px"}}>
            <Chatbot
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}

            />
        </div>
    )
}