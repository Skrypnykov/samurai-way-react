import React from 'react';
import s from './Login.module.css';
import { Field, reduxForm } from 'redux-form';
import  { Redirect } from 'react-router-dom';
import { Input } from '../Common/FormsControls/FormsControls';
import { required } from './../../Utils/Validators/validators';
import { connect } from 'react-redux';
import { login } from './../../Redux/auth-reducer';

const LoginForm = (props) => {
    return (
        <div className={s.wrap}>
            <form onSubmit={props.handleSubmit} className={s.form}>
                <div className={s.formItem}>
                    <Field className={s.formItemInput}
                        placeholder={'email'}
                        name={'email'}
                        // type={"text"}
                        component={Input}
                        validate={[required]}
                    />
                </div>
                <div className={s.formItem}>
                    <Field className={s.formItemInput}
                        placeholder={'password'}
                        name={'password'}
                        type={"password"}
                        component={Input}
                        validate={[required]}
                    />
                </div>
                <div className={s.formCheckbox}>
                    <label className={s.formCheckboxLabel} htmlFor="">
                        <Field className={s.formCheckboxInput}
                            name={'rememberMe'}
                            type={'checkbox'}
                            component={Input}
                        />
                        remember me
                    </label>
                </div>
                <div className={s.formItem}>
                    <button className={s.formLoginButton}>Login</button>
                </div>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return (
        <div>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect( mapStateToProps, {login} ) (Login);
