import './Header.css';
import React, { Component } from 'react';

import LoginBar from './Login'
import Navigation from './Navigation'
import Logo from './Logo'

export default class Header extends Component {
    state = {
        signup: false,
        login: false        
    }

    signupHandler = () => {
        this.setState({
            signup: true,
            login: false
        })
        console.log(this.state.signup)
    }

    loginHandler = () => {
        this.setState({
            signup: false,
            login: true
        })
        console.log(this.state.login)
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

            </div>
        );
    }
}



