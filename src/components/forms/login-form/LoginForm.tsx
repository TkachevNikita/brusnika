import React, {useContext} from 'react'
import AuthInput from '../../UI/auth-input/AuthInput'
import './styles/LoginForm.css'
import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginRequest } from '../../../interfaces/request/LoginRequest';
import {useNavigate} from 'react-router-dom';
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";

const LoginForm = () => {

    const { register, handleSubmit } = useForm<LoginRequest>();
    const {store   } = useContext(Context);
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<LoginRequest> = async (data) => {
        try {
            await store.login(data.email, data.password);
            navigate('/assets');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="login__form">
            <div className="login__form-header">
                <img src="auth-logo.png" alt="Брусника" className="auth__form-logo"/>
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

export default observer(LoginForm)
