import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog}>Anna</div>
                <div className={s.dialog + ' ' + s.active}>Kristine</div>
                <div className={s.dialog}>Ammy</div>
                <div className={s.dialog}>Sasha</div>
            </div>
            <div className={s.separatorLine}></div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Hello</div>
                <div className={s.message}>Bye!</div>
            </div>
        </div>
    );
}

export default Dialogs;