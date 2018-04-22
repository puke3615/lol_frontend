import React, {Component} from 'react';
import HeroItem from "./item";
import Api from "../api";
import Util from "../util";
import './layout.css';

export default class HeroLayout extends Component {

    state = [];

    fetchData(page = 1) {
        Api.getHeroList(page, result => {
            // alert('结果是' + JSON.stringify(result));
            this.setState(result.data);
        });
    }

    componentWillMount() {
        this.fetchData(1);
    }

    render() {
        const list = this.state;
        let listItems = [];
        for (let item in list) {
            listItems.push(<HeroItem item={list[item]}/>)
        }

        return (
            <div className={'cp_hero_layout'}>
                {listItems}
            </div>
        );
    }
}
