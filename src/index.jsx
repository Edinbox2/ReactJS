import React, { Component } from 'react';
import ReactDom from 'react-dom';

import './assets/style.css';
import Header from './components/Header'
import Main from './components/Main'

import {
    BrowserRouter as Router, Route, Link
} from 'react-router-dom'

import Catalog from './components/Pages/Catalog';
import Home from './components/Pages/Home';
import Contacts from './components/Pages/Contacts';

class App extends Component {
    render() {
        return (
            <Router>
                <div className='app'>
                    <Header />
                    <Route exact path='/' component={Home} />
                    <Route exact path='/Catalog' component={Catalog} />
                    <Route exact path='/Contacts' component={Contacts} />
                </div>
            </Router>
        )
    }
}

ReactDom.render(<App />, document.getElementById('main'))