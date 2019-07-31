import React from 'react'
import { Todo } from '.'
import './TodoList.css'
function TodoList({ todoList, setTodoList }) {

    console.log('todoList >>', todoList);
    const mappingTodoList = todoList.map((todo) => (
        <Todo key={todo.id} header={todo.header} title={todo.title} content={todo.content} tagList={todo.tagList} setTodoList={setTodoList} />
    ))
    console.log(mappingTodoList);
    return (
        <div className="list-wrapper">
            <div className="card-wrapper">
                {mappingTodoList}
                {mappingTodoList.size === 0 && <div>데이터가 없습니다.</div>}
            </div>
        </div>
    )
}

TodoList.defaultProps = {
    todoList: [
        <Todo key='0' />
    ]
}

export default TodoList;
