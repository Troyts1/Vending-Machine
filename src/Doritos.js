import React from "react";
import { Link } from "react-router-dom";
import "./Doritos.css";





function Doritos(){
    return(
        <div className="doritos-background">
        <h1 className="goback"><Link to="/">Go Back</Link></h1>
        </div>
    )
}


export default Doritos;