import './MovieList.css';
import loading from '../../loading.gif';
import axios from "axios";
import { useState, useEffect } from 'react';
const API_URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex';


const Movie = ({img, title}) => {
    return (
        <div className='moviePoster'>
            <img src={img} alt='movie poster'/>
        </div>
    );
}


export default function MovieList(){
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        const request = axios.get(API_URL+'/movies');
        request.then((response)=>{
            setMovies([...response.data]);
        });
    },[]);
   
    if(movies.length === 0) {
		return (
            <div className='movieList'>
                <img src={loading} alt='loading gif'/>;
            </div>
        );        
	}

    return (
        <div className='movieList'>
            {movies.map((movie, index)=>
                <Movie 
                    key={index}
                    img={movie.posterURL}
                    title={movie.title}        
                />
            )}
            
        </div>
        
    );
}