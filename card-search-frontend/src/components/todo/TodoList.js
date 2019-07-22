import React from 'react'
import { Todo } from './'
import './TodoList.css'
function TodoList({ cardList, setTodoList }) {

    console.log('cardList >>', cardList);
    const todoList = cardList.map((todo) => (
        <Todo key={todo.id} header={todo.header} title={todo.title} content={todo.content} tagList={todo.tagList} setTodoList={setTodoList} />
    ))
    console.log(todoList);
    return (
        <div className="card-wrapper">
            {todoList}
            {todoList.size === 0 && <div>데이터가 없습니다.</div>}
        </div>
    )
}

TodoList.defaultProps = {
    cardList: [
        <Todo key='0' />
    ]
}

export default TodoList;
