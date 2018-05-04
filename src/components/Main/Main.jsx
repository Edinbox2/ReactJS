import './Main.css';
import React, { Component } from 'react';


export default class Main extends Component {
    render() {
        return (
            <div className="main">
                <MainLeft />
                <Article />
            </div>
        );
    }
}

class MainLeft extends Component {
    render() {
        return (
            <aside className="mainLeft">
                <ul>
                    <li><a href="">Item 1</a></li>
                    <li><a href="">Item 2</a></li>
                    <li><a href="">Item 3</a></li>
                    <li><a href="">Item 4</a></li>
                    <li><a href="">Item 5</a></li>
                </ul>
            </aside>
        )
    }
}

class Article extends Component {
    render() {
        return (
            <article className="article">
                <h1>Заголовок </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ipsum praesentium commodi reprehenderit, in, quo excepturi veritatis dolor harum fuga fugiat quod consectetur quidem omnis? Nisi animi ex officiis alias.</p>
            </article>
        )
    }
}