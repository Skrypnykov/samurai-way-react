import React from "react";
import s from "./Login.module.css";

const LoginForm =(props) => {
    return (
        <form>
            <div>
                <input placeholder={"Login"} />
            </div>
            <div>
                <input placeholder={"Password"} />
            </div>
            <div>
                <input type={"checkbox"} /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const Login =(props) => {
    return <div>
        <div className={s.title}>LOGIN</div>
        <LoginForm />
    </div>
}

export default Login;