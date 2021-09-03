import '../../Components/Shared/loading.css';
import './ChooseSeat.css';
import loading from '../../Components/Shared/loading.gif';
import PageTitle from '../Home/PageTitle';
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import SeatsSubtitle from './SeatsSubtitle';
const API_URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex';

const Seat = ({name, isAvailable}) => {
    const [seatStatus, setSeatStatus] = useState('');


    const selectSeat = () => {
        if(seatStatus==='')
            setSeatStatus('selected');
        else
            setSeatStatus('');
    }

    return (
        <div className={`seat ${isAvailable? seatStatus : 'unavailable'}`} onClick={()=>selectSeat()}>
            {name}
        </div>
    );
}

export default function ChooseSeat(){
    const [session, setSession] = useState(null);
    const {idSessao} = useParams();
    const id = idSessao;
    useEffect(()=>{
        const request = axios.get(API_URL+`/showtimes/${id}/seats`);
        request.then(response => {setSession(response.data)});
    },[id]);


    return (
        session === null ?
            <div className='loadingContainer'>
                <img src={loading} alt='loading gif'/>
            </div> 
            :
            <div>
                {console.log(session)}
                <PageTitle>Selecione o(s) assento(s)</PageTitle>
                <div className='seats'>
                    {session.seats.map((seat, index)=>
                        <Seat 
                            key = {index}
                            name = {seat.name}
                            isAvailable = {seat.isAvailable}
                        />
                    )}
            </div>
            <SeatsSubtitle />
        </div>
    );
}