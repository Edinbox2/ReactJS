import './Header.css';
import React, { Component } from 'react';

import {
    Link
} from 'react-router-dom'

export default class Navigation extends Component {
    render() {
        return (
            <ul className="header_nav">
                <li>
                    <Link to="/">Главная</Link>
                </li>
                <li>
                    <Link to="/Catalog">Каталог</Link>
                </li>
                <li>
                    <Link to="/Contacts">Контакты</Link>
                </li>
            </ul>
        );
    }
}


