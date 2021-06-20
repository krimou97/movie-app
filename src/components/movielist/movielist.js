import './style.css'
import MovieCard from "../moviecard/moviecard";

const MovieList = (props) => {
    const {moviesprops} = props
    return (
        <div className={'h-container'}>
            {moviesprops.map(movie => <MovieCard movieprops={movie}/>)}
        </div>
    )
}
export default MovieList

