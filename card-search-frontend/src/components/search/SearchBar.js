import React, { useState } from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap'
import queryString from 'query-string'
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

function SearchBar({ history, location, setTodoList }) {
    // console.log('SearchBar', history);
    // console.log('location.search.q', queryString.parse(location.search).q)
    const [keyword, setKeyword] = useState(queryString.parse(location.search).q);
    console.log('keyword >>> ', keyword);
    const handleSearch = () => {

        axios.get('/api/todo?query=' + keyword)
            .then(res => {
                console.log('res.data > ', res.data);
                setTodoList(res.data);
            })

        history.push('/search?q=' + keyword)
    }
    const handleEnter = (e) => {
        // console.log(keyword)
        if (e.key === 'Enter') {
            handleSearch();
        }
    }
    return (
        <div>
            <InputGroup className="mb-3" size="lg">
                <FormControl value={keyword} onKeyDown={handleEnter} onChange={(e) => { setKeyword(e.target.value) }} />
                <InputGroup.Append>
                    <Button className="btn btn-secondary" onClick={handleSearch} >
                        {"Search"}
                    </Button>
                </InputGroup.Append>
            </InputGroup>

        </div>
    )
}

export default SearchBar
