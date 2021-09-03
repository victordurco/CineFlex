import './SeatsSubtitle.css'
export default function SeatsSubtitle(){
    return (
        <div className='seatsSubtitles'>
            <div className='seatSubtitle'>
                <div className='selected'></div>
                <span>Selecionado</span>
            </div>
            <div  className='seatSubtitle'>
                <div className='available'></div>
                <span>Disponível</span>
            </div>
            <div  className='seatSubtitle'>
                <div className='unavailable'></div>
                <span>Indisponível</span>
            </div>
        </div>
    );
}