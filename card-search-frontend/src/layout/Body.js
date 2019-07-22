import React from 'react'
import { TodoList } from './../components/todo'
import { Route, Switch } from 'react-router-dom';
import productAdd from './../components/product/ProductAdd'

import './Body.css'
function Body({ cardList, setTodoList }) {
    return (

        <div className="layout-body">
            <div className="container-wrapper">
                <Switch>
                    <Route exact path="/" component={() => (<TodoList cardList={cardList} setTodoList={setTodoList} />)} />
                    <Route path="/product/add" component={productAdd} />
                </Switch>
            </div>
        </div>

    )
}

export default Body
