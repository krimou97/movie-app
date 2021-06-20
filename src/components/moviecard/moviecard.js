import './style.css'
import {Card} from "@material-ui/core";
import {useState} from "react";
import Rating from '@material-ui/lab/Rating';
import Swal from "sweetalert2";
import API from "../../api/api";
import {useHistory} from 'react-router-dom'

const MovieCard = (props) => {
    const router = useHistory()
    const {movieprops} = props
    const [value, setValue] = useState(movieprops.rating);
    const URI = 'http://localhost:3001/'
    const remove = () => {
        Swal.fire({
            title: "Are you sure to delete this movie?",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: '#DD6B55',
            confirmButtonText: 'Yes, I am sure!',
            cancelButtonText: "No, cancel it!",
            closeOnConfirm: false,
            closeOnCancel: false
        })
            .then(ok => {
                if (ok.isConfirmed) {
                    API.post('/delete', {_id: movieprops._id})
                        .then(o => {
                            Swal.fire('', '', 'success').then(l => {
                                router.go(0)
                            })
                        })
                        .catch(err => {
                            Swal.fire('', '', 'error')
                        })
                }
            })
    }
    return (
        <Card className={'h-card'}>
            <div className={'img-film'}>
                <img src={URI + movieprops.poster}/>
            </div>
            <div className={'info-film'}>
                <span className={'info-title'}>{movieprops.title} </span>
                <span className={'info-description'}>{movieprops.description} </span>
            </div>
            <div className={'rating'}>
                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                />
            </div>
            <span onClick={remove} style={{fontSize: 20, cursor: "pointer"}}>X</span>
        </Card>
    )
}

export default MovieCard
