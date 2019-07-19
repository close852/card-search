import React, { Component } from 'react';
import { Header, Body, Footer } from './layout'
import axios from 'axios'
class Root extends Component {
    state = ({
        cardList: [
            // { id: 1, header: 'header-1', title: "title-1", content: "content-1", tags: [{ id: 1, tag: 'tag' }, { id: 2, tag: '검색' }] },
            // { id: 2, header: 'header-2', title: "title-2", content: "content-2", tags: [] },
            // { id: 3, header: 'header-3', title: "title-3", content: "content-3", tags: [] },
            // { id: 4, header: 'header-4', title: "title-4", content: "content-4", tags: [] },
            // { id: 5, header: 'header-5', title: "title-5", content: "content-5", tags: [] },
            // { id: 6, header: 'header-6', title: "title-6", content: "content-6", tags: [] },
        ]
    })
    componentDidMount() {
        axios.get('/api/todo')
            .then(res => {
                console.log(res.data);
                this.setState({
                    cardList: res.data
                })
            })
        console.log("init...!!", this.state.cardList)
    }

    setTodoList = (todoList) => {
        this.setState({
            cardList: todoList
        })
    }

    render() {
        const { cardList } = this.state;
        const { setTodoList } = this;
        return (
            <div>
                <Header setTodoList={setTodoList} />
                <Body cardList={cardList} />
                <Footer />
            </div>
        )
    }
}

export default Root
