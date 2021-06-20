import './register.css'
import {Button, Card, TextField} from "@material-ui/core";
import {useState} from "react";
import {useHistory} from 'react-router-dom';
import Swal from "sweetalert2";
import API from "../../api/api";

const Register = () => {
    const router = useHistory()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const send = () => {

        const params = {firstName, lastName, email, password}
        API.post('/register', params)
            .then(res => {
                if (res.data.error) {
                    Swal.fire(res.data.msg, '', 'warning')
                } else {
                    Swal.fire('', '', 'success')
                        .then(ok => {
                            if (ok.isConfirmed) {
                                router.push('/login')
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
                <h1>Inscription</h1>
                <TextField label="First name"
                           value={firstName}
                           onChange={event => setFirstName(event.target.value)}
                           type="search"
                           variant="outlined"/>
                <TextField label="Last name"
                           value={lastName}
                           onChange={event => setLastName(event.target.value)}
                           type="search"
                           variant="outlined"/>
                <TextField label="Email"
                           value={email}
                           onChange={event => setEmail(event.target.value)}
                           type="search"
                           variant="outlined"/>
                <TextField label="password"
                           value={password}
                           onChange={event => setPassword(event.target.value)}
                           type="password"
                           variant="outlined"/>
                <Button onClick={send} variant="contained" color="primary">
                    SEND
                </Button>
            </Card>
            
        </div>
    )
}
export default Register
