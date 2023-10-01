import React from "react";
import { reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../utils/validators";
import { createField, Input } from "../common/Preloader/FormsControls/FormsControls";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Navigate } from "react-router";
import s from '../common/Preloader/FormsControls/FormsControls.module.css'

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('Email', 'email', Input, [required, maxLengthCreator(20)])}
            {createField('Password', 'password', Input, [required, maxLengthCreator(20)], { type: 'password' })}
            {createField(null, 'rememberMe', Input, null, { type: 'checkbox' }, 'remember me')}
            { captchaUrl && <img src={captchaUrl} /> }
            { captchaUrl && createField('Symbols from image', 'captcha', Input, [required], {})} 
            {error && <div className={s.formSummaryError}>
                {error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }
    if (props.isAuth) {
        return <Navigate to={'/profile'} />
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
});

export default connect(mapStateToProps, { login })(Login);