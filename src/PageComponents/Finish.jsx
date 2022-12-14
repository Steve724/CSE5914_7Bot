import React, {useState} from "react";
import "./Finish.css"
import {useSelector} from "react-redux";
import {selectNumberArr} from "../redux/features/numberArr/numberArrSlice";
import {selectCocktailArr} from "../redux/features/cocktailArr/cocktailArrSlice";
import {Link} from "react-router-dom";

export default function Finish(){
    const numberArr = useSelector(selectNumberArr);
    const cocktailArr = useSelector(selectCocktailArr);
    const [money,setMoney] = useState(0);

    return (
        <div>
            <Link to="/cocktail">Cocktail</Link>
            <span style={{}}><Link to='/' >Home</Link></span>
            <table className="body-wrap">
                <tbody>
                <tr>
                    <td></td>
                    <td className="container" width="600">
                        <div className="content">
                            <table className="main" width="100%" cellPadding="0" cellSpacing="0">
                                <tbody>
                                <tr>
                                    <td className="content-wrap aligncenter">
                                        <table width="100%" cellPadding="0" cellSpacing="0">
                                            <tbody>
                                            <tr>
                                                <td className="content-block">
                                                    <h2>Thanks for using our app</h2>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="content-block">
                                                    <table className="invoice">
                                                        <tbody>
                                                        <tr>
                                                            <td>CocktailName</td>

                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <table className="invoice-items" cellPadding="0"
                                                                       cellSpacing="0">
                                                                    <tbody>
                                                                    {
                                                                        cocktailArr.map((item,key)=>{
                                                                            if(typeof item === 'undefined'){
                                                                                return <div></div>
                                                                            }

                                                                            return <tr>
                                                                                <td>{cocktailArr[key]}</td>
                                                                                <td className="alignright">{numberArr[key]}</td>
                                                                            </tr>
                                                                        })
                                                                    }
                                                                    <tr className="total">
                                                                        <td className="alignright" width="80%">Total
                                                                        </td>
                                                                        <td className="alignright">{money}</td>
                                                                    </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="content-block">
                                                    <a href="#">View in browser</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="content-block">
                                                    Company Inc. Ohio State 43216
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <div className="footer">
                                <table width="100%">
                                    <tbody>
                                    <tr>
                                        <td className="aligncenter content-block">Questions? Email <a
                                            href="mailto:">7_bot@cocktail.com</a></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </td>
                    <td></td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}