import React from "react";
import ReactDOM from "react-dom/client";
import GetCockTailData from "../InnerComponents/GetCockTailData";
import MyComponent from "../MyComponent";
export default function About(){
    return (
        <div>
            <div style={{position:"fixed"}}>
                <MyComponent/>
            </div>
            <GetCockTailData/>
            {/*<div style={{position:"fixed"}}>*/}
            {/*    <MyComponent/>*/}
            {/*</div>*/}

        </div>
    )
}