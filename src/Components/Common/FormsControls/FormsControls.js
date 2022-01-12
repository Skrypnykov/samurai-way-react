import React from 'react'
import s from './FormsControls.module.css'
import { Field } from 'redux-form';

const FormControl = ({ input, meta: {touched, error}, children }) => {
    const hasError = touched && error;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div className={s.formControlChild}>
                {children}
                {hasError && <span className={s.formControlError}>{error}</span>}
            </div>
        </div>
    )
}

export const Textarea = (props) => {
    const { input, meta, child, ...restProps } = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
    const { input, meta, child, ...restProps } = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}

export const createField = (className, placeholder, name, type, component, validators) => (
    <div>
        <Field className={className}
            placeholder={placeholder}
            name={name}
            type={type}
            component={component}
            validate={validators}
        />
    </div>
)