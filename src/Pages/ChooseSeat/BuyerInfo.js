import { useState } from "react";
import './BuyerInfo.css'




export default function BuyerInfo(){
    return (
        <div className='buyerInfo'>
            <span>Nome do comprador:</span>
            <input placeholder='Digite seu nome...'/>
            <span>CPF do comprador</span>
            <input placeholder='Digite seu CPF...'/>
        </div>
    );
}

