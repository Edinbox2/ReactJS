import './Header.css';
import React, { Component } from 'react';


export default class LoginBar extends Component {
    render() {
        const { login, signup } = this.props
        return (
            <div className="loginBar">
                <ul>
                    <li onClick={login}>Вход</li>
                    <li onClick={signup}>Регистрация</li>
                </ul>
            </div>
        )
    }
}
