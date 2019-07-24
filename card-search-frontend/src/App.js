
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import { List } from 'immutable'
import { Header, Footer, Remocon } from 'layout'
import { TodoList } from 'components/todo'
import { ProductAdd } from 'components/product'
import axios from 'axios'
import './App.css'
class App extends Component {

    state = {
        todoList: List()
    }
    setTodoList = (todoList) => {
        this.setState({
            todoList: List(todoList)
        })
    }


    componentDidMount() {
        // console.log('this.props.location', this.props, queryString);
        axios.get('/api/todo')
            .then(res => {
                this.setState({
                    todoList: List(res.data)
                })
            })
        console.log("init...!!", this.state.cardList)
    }

    shouldComponentUpdate(nextProps, nextState) {
        const prevCardList = this.state.todoList;
        const nextCardList = nextState.todoList;
        console.log("shouldComponentUpdate >>", prevCardList, nextCardList)
        let isIdentity = this.identityComp(prevCardList, nextCardList);
        console.log('shouldComponentUpdate', prevCardList.size, nextCardList.size, isIdentity);
        return isIdentity;
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
            console.log("id compare ", item.id, nextCard.id)
            if (item.id !== nextCard.id) {
                checkValid = true;
                return;
            } else {
                // card Id가 같을 때 tagList[array]의 tag ID가 다르면 rerender
                if (item.tagList) {
                    item.tagList.forEach((item, idx, arr) => {
                        if (item.id !== nextCard.tagList[idx].id) {
                            checkValid = true;
                            return;
                        }
                    })
                }
            }
        });

        return checkValid;
    }

    render() {
        const { setTodoList } = this;
        const { todoList } = this.state;
        return (
            <div>
                <Remocon />
                <Route path="/" component={({ history, location }) => (<Header setTodoList={setTodoList} history={history} location={location} />)} />
                <div className="container-wrapper">
                    <Switch>
                        <Route exact path="/" component={() => (<TodoList cardList={todoList} setTodoList={setTodoList} />)} />
                        <Route exact path="/search" component={() => (<TodoList cardList={todoList} setTodoList={setTodoList} />)} />
                        <Route exact path="/product/add" component={ProductAdd} />
                    </Switch>
                </div>
                <Route path="/" component={Footer} />

            </div>
        )
    }
}
export default App
