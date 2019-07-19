import React from 'react'
import { Todo } from './'
import './TodoList.css'
function TodoList({ cardList }) {

    const todoList = cardList.map((todo) => (
        <Todo key={todo.id} header={todo.header} title={todo.title} content={todo.content} tagList={todo.tagList} />
    ))
    return (
        <div className="list-wrapper">
            <div className="card-wrapper">
                {todoList}
            </div>
        </div>
    )
}

TodoList.defaultProps = {
    cardList: [
        <Todo key='0' />
    ]
}

export default TodoList;
