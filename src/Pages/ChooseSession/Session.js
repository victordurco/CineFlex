import { Link } from "react-router-dom";

const ShowTime = ({name, id}) => {
    return (
        <Link to = {`/assentos/${id}`}>
            <button>{name}</button>
        </Link>
    );
}

export default function Session({id, date, weekday, showtimes}){
    console.log('entrei em session')
    return(
        <div>
            <span>{`${weekday} - ${date}`}</span>
            {showtimes.map((showtime, index) => {
                <ShowTime />
            })}
        </div>
    );
}