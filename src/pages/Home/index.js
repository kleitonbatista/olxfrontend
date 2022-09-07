import React from "react";
import { Link } from "react-router-dom";
const Page = () =>{
    return (
        <div>
            <h1>Página Principal</h1>
            <br/>
            <Link to="/about">Ir para página sobre</Link>
        </div>
        
    );
}

export default Page;