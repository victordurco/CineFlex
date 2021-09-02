import './Session.css';
import { Link } from "react-router-dom";

const ShowTime = ({name, id}) => {
    return (
        <Link to = {`/assentos/${id}`}>
            <button className='showTime'>{name}</button>
        </Link>
    );
}

export default function Session({date, weekday, showtimes}){
    return(
        <div className='session'>
            <span>{`${weekday} - ${date}`}</span>
            <div className='showTimes'>
                {showtimes.map((showtime, index) => 
                    <ShowTime 
                        key = {index}  
                        name = {showtime.name}
                        id = {showtime.id}  
                    />
                )}
            </div>
        </div>
    );
}