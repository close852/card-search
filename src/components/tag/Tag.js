import React, { Fragment } from 'react'
import './Tag.css'
function Tag({ tag, id }) {
    const handleTag = () => {
        alert(id);
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
