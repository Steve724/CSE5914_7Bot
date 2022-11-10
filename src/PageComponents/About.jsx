import React from "react";
import ReactDOM from "react-dom/client";
import GetCockTailData from "../InnerComponents/GetCockTailData";
import MyComponent from "../MyComponent";
import Receipt from "../InnerComponents/Recepit";
import {useSelector,useDispatch} from "react-redux";
import {Link} from "react-router-dom";

export default function About(){

    return (
        <div>
            <div style={{position:"fixed"}}>
                <Link to='/finish'>Finish</Link>
                <Link to='/'>Home</Link>
                <Receipt/>
                <MyComponent/>
            </div>
            <GetCockTailData/>
            {/*<div style={{position:"fixed"}}>*/}
            {/*    <MyComponent/>*/}
            {/*</div>*/}

        </div>
    )
}