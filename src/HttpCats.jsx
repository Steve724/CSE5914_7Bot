import React, {useEffect, useState} from "react";
export default function HttpCats(){
    const [img,setImg] = useState();
    useEffect(()=> {

        fetch(`https://dog.ceo/api/breeds/image/random`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setImg(data.message);
            });
    },[])
    return (
        <div>
            {/*<img src={}/>*/}
            {/*<img src={img}/>*/}
            <div>
                <img src={img}/>
            </div>

        </div>
    )
}