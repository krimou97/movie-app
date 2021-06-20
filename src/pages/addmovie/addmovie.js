import './style.css'
import {Button, Card, TextField} from "@material-ui/core";
import {useState} from "react";
import Swal from "sweetalert2";
import API from "../../api/api";
import {useHistory} from 'react-router-dom'

const AddMovie = () => {
    const router = useHistory()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [rating, setRating] = useState('')
    const [poster, setPoster] = useState('')
    const send = () => {

        const params = {title, description, rating, poster}
        API.post('/add', params)
            .then(res => {
                if (res.data.error) {
                    Swal.fire(res.data.msg, '', 'warning')
                } else {
                    Swal.fire('', '', 'success')
                        .then(ok => {
                            if (ok.isConfirmed) {
                                router.push('/movie')
                            }
                        })
                }
            })
            .catch(err => {
                Swal.fire('', '', 'error')
            })
    }
    return (
        <div className={'register-container'}>
            <Card className={'register-card'}>
                <h1>Add new movie</h1>
                <TextField label="Title"
                           type="search"
                           value={title}
                           onChange={event => setTitle(event.target.value)}
                           variant="outlined"/>
                <TextField label="Description"
                           value={description}
                           onChange={event => setDescription(event.target.value)}
                           type="search"
                           variant="outlined"/>
                <TextField label="Rating"
                           value={rating}
                           onChange={event => setRating(event.target.value)}
                           type="search"
                           variant="outlined"/>
                <TextField label="Poster"
                           value={poster}
                           onChange={event => setPoster(event.target.value)}
                           type="search"
                           variant="outlined"/>
                <Button onClick={send} variant="contained" color="primary">
                    SEND
                </Button>
            </Card>
        </div>
    )
}
export default AddMovie
