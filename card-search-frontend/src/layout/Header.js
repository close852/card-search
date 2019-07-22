import React from 'react'
import 'layout/Header.css'
import { SearchBar } from 'components/search'
function Header({ setTodoList }) {
    return (
        <div style={{ height: '20%' }}>
            <div className="layout-header">
                <SearchBar setTodoList={setTodoList} />
            </div>
        </div>
    )
}

export default Header
