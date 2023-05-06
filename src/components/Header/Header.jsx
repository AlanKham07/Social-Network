import React from "react";
import { NavLink } from "react-router-dom";
import s from './Header.module.css';

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src='https://static.tildacdn.com/tild6138-3535-4466-a135-393166633639/photo-2-1536x1536.png' />
            <div className={s.loginBlock}>
                { props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </header>
    )
}

export default Header;