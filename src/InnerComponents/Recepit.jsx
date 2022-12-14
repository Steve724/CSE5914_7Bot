import React, {useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {setTableNumber,selectTableNumber} from "../redux/features/tableNumber/tableNumberSlice";
import {setCocktailArr,selectCocktailArr,deleteCocktail} from "../redux/features/cocktailArr/cocktailArrSlice";
import {setNumberArr,selectNumberArr,plusOneNumber,decOneNumber,deleteOneNumber} from "../redux/features/numberArr/numberArrSlice";
import {selectSelector,changeSelector} from "../redux/features/selector/selectorSlice";

export default function Receipt(){
    const tableNumber = useSelector(selectTableNumber);
    const cocktailArr = useSelector(selectCocktailArr);
    const numberArr = useSelector(selectNumberArr);
    const selector = useSelector(selectSelector);
    const dispatch = useDispatch();
    useEffect(()=>{

    },[numberArr])
    return (
        <div>


        <div style={{position:"absolute",marginLeft:"800px",marginTop:"50px"}}>
            <table>
                <tr>
                    <td><button onClick={()=>{dispatch(changeSelector(selector-1))}}><i className="fa-solid fa-caret-left"></i></button></td>
                    <td><button onClick={()=>{dispatch(changeSelector(selector+1))}}><i className="fa-solid fa-caret-right"></i></button></td>
                </tr>
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
            <div style={{position:"absolute",marginLeft:"1100px",marginTop:"105px"}}>
                {

                    numberArr.map((item,index)=>{
                        if (typeof item === 'undefined'){
                            return (
                                <div></div>
                            )
                        }
                        console.log(item);
                        return (
                            <div style={{width:"200px"}}>
                                <span>{item} <span onClick={()=>{dispatch(plusOneNumber(index))}}><i
                                    className="fa-solid fa-plus"></i></span> <span onClick={()=>{dispatch(decOneNumber(index))}}><i
                                    className="fa-solid fa-minus"></i>
                                </span>
                                    <span style={{paddingLeft:"20px"}} onClick={()=>{
                                        dispatch(deleteOneNumber(index))
                                        dispatch(deleteCocktail(index))
                                    }}><i className="fa-sharp fa-solid fa-trash"></i></span>
                                </span>

                            </div>
                        )
                    })
                }
            </div>
        </div>

    )
}