import '../../Components/Shared/loading.css';
import loading from '../../Components/Shared/loading.gif';
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Session from './Session';
import PageTitle from '../Home/PageTitle';
import Footer from '../../Components/Shared/Footer';
const API_URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex';

export default function ChooseSession(){
    const [sessions, setSessions] = useState(null);
    const {idFilme} = useParams();
    const id = idFilme;

    useEffect(()=>{
        const request = axios.get(API_URL+`/movies/${id}/showtimes`);
        request.then(response => {setSessions(response.data)});
    },[id]);

    if(sessions===null)
        return (
            <div className='loadingContainer'>
                <img src={loading} alt='loading gif'/>
            </div>
        );
        
    return (
        <div>
            <PageTitle>Selecione o horário</PageTitle>
            {sessions.days.map((day, index )=> 
                <Session 
                    key = {index}
                    date = {day.date}
                    weekday = {day.weekday}
                    showtimes = {[...day.showtimes]}
                />
            )}
            <Footer sessions={sessions}/>
        </div>
    );
}