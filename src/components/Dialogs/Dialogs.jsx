import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog}>
                    <NavLink activeClassName={s.active} to='/dialogs/1'>Anna</NavLink>
                </div>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink activeClassName={s.active} to='/dialogs/2'>Kristine</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink activeClassName={s.active} to='/dialogs/3'>Ammy</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink activeClassName={s.active} to='/dialogs/4'>Sasha</NavLink>
                </div>
            </div>
            <div className={s.separatorLine} />
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Hello</div>
                <div className={s.message}>Bye!</div>
            </div>
        </div>
    );
}

export default Dialogs;