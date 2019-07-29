import React from 'react'
import 'layout/Header.css'
import { SearchBar } from 'search'
function Header({ history, location, setTodoList, keyword, setKeyword }) {
    console.log('Header history', history);
    return (
        <div style={{ height: '20%' }}>
            <div className="layout-header">
                <SearchBar history={history} location={location} setTodoList={setTodoList} keyword={keyword} setKeyword={setKeyword} />
            </div>
        </div>
    )
}

export default Header
