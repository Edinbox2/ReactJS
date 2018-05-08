import './LoginMenu.css';
import React, { Component } from 'react';

export default class signUpMenu extends Component {
    render() {
        const { signupClose } = this.props
        return (
            <div>
                <span className="loginClose" onClick={signupClose}>X</span>
                <div className="loginContent">
                    <h4>Регистрация</h4>
                    <p>Введите имя</p>
                    <input type="text" name="" id="" />
                    <p>Введите пароль</p>
                    <input type="text" name="" id="" />
                    <p>Повторите пароль</p>
                    <input type="text" name="" id="" />
                </div>
            </div>
        )
    }
}
