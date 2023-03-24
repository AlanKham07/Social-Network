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

    let dialogData = [
        { name: 'Andrey', id: 1 },
        { name: 'Sasha', id: 2 },
        { name: 'Tamik', id: 3 },
        { name: 'Astik', id: 4 },
        { name: 'Alan', id: 5 },
        { name: 'Yasya', id: 6 }
    ];

    let messageData = [
        { message: 'Hello', id: 1 },
        { message: 'How are you?', id: 2 },
        { message: 'Salam', id: 3 },
        { message: 'What is your name?', id: 4 },
        { message: 'Aleikum Salam', id: 5 },
        { message: 'Privet', id: 6 },
    ]


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem name={dialogData[0].name} id={dialogData[0].id} />
                <DialogItem name={dialogData[1].name} id={dialogData[1].id} />
                <DialogItem name={dialogData[2].name} id={dialogData[2].id} />
                <DialogItem name={dialogData[3].name} id={dialogData[3].id} />
                <DialogItem name={dialogData[4].name} id={dialogData[4].id} />
                <DialogItem name={dialogData[5].name} id={dialogData[5].id} />
            </div>

            <div className={s.messages}>
                <Message message={messageData[0].message} />
                <Message message={messageData[1].message} />
                <Message message={messageData[2].message} />
                <Message message={messageData[3].message} />
                <Message message={messageData[4].message} />
                <Message message={messageData[5].message} />
            </div>
        </div>
    )
}

export default Dialogs;