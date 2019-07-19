import React from 'react'
import './Header.css'
import { SearchBar } from '../components/search'
function Header({ setTodoList }) {
    return (
        <div>
            <div className="layout-header">
                <SearchBar setTodoList={setTodoList} />
            </div>
        </div>
    )
}

export default Header
