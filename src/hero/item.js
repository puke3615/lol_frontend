import React, {Component} from 'react';
import './item.css'

export default class HeroItem extends Component {

    render() {
        let item = this.props.item;
        return (
            <div className={'cp_hero_item'}>

                <div>
                    <img src={item.avatar}/>
                </div>

                <div>{item.name}</div>

                <div>{item.nickname}</div>


            </div>
        );
    }

}
