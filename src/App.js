import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import HeroLayout from "./hero/layout";
import HeroList from "./hero/list";

class App extends Component {
    render() {
        return (
            <div className="cp_app">
                <HeroList/>
            </div>
        );
    }
}

export default App;
