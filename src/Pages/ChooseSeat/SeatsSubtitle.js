import './SeatsSubtitle.css'
export default function SeatsSubtitle(){
    return (
        <div className='seatsSubtitles'>
            <div className='seatSubtitle'>
                <div className='selectedSubtitle'></div>
                <span>Selecionado</span>
            </div>
            <div  className='seatSubtitle'>
                <div className='availableSubtitle'></div>
                <span>Disponível</span>
            </div>
            <div  className='seatSubtitle'>
                <div className='unavailableSubtitle'></div>
                <span>Indisponível</span>
            </div>
        </div>
    );
}