import './Header.css';
import React, { Component } from 'react';

import LoginBar from './Login'
import Navigation from './Navigation'
import Logo from './Logo'
import LoginMenu from './LoginMenu'

export default class Header extends Component {
    state = {
        loginNotActive: false,
        signupNotActive: false,
        loginActive: true,
        signupActive: true,

    }


    signupHandler = () => {
        this.setState({
            signup: true,
            login: false
        })
        console.log(this.state.signup)
    }

    loginHandler = () => {
        const log = this.state.loginNotActive
        this.setState({ loginNotActive: !log })

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
                {this.state.loginNotActive === true ?
                    <div className="loginMenu">
                        <LoginMenu
                            loginClose={this.loginHandler}
                        />
                    </div> : null}
            </div>
        );
    }
}



