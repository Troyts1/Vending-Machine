import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import Doritos from "./Doritos";
import Coke from "./Coke";
import Reeses from "./Reeses";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VendingMachine/>} />
          <Route path="/coke" element={<Coke/>} />
          <Route path="/doritos" element={<Doritos/>} />
          <Route path="/reeses" element={<Reeses/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;




