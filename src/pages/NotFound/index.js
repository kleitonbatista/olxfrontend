import React from "react";
import { Link } from "react-router-dom";
const Page = () =>{
    return (
        <div>
            <h1>Página não encontrada</h1>
            <br/>
            <Link to="/">Voltar para Home</Link>
        </div>
        
    );
}

export default Page;