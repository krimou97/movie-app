import './App.css';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Movie from "./pages/movie/movie";
import AddMovie from "./pages/addmovie/addmovie";
import P404 from "./pages/404/404";
import Register from "./pages/register/register";
import Login from "./pages/login/login";
import AuthContext from './context/auth.context';
import { useContext, useEffect } from 'react';

const App = () => {
    const auth = useContext(AuthContext)
    useEffect(() => {
        const isAuth = localStorage.getItem('auth')
        if (isAuth === 'true') auth.login()
    }, [])
    return (
        <BrowserRouter>
            <>
                {!auth.auth && (
                    <Switch>
                <Route exact path="/">
                    <Redirect to="/login"/>
                </Route>
                <Route path="/register" component={Register}/>
                
                <Route path="/login" component={Login}/>
                    </Switch>
                )}
                {auth.auth && (
                <Switch>
                <Route exact path="/">
                    <Redirect to="/movie"/>
                </Route>
                <Route path="/movie" component={Movie}/>
                <Route path="/addmovie" component={AddMovie}/>
                <Route component={Movie}/>
                <Route component={P404}/>
                </Switch>
                )}
                
            </>
        </BrowserRouter>
    );
}

export default App;

