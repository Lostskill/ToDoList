import React, { useState } from "react"; 
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
import TodoService from "./API/ToDoService";
import { Navigate } from "react-router-dom"

const LoginForm = ()  => {
    const [username, setUsername] = useState({ username: '' });
    const [password, setPassword] = useState({ password: '' });
    const [token, setToken] = useState('');
    const [state, setState] = useState({ redirect: false })


    function Login(e) {
        e.preventDefault();
        const log_data = {
            username: username.username,
            password: password.password
        };
        const log = TodoService.logUser(log_data)

            log.then((result) => {
            setToken(result)
                localStorage.setItem('username', JSON.stringify(username));
                localStorage.setItem('auth', true)
                setState({ redirect: true })
        });
    };

    localStorage.setItem('token', JSON.stringify(token.auth_token));
    if (state.redirect) {
        return <Navigate push to='/' />
    };

    return (
        <form>
            <MyInput type='text' placeholder='Логин' value={username.username} onChange={e => setUsername({username:e.target.value})} />
            <MyInput type='text' placeholder='Пароль' value={password.password} onChange={e => setPassword({ password: e.target.value })}  />

            <MyButton onClick={Login} >Отправить</MyButton>
        </form>
    )
}


export default LoginForm;