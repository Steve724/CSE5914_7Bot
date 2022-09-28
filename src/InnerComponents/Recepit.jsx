import React from "react";
import {useSelector,useDispatch} from "react-redux";
import {setTableNumber,selectTableNumber} from "../redux/features/tableNumber/tableNumberSlice";
import {setCocktailArr,selectCocktailArr} from "../redux/features/cocktailArr/cocktailArrSlice";
import {setNumberArr,selectNumberArr,plusOneNumber,decOneNumber} from "../redux/features/numberArr/numberArrSlice";

export default function Receipt(){
    const tableNumber = useSelector(selectTableNumber);
    const cocktailArr = useSelector(selectCocktailArr);
    const numberArr = useSelector(selectNumberArr);
    const dispatch = useDispatch();
    return (
        <div>


        <div style={{position:"absolute",marginLeft:"800px",marginTop:"50px"}}>
            <table>
                <tr>
                    <td>Table </td>
                    <td>{tableNumber}</td>
                    <td style={{paddingLeft:"230px"}}>bottles</td>
                </tr>
            </table>
            <div>
                {
                    cocktailArr.map(item=>{
                        return (
                            <div style={{width:'220px'}}>
                                {item}
                            </div>
                        )
                    })
                }

            </div>


        </div>
            <div style={{position:"absolute",marginLeft:"1100px",marginTop:"78px"}}>
                {
                    numberArr.map((item,index)=>{
                        return (
                            <div style={{width:"200px"}}>
                                <span>{item} <span onClick={()=>{dispatch(plusOneNumber(index))}}><i
                                    className="fa-solid fa-plus"></i></span> <span onClick={()=>{dispatch(decOneNumber(index))}}><i
                                    className="fa-solid fa-minus"></i></span></span>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    )
}