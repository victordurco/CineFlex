import loading from '../../loading.gif';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import Session from './Session';
import PageTitle from '../Home/PageTitle';
const API_URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex';

export default function ChooseSession(){
    const [sessions, setSessions] = useState(null);
    const {idFilme} = useParams();
    const id = idFilme;

    useEffect(()=>{
        const request = axios.get(API_URL+`/movies/${id}/showtimes`);
        request.then(response => {setSessions(response.data)});
       
    },[]);

    if(sessions===null)
        return <img src={loading} alt='loading gif'/>;
        
    return (
        <div>
            <PageTitle>Selecione o horário</PageTitle>
            {console.log(sessions.days[0].showtimes)}
            {sessions.days.map((day, index )=> {
                <Session 
                    key = {index}
                    id = {day.id}
                    date = {day.date}
                    weekday = {day.weekday}
                    showtimes = {[...day.showtimes]}
            />})}
        </div>
    );
}