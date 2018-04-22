import React, {Component} from 'react';
import {List, Avatar, Pagination} from "antd";
import './list.css'
import Api from "../api";
import Util from "../util";
import {DEFAULT_PAGE_SIZE} from "../config";

const {Item} = List;
const {Meta} = Item;

export default class HeroList extends Component {

    state = {
        page: 1,
        data: [],
        total: 0
    };

    componentWillMount() {
        this.fetchData(this.state.page);
    }

    fetchData(page) {
        Api.getHeroList(page, result => {
            if (result.success) {
                this.setState({
                    data: result.data,
                    page: this.page + 1,
                    total: result.totalSize
                });
            } else {
                Util.error(result.msg);
            }
        });
    }

    onPageChange(page) {
        this.fetchData(page);
    }

    renderItem(item) {
        let skillItems = [];
        let skills = item.skill;
        for (let i = 0; i < skills.length; i++) {
            let skill = skills[i];
            skillItems.push(
                <div className={'item'}>
                    <img src={skill.icon}/>
                </div>
            );
        }
        return (
            <Item actions={[
                <a>详情</a>,
                <a>编辑</a>,
                <a>删除</a>
            ]}>
                <div className={'hero_item'}>
                    <div className={'avatar'}>
                        <img src={item.avatar} title={item.story}/>
                    </div>
                    <div className={'content_area'}>
                        <div className={'name_area'}>
                            <div className={'name'}>{item.name}</div>
                            <div className={'nickname'}>{item.nickname}</div>
                        </div>
                        <div className={'skill'}>
                            {skillItems}
                        </div>
                    </div>
                </div>
            </Item>
        );
    }

    render() {
        return (
            <List className={'cp_hero_list'}
                  itemLayout={'horizontal'}
                  grid={{
                      column: 2,
                  }}
                  header={'英雄榜单'}
                  footer={
                      <Pagination showQuickJumper
                                  pageSize={DEFAULT_PAGE_SIZE}
                                  defaultCurrent={this.state.page}
                                  total={this.state.total}
                                  onChange={this.onPageChange.bind(this)}/>
                  }
                  bordered
                  dataSource={this.state.data}
                  renderItem={this.renderItem}
            />
        );
    }
}
