import React from 'react'
import AuthInput from '../UI/auth-input/AuthInput'
import './styles/LoginForm.css'
import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginRequest } from '../../interfaces/request/LoginRequest';
import AuthService from '../../services/AuthService';
import { redirect } from 'react-router-dom';

const LoginForm = () => {

    const { register, handleSubmit } = useForm<LoginRequest>();

    const onSubmit: SubmitHandler<LoginRequest> = (data) => {
        AuthService.login(data.email, data.password)
            .then(user => { 
                localStorage.setItem('token', user.data.token)
                localStorage.setItem('role', user.data.roles[0].name)
                window.location.replace('http://localhost:3000/assets');
            });
    }

    return (
    <div className="login__form">
        <div className="login__form-header">
            <img src="auth-logo.png" className="auth__form-logo"/>
            <h2 className="auth__form-title">
                Единый вход в ERP
            </h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="auth__form">
            <div className="auth__form-group">
                <label className="auth__control-title">Адрес электронной почты</label>
                <AuthInput
                    controlName="email" 
                    register={register}
                />
            </div>
            <div className="auth__form-group">
                <label className="auth__control-title">Пароль</label>
                <AuthInput
                    controlName="password" 
                    register={register}
                />
            </div>
            <button className="auth__form-button">
                Войти
            </button>
        </form>
        <div className="login__form-footer">
            Если Вы забыли логин или пароль или хотите зарегистироваться — <a href="">Обратитесь в Брусника.Помощь</a>
        </div>
    </div>
    )
}

export default LoginForm
