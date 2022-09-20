import React from "react";
import {useSelector,useDispatch} from "react-redux";
import {setTableNumber,selectTableNumber} from "../redux/features/tableNumber/tableNumberSlice";
import {setCocktailArr,selectCocktailArr} from "../redux/features/cocktailArr/cocktailArrSlice";
import {setNumberArr,selectNumberArr} from "../redux/features/numberArr/numberArrSlice";

export default function Receipt(){
    const tableNumber = useSelector(selectTableNumber);
    const cocktailArr = useSelector(selectCocktailArr);
    const numberArr = useSelector(selectNumberArr);
    return (
        <div>


        <div style={{position:"absolute",marginLeft:"800px",marginTop:"50px"}}>
            <table>
                <tr>
                    <td>Table </td>
                    <td>{tableNumber}</td>
                </tr>
            </table>
            <div>
                {
                    cocktailArr.map(item=>{
                        return (
                            <div style={{width:'250px'}}>
                                {item}
                            </div>
                        )
                    })
                }

            </div>


        </div>
            <div style={{position:"absolute",marginLeft:"1100px",marginTop:"78px"}}>
                {
                    numberArr.map(item=>{
                        return (
                            <div>
                                {item}
                            </div>
                        )
                    })
                }
            </div>
        </div>

    )
}