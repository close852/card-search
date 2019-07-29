import React, { useState } from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

function SearchBar({ history, location, setTodoList, keyword, setKeyword }) {
    // console.log('SearchBar', history);
    // console.log('location.search.q', queryString.parse(location.search).q)
    const [srchKeyword, setSrchKeyword] = useState(keyword);
    console.log('keyword >>> ', keyword);
    const handleSearch = () => {
        axios.get('/api/todo?query=' + srchKeyword)
            .then(res => {
                console.log('res.data > ', res.data);
                setTodoList(res.data);
                setKeyword(srchKeyword);
            })
        console.log('keyword >>> ', srchKeyword);

        history.push('/search?q=' + srchKeyword)
    }
    const handleEnter = (e) => {
        // console.log(keyword)
        if (e.key === 'Enter') {
            handleSearch();
        }
    }
    const handleChange = (e) => {
        setSrchKeyword(e.target.value)
    }
    return (
        <div>
            <InputGroup className="mb-3" size="lg">
                <FormControl value={srchKeyword} onKeyDown={handleEnter} onChange={handleChange} />
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
