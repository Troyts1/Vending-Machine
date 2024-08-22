import React from "react";
import { Link } from "react-router-dom";
import "./Coke.css";




function Coke(){
    return(
        <div className="coke-background">
        <h1 class="goback"><Link to="/">Go Back</Link></h1>
        </div>
    )
}


export default Coke;