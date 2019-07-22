import React, { Fragment } from 'react'
import './Tag.css'
import axios from 'axios'
function Tag({ tag, id, setTodoList }) {
    const handleTag = () => {
        // alert(id);
        // alert(escape('#123'));
        axios.get('/api/tag?query=' + escape(id))
            .then(res => {
                console.log(res.data);
                setTodoList(res.data);
                // setKey
            })
    }
    return (
        <Fragment >
            <span className="tag" onClick={handleTag}>
                {'#' + tag + " "}
            </span>
        </Fragment>
    )
}

export default Tag
