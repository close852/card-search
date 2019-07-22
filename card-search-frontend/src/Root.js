import React, { Component, Fragment } from 'react';
import { Header, Body, Footer, Remocon } from './layout'
import { List } from 'immutable'
import axios from 'axios'

import './Root.css'
class Root extends Component {
    state = ({
        cardList: List([
            // { id: 1, header: 'header-1', title: "title-1", content: "content-1", tags: [{ id: 1, tag: 'tag' }, { id: 2, tag: '검색' }] },
            // { id: 2, header: 'header-2', title: "title-2", content: "content-2", tags: [] },
            // { id: 3, header: 'header-3', title: "title-3", content: "content-3", tags: [] },
            // { id: 4, header: 'header-4', title: "title-4", content: "content-4", tags: [] },
            // { id: 5, header: 'header-5', title: "title-5", content: "content-5", tags: [] },
            // { id: 6, header: 'header-6', title: "title-6", content: "content-6", tags: [] },
        ]),

    })
    componentDidMount() {
        axios.get('/api/todo')
            .then(res => {
                this.setState({
                    cardList: List(res.data)
                })
            })
        console.log("init...!!", this.state.cardList)
    }

    shouldComponentUpdate(nextProps, nextState) {
        const prevCardList = this.state.cardList;
        const nextCardList = nextState.cardList;
        console.log("shouldComponentUpdate >>", prevCardList, nextCardList)
        let isIdentity = this.identityComp(prevCardList, nextCardList);
        console.log('shouldComponentUpdate', prevCardList.size, nextCardList.size, isIdentity);
        return isIdentity;
    }
    // List, List
    //기준 : 1. size 같고, 2. id 순서 동일
    identityComp(prevCardList, nextCardList) {

        if (prevCardList.size !== nextCardList.size) {
            return true;
        }

        prevCardList.forEach((item, idx, array) => {
            const nextCard = nextCardList.get(idx);
            // console.log(item, idx, array)
            // card의 ID가 다르면 rerender
            if (item.id !== nextCard.id) {
                return true;
            } else {
                // card Id가 같을 때 tagList[array]의 tag ID가 다르면 rerender
                if (item.tagList) {
                    item.tagList.forEach((item, idx, arr) => {
                        if (item.id !== nextCard.tagList[idx].id) {
                            return true;
                        }
                    })
                }
            }
        });

        return false;
    }

    setTodoList = (todoList) => {
        this.setState({
            cardList: List(todoList)
        })
    }

    render() {
        const { cardList } = this.state;
        const { setTodoList } = this;
        return (
            <div style={{ 'height': '100%', margin: '0', padding: '0' }}>
                <Fragment>
                    <Remocon />
                </Fragment>
                <Header setTodoList={setTodoList} />
                <Body cardList={cardList} setTodoList={setTodoList} />
                <Footer />
            </div>
        )
    }
}

export default Root
