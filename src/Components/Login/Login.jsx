import React from 'react';
import s from './Login.module.css';
import { reduxForm } from 'redux-form';
import { Redirect } from 'react-router-dom';
import { Input } from '../Common/FormsControls/FormsControls';
import { required } from './../../Utils/Validators/validators';
import { connect } from 'react-redux';
import { login } from './../../Redux/auth-reducer';
import { createField } from './../Common/FormsControls/FormsControls';

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
    return (
        <div className={s.wrap}>
            <form onSubmit={handleSubmit} className={s.form}>
                {createField(s.formItemInput, "email", "email", "text", Input, [required])}
                {createField(s.formItemInput, "password", "password", "password", Input, [required])}
                <div className={s.formCheckbox}>
                    <label className={s.formCheckboxLabel} htmlFor="">
                        {createField(s.formCheckboxInput, null, "rememberMe", "checkbox", Input, [])}
                        remember me
                    </label>
                </div>
                
                { captchaUrl && <img src={captchaUrl} alt="" /> }
                { captchaUrl && createField(s.formItemInput, "captcha", "captcha", "text", Input, [])}

                <div className={s.formItem}>
                    <button className={s.formLoginButton}>Login</button>
                </div>
                {error && <div className={s.formControlError}>{error}</div>}
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }
    return (
        <div>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);
