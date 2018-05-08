import './Header.css';
import React, { Component } from 'react';

import LoginBar from './LoginBar/Login'
import Navigation from './Navigation'
import Logo from './Logo'
import LoginMenu from './LoginBar/LoginMenu'
import SignUpMenu from './LoginBar/signUpMenu'

export default class Header extends Component {
    state = {
        loginActive: false,
        signupActive: false,
    }

    loginHandler = () => {
        const log = this.state.loginActive
        this.setState({ loginActive: !log })
        this.state.signupActive === false;
    }

    signupHandler = () => {
        const sign = this.state.signupActive
        this.setState({ signupActive: !sign })
        this.state.loginActive === false
    }

    render() {
        return (
            <div className="header">
                <Logo />
                <Navigation />
                <LoginBar
                    login={this.loginHandler}
                    signup={this.signupHandler}
                />

                {this.state.loginActive === true && this.state.signupActive === false ?
                    <div className="loginMenu">
                        <LoginMenu
                            loginClose={this.loginHandler}
                        />
                    </div> : null}

                {this.state.signupActive === true && this.state.loginActive === false ?
                    <div className="loginMenu">
                        <SignUpMenu
                            signupClose={this.signupHandler}
                        />
                    </div> : null}
            </div>
        );
    }
}



