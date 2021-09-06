import { useState } from "react";
import { Redirect } from "react-router";
import './Buyer.css'


export default function BuyerInfo({validadeBuyer}){
    const [buyerName, setBuyerName] = useState('');
    const [buyerCPF, setBuyerCPF] = useState('');
    
    return (
        <>
            <div className='buyerInfo'>
                <span>Nome do comprador:</span>
                <input value={buyerName} onChange={e => setBuyerName(e.target.value)} placeholder='Digite seu nome...'/>
                <span>CPF do comprador</span>
                <input value={buyerCPF} onChange={e => setBuyerCPF(e.target.value)} placeholder='Digite seu CPF...'/>
            </div>
            <button className='reserveSeat' onClick={()=>validadeBuyer(buyerName, buyerCPF)}>Reservar assento(s)</button>
        </>
    );
}

