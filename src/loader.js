import { useState } from "react";
import AuthContext from "./context/auth.context";
import App from "./App";

const Loader = () => {
    const [auth, setAuth] = useState(false)
    const login = () => {
        setAuth(true)
    }

    const logout = () => {
        setAuth(false)
    }
    return (
        <AuthContext.Provider value={{auth: auth, login: login, logout: logout}}>
            <App/>
        </AuthContext.Provider>
    )
}

export default Loader;