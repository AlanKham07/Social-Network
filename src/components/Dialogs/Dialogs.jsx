import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem name='Andrey' id='1' />
                <DialogItem name='Sasha' id='2' />
                <DialogItem name='Tamik' id='3' />
                <DialogItem name='Astik' id='4' />
                <DialogItem name='Alan' id='5' />
                <DialogItem name='Yasya' id='6' />
            </div>

            <div className={s.messages}>
                <Message message='Hello' />
                <Message message='How are you?' />
                <Message message='Salam' />
                <Message message='What is your name?' />
                <Message message='Aleikum Salam' />
            </div>
        </div>
    )
}

export default Dialogs;