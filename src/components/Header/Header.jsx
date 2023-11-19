import React from "react";
import { NavLink } from "react-router-dom";
import s from './Header.module.css';

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdo0Yf2hJQHZuzg9Ni_7UnhJgKFlhb1amFEnOZMUMgc2IE35miB2kiF6oVUMjAGsxD248&usqp=CAU' />
            <div className={s.v}><span>В</span></div>
            <div className={s.contora}><span>КОНТОРЕ</span></div>
            <div className={s.loginBlock}>
                { props.isAuth ? <div><button onClick={props.logout}><span>Войти</span></button></div> : <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </header>
    )
}

export default Header;