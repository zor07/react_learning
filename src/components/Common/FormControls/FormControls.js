import css from './FormControls.module.css'


export const Textarea = (props) => {
    const hasError = props.meta.touched && props.meta.error;
    return (
        <div className={css.formControl + " " + (hasError ? css.error : "")}>
            <div>
                <textarea {...props.input} {...props}/>
            </div>
            <div>
                {hasError && <span>{props.meta.error}</span>}
            </div>
        </div>
    )
}

export const Input = (props) => {
    const hasError = props.meta.touched && props.meta.error;
    return (
        <div className={css.formControl + " " + (hasError ? css.error : "")}>
            <div>
                <input {...props.input} {...props}/>
            </div>
            <div>
                {hasError && <span>{props.meta.error}</span>}
            </div>
        </div>
    )
}


