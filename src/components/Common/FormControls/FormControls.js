import css from './FormControls.module.css'

const FormControl = (props) => {
    const hasError = props.meta.touched && props.meta.error;
    return (
        <div className={css.formControl + " " + (hasError ? css.error : "")}>
            <div>
                {props.children}
            </div>
            <div>
                {hasError && <span>{props.meta.error}</span>}
            </div>
        </div>
    )
}

export const Textarea = (props) => {
    return <FormControl {...props}><textarea {...props.input} {...props} /></FormControl>
}

export const Input = (props) => {
    return <FormControl {...props}><input {...props.input} {...props} /></FormControl>
}


