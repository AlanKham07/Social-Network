import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { sendMessageCreator } from "../../redux/state";
import { updateNewMessageBodyCreator } from "../../redux/state";


const Dialogs = (props) => {

    let dialogElement = props.dialogsPage.dialogData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messageElement = props.dialogsPage.messageData.map(mes => <Message message={mes.message} id={mes.id} />);


    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator())
    };

    let onNewMessageChange = (event) => {
        let body = event.target.value;
        let action = updateNewMessageBodyCreator(body);
        props.dispatch(action);
    };


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogElement}
            </div>

            <div className={s.messages}>
                <div>{messageElement}</div>
                <div>
                    <div>
                        <textarea placeholder="Enter a message" onChange={onNewMessageChange} value={props.dialogsPage.newMessageBody}></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick} className={s.button}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;