import './LoginMenu.css';
import React, { Component } from 'react';

export default class LoginMenu extends Component {
    render() {
        const { loginClose } = this.props
        return (
            <div>
                <span className="loginClose" onClick={loginClose}>X</span>
                <div className="loginContent">
                    <h4>Вход</h4>
                    <p>Введите имя</p>
                    <input type="text" name="" id="" />
                    <p>Введите пароль</p>
                    <input type="text" name="" id="" />
                </div>
            </div>
        )
    }
}
