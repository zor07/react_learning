import React from "react";
import css from './Dialogs.module.css';

const Dialogs = (props) => {

    return (
        <div className={css.dialogs}>
            <div className={css.dialogItems}>
                <div className={css.dialog + ' ' + css.active}>Pasha</div>
                <div className={css.dialog}>Max</div>
                <div className={css.dialog}>Lex</div>
            </div>
            <div className={css.messages}>
                <div className={css.message}>Hello</div>
                <div className={css.message}>Hi</div>
                <div className={css.message}>Bla Bla text</div>
            </div>
        </div>
    );

}

export default Dialogs;
