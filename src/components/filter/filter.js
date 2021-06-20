import './style.css'
import {Button, TextField} from "@material-ui/core";
import {useEffect, useState} from "react";

const Filter = (props) => {
    const {setMovies, moviesList} = props;
    const [title, setTitle] = useState('')
    const [rating, setRating] = useState('')
    const filter = () => {

        if (title && rating) {
            const newMovies = moviesList.filter(film =>
                film.title.toUpperCase().includes(title.toUpperCase())
                && film.rating == rating)
            setMovies(newMovies)
        } else {
            if (title) {
                const newMovies = moviesList.filter(film =>
                    film.title.toUpperCase().includes(title.toUpperCase()))
                setMovies(newMovies)
            } else {
                if (rating) {
                    const newMovies = moviesList.filter(film =>
                        film.rating == rating)
                    setMovies(newMovies)
                } else {
                    setMovies(moviesList)
                }
            }
        }


    }
    useEffect(() => {
        filter();
    }, [title, rating])
    return (
        <div className={'h-filter'}>
            <TextField label="Title"
                       value={title}
                       onChange={event => setTitle(event.target.value)}
                       variant="outlined"/>
            <TextField label="Rating"
                       value={rating}
                       onChange={event => setRating(event.target.value)}
                       variant="outlined"/>
            <Button onClick={filter} variant="contained"
                    color="primary" style={{backgroundColor: 'red'}}>
                Filter
            </Button>
        </div>
    )
}
export default Filter
