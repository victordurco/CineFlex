import PageTitle from "./PageTitle";
import MovieList from "./MovieList";

export default function Home(){
    return(
        <>
            <PageTitle>Selecione o filme</PageTitle>
            <MovieList />
        </>
    );
}