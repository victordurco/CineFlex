import PageTitle from "../../Components/Shared/PageTitle";
import MovieList from "./MovieList";

export default function Home(){
    return(
        <>
            <PageTitle>Selecione o filme</PageTitle>
            <MovieList />
        </>
    );
}