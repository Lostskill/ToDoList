import React from "react";
import {Link} from 'react-router-dom';
const Navbar = () => {
    return(
        <div className="navbar" >
            <div className="navbar__links" >
                <Link to="/register" >Регистрация</Link>
                <Link to="/login" style={{ padding: 20 }}>Вход</Link>
            </div>
        </div>
    )
}

export default Navbar;