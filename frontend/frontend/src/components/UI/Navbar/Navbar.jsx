import React from "react";
import {Link} from 'react-router-dom';

const Navbar = () => {
    const auth = localStorage.getItem('auth');
    const authe = JSON.parse(auth);
    console.log(auth)
    
    try {
        const getUser = localStorage.getItem('username');
        var user = JSON.parse(getUser).username;
    } catch {
        var user = "Гость, Войдите или зарегестрируйтесь!!!"
    };
    
    return (
        <div className="navbar" >
            <div className="navbar__links" >
                <Link to="/" style={{ padding: 20 }}>Главная Страница</Link>
                {authe == true
                    ? <Link to="/logout" style={{ padding: 20 }}>Выход</Link>
                    : <Link to="/login" style={{ padding: 20 }}>Вход</Link>
                }
                {authe == true
                    ? <a>{user}</a>
                    : <Link to="/register" >Регистрация</Link>
                }

            </div>
        </div>
    );
};



export default Navbar;