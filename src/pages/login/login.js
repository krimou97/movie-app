import './style.css'
import {Button, Card, TextField} from "@material-ui/core";
import {useState} from "react";
import {useHistory} from 'react-router-dom';
import Swal from "sweetalert2";
import API from "../../api/api";
import AuthContext from '../../context/auth.context';
import { useContext } from 'react';

const Login = () => {
    const router = useHistory()
    const auth = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const send = () => {
            
        const params = {email, password}
        API.post('/login', params)
            .then(res => {
                if (res.data.error) {
                    Swal.fire(res.data.msg, '', 'warning')
                } else {
                    auth.login()
                    localStorage.setItem('auth', 'true')
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
                <h1>Login</h1>
                <TextField label="Email"
                           value={email}
                           onChange={event => setEmail(event.target.value)}
                           type="search"
                           variant="outlined"/>
                <TextField label="Password"
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
export default Login
