import React from 'react';
import s from './Login.module.css';
import { Field, reduxForm } from 'redux-form';

const LoginForm = (props) => {
    return (
        <div className={s.wrap}>
            <form onSubmit={props.handleSubmit} className={s.form}>
                <div className={s.formItem}>
                    <Field className={s.formItemInput} placeholder={"login"} name={"login"} type="text" component={"input"}/>
                </div>
                <div className={s.formItem}>
                    <Field className={s.formItemInput} placeholder={"password"} name={"password"} type="password" component={"input"} />
                </div>
                <div className={s.formCheckbox}>
                    <label className={s.formCheckboxLabel} htmlFor=""><Field className={s.formCheckboxInput} name={"rememberMe"} type={"checkbox"} component={"input"} />remember me</label>
                </div>
                <div className={s.formItem}>
                    <button className={s.formLoginButton}>Login</button>
                </div>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login =(props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }

    return <div>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

export default Login;