import './OrderSuccess.css';
import { Link } from 'react-router-dom';

export default function OrderSuccess(){
    let order = JSON.parse(localStorage.getItem("order"));
    let session = JSON.parse(localStorage.getItem("session"));
    let seats = [];
    order.ids.forEach((id)=>{session.seats.forEach(element => {
        if (id === element.id)
            seats.push(element.name);
    });})

    const clearLocalStorage = () =>{
        localStorage.setItem("order", JSON.stringify(''));
        localStorage.setItem("session", JSON.stringify(''));
    }
    
    return (
        <div className='OrderSuccessContainer'>
            {console.log(session)}
            <span className='successTitle'>Pedido feito com sucesso!</span>
            <span className='infoTitle'>Filme e sessão</span>
            <span className='infoText'>{session.movie.title}</span>
            <span className='infoText'>{session.day.date} {session.name}</span>
            <span className='infoTitle columnSeparation'>Ingressos</span>
            {seats.map((seat, index)=> <span key={index} className='infoText'>Assento {seat}</span>)}
            <span className='infoTitle columnSeparation'>comprador</span>
            <span className='infoText'>{`Nome: ${order.name}`}</span>
            <span className='infoText'>{`CPF: ${order.cpf}`}</span>
            <Link to='/'>
            <button onClick={()=>clearLocalStorage()}>Voltar para Home</button>
            </Link>
        </div>
    );
}