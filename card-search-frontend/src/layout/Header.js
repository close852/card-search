import React from 'react'
import 'layout/Header.css'
import { SearchBar } from 'components/search'
function Header({ history, location, setTodoList }) {
    console.log('Header history', history);
    return (
        <div style={{ height: '20%' }}>
            <div className="layout-header">
                <SearchBar history={history} location={location} setTodoList={setTodoList} />
            </div>
        </div>
    )
}

export default Header
