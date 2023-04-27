import React from "react";
import s from './Navbar.module.css';
import { NavLink } from "react-router-dom";

const setActive = ({ isActive }) => isActive ? s.active : '';

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <img src="https://cdn-icons-png.flaticon.com/512/7710/7710521.png" className={s.icon}></img>
                <NavLink to="/profile" className={setActive}>Моя страница</NavLink>
            </div>
            <div className={s.item}>
                <img src="https://cdn-icons-png.flaticon.com/512/33/33308.png" className={s.icon}></img>
                <NavLink to="/users" className={setActive}>Пользователи</NavLink>
            </div>
            <div className={s.item}>
                <img src="https://cdn-icons-png.flaticon.com/512/7310/7310143.png" className={s.icon}></img>
                <NavLink to="/dialogs" className={setActive}>Сообщения</NavLink>
            </div>
            <div className={s.item}>
                <img src="https://cdn-icons-png.flaticon.com/512/4529/4529836.png" className={s.icon}></img>
                <NavLink to="/news" className={setActive}>Новости</NavLink>
            </div>
            <div className={s.item}>
                <img src="https://cdn-icons-png.flaticon.com/512/5577/5577489.png" className={s.icon}></img>
                <NavLink to="/music" className={setActive}>Музыка</NavLink>
            </div>
            <div className={s.item}>
                <img src="https://cdn-icons-png.flaticon.com/512/25/25319.png" className={s.icon}></img>
                <NavLink to="/settings" className={setActive}>Настройки</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;