import React from "react";
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog + ' ' + s.active}>
                    Andrei
                </div>
                <div className={s.dialog}>
                    Sasha
                </div>
                <div className={s.dialog}>
                    Tamik
                </div>
                <div className={s.dialog}>
                    Astemir
                </div>
                <div className={s.dialog}>
                    Pasha
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    Hello!
                </div>
                <div className={s.message}>
                    Yo
                </div>
                <div className={s.message}>
                    What is your name?
                </div>
                <div className={s.message}>
                    Salam!
                </div>
                <div className={s.message}>
                    Lets go
                </div>
            </div>
        </div>
    )
}

export default Dialogs;