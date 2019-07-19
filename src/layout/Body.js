import React from 'react'
import { TodoList } from './../components/todo'

import './Body.css'
function Body({ cardList }) {
    console.log('Body >', cardList)
    return (
        <div className="layout-body">
            <TodoList cardList={cardList} />
        </div>
    )
}

export default Body
