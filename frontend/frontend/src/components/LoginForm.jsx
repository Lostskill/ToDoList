import React, { useState ,useContext} from "react"; 
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
import TodoService from "./API/ToDoService";


const LoginForm = ()  => {
    const [username, setUsername] = useState({ username: '' });
    const [password, setPassword] = useState({ password: '' });
    const auth = localStorage.getItem('auth');
    const authe = JSON.parse(auth);

    function Login(e) {
        e.preventDefault();
        const log_data = {
            username: username.username,
            password: password.password
        };
        const log = TodoService.logUser(log_data)
        log.then((result) => {
        console.log(auth)
        localStorage.setItem('token', JSON.stringify(result.auth_token));
        localStorage.setItem('auth', true)
       
        localStorage.setItem('username', JSON.stringify(username));
               
            document.location.reload();
            document.location.reload()
        });
    };




    return (
        <form>
            <MyInput type='text' placeholder='Логин' value={username.username} onChange={e => setUsername({username:e.target.value})} />
            <MyInput type='text' placeholder='Пароль' value={password.password} onChange={e => setPassword({ password: e.target.value })}  />

            <MyButton type='submit' onClick={Login} >Отправить</MyButton>
            {authe==true
                ?<a>Вы уже авторизовались , вернитесь на главную страницу</a>
                :''
            }
        </form>
    )
}


export default LoginForm;