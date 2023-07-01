import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Navigate } from "react-router";
import { reduxForm, Field } from "redux-form";
import { Textarea } from "../common/Preloader/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../utils/validators";

const Dialogs = (props) => {

    let dialogElement = props.dialogsPage.dialogData.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />);
    let messageElement = props.dialogsPage.messageData.map(mes => <Message message={mes.message} key={mes.id} id={mes.id} />);

    let addNewMessage = (value) => {
        props.sendMessage(value.newMessageBody);
    };

    if (props.isAuth === false) return <Navigate to={'/login'} />;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogElement}
            </div>

            <div className={s.messages}>
                <div>{messageElement}</div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
    )
}

const AddMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} validate={[required, maxLengthCreator(100)]} name='newMessageBody' placeholder="Enter a message" />
        </div>
        <div>
            <button className={s.button}>Send</button>
        </div>
    </form>
}

const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm);

export default Dialogs;