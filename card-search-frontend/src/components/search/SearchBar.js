import React, { useState } from 'react'
import { InputGroup, FormControl, Button, Spinner } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

function SearchBar({ setTodoList }) {
    const [keyword, setKeyword] = useState('');
    const [isLoading, setLoading] = useState(false);
    const handleSearch = () => {
        setLoading(true);
        axios.get('/api/todo?query=' + keyword)
            .then(res => {
                setTodoList(res.data);
                setLoading(false);
            })
    }
    const handleChange = (event) => {
        const value = event.target.value;
        setKeyword(value);
    }
    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    }
    return (
        <div>
            <InputGroup className="mb-3" size="lg">
                <FormControl value={keyword} onChange={handleChange} onKeyDown={handleEnter} />
                <InputGroup.Append>
                    <Button className="btn btn-secondary" onClick={handleSearch} >
                        {isLoading ? <Spinner animation="grow" size="sm" /> : "Search"}
                    </Button>
                </InputGroup.Append>
            </InputGroup>

        </div>
    )
}

export default SearchBar
