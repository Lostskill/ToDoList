import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
import TodoService from "./API/ToDoService";

const RegisterForm = () => {
    const [username, setUsername] = useState({ username: '' });
    const [email, setEmail] = useState({ email: '' });
    const [password, setPassword] = useState({ password: '' });


    function regUser(newUser) {
        const res = TodoService.registerUser(newUser);
        console.log(res);
    };

    const addUser = (event) => {
        event.preventDefault();
        if (password.password.length < 8) {
            console.log('пароль должен быть длинее!!!')
        }
        else {
            const newUser = {
                email: email.email,
                username: username.username,
                password: password.password,
            };
            regUser(newUser);
        }; 
        
    }
        return (
            <form>
                <MyInput type="text" placeholder='Логин' value={username.username} onChange={e => setUsername({ username: e.target.value })} />
                <MyInput type="text" placeholder='Email' value={email.email} onChange={e => setEmail({ email: e.target.value })} />
                <MyInput type="text" placeholder='Пароль' value={password.password} onChange={e => setPassword({ password: e.target.value })} />
                <a>Пароль должен состоять не менее чем из 8 символов</a>
                <MyButton onClick={addUser}>Отправить</MyButton>
            </form>
        )
};
export default RegisterForm;