import Filter from "../../components/filter/filter";
import MovieList from "../../components/movielist/movielist";
import {useEffect, useState} from "react";
import Navbar from "../../components/navbar/navbar";
import API from "../../api/api";

const Movie = () => {
    const [movies, setMovies] = useState([])
    const [moviescopie, setMoviescopie] = useState([])

    useEffect(() => {
        API.get('/all')
            .then(res => {
                setMovies(res.data)
                setMoviescopie(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <>
            <Navbar/>
            <Filter movies={movies} setMovies={setMovies}
                    moviesList={moviescopie}/>
            <MovieList moviesprops={movies}/>
        </>
    );
}

export default Movie;

