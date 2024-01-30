import React from 'react';
import {useNavigate, useLocation} from "react-router-dom";
import {useAuth} from "../hook/useAuth.jsx";

function LoginPage() {
    const navigate = useNavigate()
    const location = useLocation()
    const auth = useAuth()
    
    
    const fromPage = location.state?.from?.pathname || "/"
    
    function handleSubmit(event) {
        event.preventDefault()
        const form = event.target
        const user = form.username.value
        auth.signIn(user, () => navigate(fromPage, {replace: true}))
    }
    
    return (
        <>
            <h1>Login page</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username"/>
                <button type="submit">submit</button>
            </form>
        </>
    );
}

export default LoginPage;