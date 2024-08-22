import React from "react";
import { Link } from "react-router-dom";
import "./VendingMachine.css";
import VendMachine from "./venMachine.jpeg";

function VendingMachine(){
    return(
        <body className="main-background" >
        <div id="main">
           <div className="hp">
            <h3 className="intro">I am a vending machine.</h3>
            <h3 className="intro" >I am giving out free items!</h3>
           </div>
           <div>
               <img src={VendMachine} alt="vending machine" />
           </div>
           <div className="hp">
           <h3 className="items"><Link to="/Coke">Coke</Link></h3>
           <h3 className="items"><Link to="/Doritos">Doritos</Link></h3>
           <h3 className="items"><Link to="/Reeses">Reeses</Link></h3>

               
           </div>
        </div>
        </body>
    )
}

export default VendingMachine;
