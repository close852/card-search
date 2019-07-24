import React, { useState, useEffect } from 'react'
import queryString from 'query-string';
import { TodoList } from 'components/todo'
import axios from 'axios'
import { List } from 'immutable'

function Imsi({ location }) {

    const qString = queryString.parse(location.search).q;
    let [query, setQuery] = useState(qString)
    const temp = () => {

    }
    let [todoList, setTodoList] = useState(temp);
    console.log('qString> ' + qString);

    return (
        <div>
            <TodoList cardList={todoList} setTodoList={setTodoList} />
        </div>
    )
}

export default Imsi
