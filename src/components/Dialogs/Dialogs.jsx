import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogElement = props.state.dialogData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messageElement = props.state.messageData.map(mes => <Message message={mes.message} id={mes.id} />);
    
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogElement}
            </div>

            <div className={s.messages}>
                {messageElement}
            </div>
        </div>
    )
}

export default Dialogs;