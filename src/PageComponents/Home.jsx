import React from "react";
import ReactDOM from "react-dom/client";
import {Link} from "react-router-dom";

export default function Home(){
    return (
        <div>
            <main>
                <h2>Welcome to the Cocktail recommendation homepage!</h2>
                <p>You can do this, I believe in you.</p>
            </main>
            <nav>
                <Link to="/cocktail">Cocktail</Link>
            </nav>
        </div>
    )
}