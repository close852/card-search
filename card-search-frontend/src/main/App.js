
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import { List } from 'immutable'
import { Header, Footer } from 'layout'
import { Remocon } from 'remocon'
import { TodoList } from 'todo'
import { ProductAdd } from 'product'
import qs from 'query-string'
import axios from 'axios'
import './App.css'
class App extends Component {

    state = {
        todoList: List(),
        keyword: ''
    }

    setTodoList = (todoList) => {
        this.setState({
            todoList: List(todoList)
        })
    }
    setKeyword = (keyword) => {
        console.log(this.state.keyword)
        this.setState({
            keyword: keyword
        })
    }
    addTodoList = (todo) => {
        this.setState({
            todoList: this.state.todoList.push(todo)
        })
    }


    componentDidMount() {
        const queryString = qs.parse(this.props.location.search);
        let query = "";
        if (queryString) {
            query = queryString.q || '';
        }
        this.setKeyword(query);
        // console.log('queryString > ', query, queryString);
        axios.get('/api/todo?query=' + query)
            .then(res => {
                this.setTodoList(res.data)
            })
    }

    shouldComponentUpdate(nextProps, nextState) {
        const prevKeyword = this.state.keyword;
        const nextKeyword = nextState.keyword;
        const prevCardList = this.state.todoList;
        const nextCardList = nextState.todoList;
        // console.log("shouldComponentUpdate >>", prevCardList, nextCardList)
        let isIdentity = this.identityComp(prevCardList, nextCardList);
        // console.log('shouldComponentUpdate', prevCardList.size, nextCardList.size, isIdentity);
        // console.log(isIdentity || (prevKeyword !== nextKeyword));
        return isIdentity || (prevKeyword !== nextKeyword);
    }
    // List, List
    //기준 : 1. size 같고, 2. id 순서 동일
    identityComp(prevCardList, nextCardList) {
        let checkValid = false;
        if (prevCardList.size !== nextCardList.size) {
            return true;
        }

        prevCardList.forEach((item, idx, array) => {
            const nextCard = nextCardList.get(idx);
            // console.log(item, idx, array)
            // card의 ID가 다르면 rerender
            // console.log("id compare ", item.id, nextCard.id)
            if (item.id !== nextCard.id) {
                checkValid = true;
                //forEach - 종료
                return;
            } else {
                // card Id가 같을 때 tagList[array]의 tag ID가 다르면 rerender
                if (item.tagList) {
                    item.tagList.forEach((item, idx, arr) => {
                        if (item.id !== nextCard.tagList[idx].id) {
                            checkValid = true;
                            //forEach - 종료
                            return;
                        }
                    })
                }
            }
        });

        return checkValid;
    }


    render() {
        const { setTodoList, setKeyword, addTodoList } = this;
        const { todoList, keyword } = this.state;
        console.log(addTodoList);
        return (
            <div>
                <Remocon />
                <Route path="/" component={({ history, location }) => (<Header setTodoList={setTodoList} history={history} location={location} keyword={keyword} setKeyword={setKeyword} />)} />
                <div className="container-wrapper">
                    <Switch>
                        <Route exact path="/" component={() => (<TodoList todoList={todoList} setTodoList={setTodoList} />)} />
                        <Route exact path="/search" component={() => (<TodoList todoList={todoList} setTodoList={setTodoList} />)} />
                        <Route exact path="/product/add" component={({ history }) => (<ProductAdd addTodoList={addTodoList} history={history} />)} />
                    </Switch>
                </div>
                <Route path="/" component={Footer} />

            </div>
        )
    }
}
export default App
