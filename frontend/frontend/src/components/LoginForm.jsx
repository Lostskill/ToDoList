import React, { useState } from "react"; 
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
import TodoService from "./API/ToDoService";

const LoginForm = ()  => {
    const [username, setUsername] = useState({ username: '' });
    const [password, setPassword] = useState({ password: '' });

    function  Login(data) {
        const log = TodoService.logUser(data)
        console.log(log)
    };

    const userLogin = (event) => {
        event.preventDefault();
        const log_data = {
            username: username.username,
            password: password.password
        };
    Login(log_data);
    };

    return (
        <form>
            <MyInput type='text' placeholder='Логин' value={username.username} onChange={e => setUsername({username:e.target.value})} />
            <MyInput type='text' placeholder='Пароль' value={password.password} onChange={e => setPassword({ password: e.target.value })}  />

            <MyButton onClick={userLogin} >Отправить</MyButton>
        </form>
    )
}


export default LoginForm;