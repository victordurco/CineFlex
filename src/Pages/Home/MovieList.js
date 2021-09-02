import './MovieList.css';
import '../../Components/Shared/loading.css';
import loading from '../../Components/Shared/loading.gif';
import axios from "axios";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const API_URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex';


const Movie = ({img, id}) => {
    return (
        <div className='moviePoster'>
            <Link to={`/sessoes/${id}`}>
                <img src={img} alt='movie poster'/>
            </Link>
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
            <div className='loadingContainer'>
                <img src={loading} alt='loading gif'/>;
            </div>
        );        
	}

    return (
        <div className='movieList'>
            {movies.map((movie, index)=>
                <Movie 
                    key={index}
                    id={movie.id}
                    img={movie.posterURL}
                    title={movie.title}        
                />
            )}
            
        </div>
        
    );
}