
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import Imsi from './Imsi'
import Imsi2 from './Imsi2'
import { List } from 'immutable'
import { Header, Footer, Remocon } from 'layout'
import { TodoList } from 'components/todo'
class App extends Component {

    state = {
        todoList: List()
    }
    setTodoList = (todoList) => {
        this.setState({
            todoList: List(todoList)
        })
    }
    render() {
        const { setTodoList } = this;
        const { todoList } = this.state;
        return (
            <div>
                <Remocon />
                <Route path="/" component={({ history, location }) => (<Header setTodoList={setTodoList} history={history} location={location} />)} />
                <Switch>
                    <Route path="/" component={() => (<TodoList cardList={todoList} setTodoList={setTodoList} />)} />
                    <Route path="/search" component={() => (<TodoList cardList={todoList} setTodoList={setTodoList} />)} />
                    <Route path="/product/add" component={Imsi2} />
                </Switch>
                <Route path="/" component={Footer} />

            </div>
        )
    }
}
export default App
