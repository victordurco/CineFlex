import '../../Components/Shared/loading.css';
import './ChooseSeat.css';
import loading from '../../Components/Shared/loading.gif';
import PageTitle from '../Home/PageTitle';
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Redirect } from "react-router-dom";
import SeatsSubtitle from './SeatsSubtitle';
import Buyer from './Buyer';
import Footer from '../../Components/Shared/Footer';
const API_URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex';

const Seat = ({ id, name, isAvailable, reserveSeats }) => {
    const [seatStatus, setSeatStatus] = useState('');


    const selectSeat = () => {
        if (seatStatus === '') {
            setSeatStatus('selected');
            reserveSeats.push(id)
        }
        else {
            setSeatStatus('');
            reserveSeats = reserveSeats.splice(reserveSeats.indexOf(id), 1);
        }
    }

    return (
        <div
            className={`seat ${isAvailable ? seatStatus : 'unavailable'}`}
            onClick={() => isAvailable ? selectSeat() : alert('Esse assento não está disponível')}>
            {name}
        </div>
    );
}


export default function ChooseSeat() {
    const [session, setSession] = useState(null);
    const [readyToRedirect, setReadyToRedirect] = useState(false);
    const { idSessao } = useParams();
    const id = idSessao;
    const reserveSeats = [];
    let order = {};

    useEffect(() => {
        const request = axios.get(API_URL + `/showtimes/${id}/seats`);
        request.then(response => { setSession(response.data) });
    }, [id]);

    const finishOrder = (name, cpf) => {
        order = {
            ids: reserveSeats,
            name: name,
            cpf: cpf
        };
        let promise = axios.post(`${API_URL}/seats/book-many`, order);
        promise.then(() => {
            alert('POSTADO');
            localStorage.setItem("order", JSON.stringify(order));
            localStorage.setItem("session", JSON.stringify(session));
            setReadyToRedirect(true);
        });
        promise.catch(() => alert('DEU RUIM'));
    }

    const validadeBuyer = (name, cpf) => {
        const isCPFValid = /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$/.test(cpf);
        const isNameValid = (name.length >= 5);
        if (!isNameValid) {
            alert('Nome inválido');
            return;
        }
        if (!isCPFValid) {
            alert('CPF inválido');
            return;
        }
        finishOrder(name, cpf)
    }

    return (
        session === null ?
            <div className='loadingContainer'>
                <img src={loading} alt='loading gif' />
            </div>
            :
            <div className='chooseSeatContainer'>
                <PageTitle>Selecione o(s) assento(s)</PageTitle>
                <div className='seats'>
                    {session.seats.map((seat, index) =>
                        <Seat
                            key={index}
                            name={seat.name}
                            id={seat.id}
                            isAvailable={seat.isAvailable}
                            reserveSeats={reserveSeats}
                        />
                    )}
                </div>
                <SeatsSubtitle />
                <Buyer
                    validadeBuyer={validadeBuyer}/>
                {readyToRedirect ?
                    <Redirect
                        to={{
                            pathname: "/sucesso",
                            state: {
                                order: order,
                                session: session
                            }
                        }}
                    /> : ''}
                <Footer session={session}/>
            </div>
    );
}