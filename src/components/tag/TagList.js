import React, { Fragment } from 'react'
import { Tag } from '.'
function TagList({ tagList }) {
    const tagLists = tagList && tagList.map(tag => (<Tag key={tag.id} id={tag.id} tag={tag.tag} />));
    return (
        <Fragment>
            {tagLists}
        </Fragment>
    )
}

export default TagList
