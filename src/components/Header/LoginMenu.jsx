import './LoginMenu.css';
import React, { Component } from 'react';

export default class LoginMenu extends Component {
    render() {
        const { loginClose } = this.props
        return (
            <div>
                <div>
                    <span className="loginClose" onClick={loginClose}>X</span>
                    <div className="loginContent">
                        <p>Enter your name</p>
                        <input type="text" name="" id="" />
                        <p>Enter your password</p>
                        <input type="text" name="" id="" />
                    </div>

                </div>
            </div>
        )
    }
}
