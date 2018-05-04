import React, {Component} from 'react'; 
import ReactDom from 'react-dom'; 

import './assets/style.css'; 
import Header from './components/Header'
import Main from './components/Main'

class App extends Component{
    render(){
        return(
            <div className='app'>
            <Header />
            <Main />
            </div>
        )
    }
}

ReactDom.render(<App />, document.getElementById('main'))