import React from "react";
import { reduxForm, Field } from "redux-form";
import { maxLengthCreator, required } from "../../utils/validators";
import { Input } from "../common/Preloader/FormsControls/FormsControls";

const LoginForm = (props) => {
    console.log('RERENDER')
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'login'} component={Input} validate={[required, maxLengthCreator(10)]}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={Input} validate={[required, maxLengthCreator(10)]}/>
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={Input}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Login;