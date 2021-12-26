import React from "react";
import css from './ModalError.module.css'

const ModalError = ({errors, showErrors}) => {
    return (
        <div className={ `${css.modal} ${showErrors ? css.show : css.hide}`}>

            <h1>ERROR! </h1>
            {errors}
        </div>
    )
}

export default ModalError