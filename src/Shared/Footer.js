import './Footer.css'
export default function Footer({ sessions, session }) {
    return (
        <div className='footerContainer'>
            {session === undefined ?
                <>
                    <div>
                        <img src={sessions.posterURL} alt='movie poster' />
                    </div>
                    <span className='footerText'>{sessions.title}</span>
                </>
                :
                <>
                    <div>
                        <img src={session.movie.posterURL} alt='movie poster' />
                    </div>
                    <span className='footerText'>
                       <span>{session.movie.title}</span> 
                       <span>{session.day.weekday} - {session.name}</span>
                    </span>
                </>
            }

        </div>
    );
}