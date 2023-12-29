import React from 'react'
import AuthInput from '../UI/auth-input/AuthInput'
import './styles/LoginForm.css'

const LoginForm = () => {
  return (
    <div className="login__form">
        <div className="login__form-header">
            <img src="auth-logo.png" className="auth__form-logo"/>
            <h2 className="auth__form-title">
                Единый вход в ERP
            </h2>
        </div>
        <form className="auth__form">
            <div className="auth__form-group">
                <label className="auth__control-title">Адрес электронной почты</label>
                <AuthInput/>
            </div>
            <div className="auth__form-group">
                <label className="auth__control-title">Пароль</label>
                <AuthInput/>
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
