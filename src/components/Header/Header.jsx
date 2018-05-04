import './Header.css'; 
import React, {Component } from 'react'; 



export default class Header extends Component {
    render(){
        return (
            <div className = "header">
                <div className = "logo"><a href="">logo</a></div>
                <div className= "header_main"> 
                <ul className = "header_nav">
                    <li><a href="">Главная</a></li>
                    <li><a href="">Каталог</a></li>
                    <li><a href="">Контакты</a></li>
                </ul>
                <LoginBar />
                </div>
            </div>
        );
    }
}

class LoginBar extends Component{
    render(){
        return(
            <div className = "loginBar">
                <ul>
                    <li><a href="">Вход</a></li>
                    <li><a href="">Регистрация</a></li>
                </ul>
            </div>
        )
    }
}


