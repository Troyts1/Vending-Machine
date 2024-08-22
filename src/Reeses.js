import React from "react";
import { Link } from "react-router-dom";
import "./Reeses.css";

function Reeses(){
    return(
        <div className="reeses-background">
            <h1 className="goback"><Link to="/">Go Back</Link></h1>
        </div>
    )
}

export default Reeses;
