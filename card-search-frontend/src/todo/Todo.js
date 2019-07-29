import React from 'react'
import { Card } from 'react-bootstrap'
import { TagList } from '../tag'
import 'bootstrap/dist/css/bootstrap.css';
import './Todo.css'
function Todo({ header, title, content, tagList, setTodoList }) {
    return (
        <div>
            <Card className="single-card">
                <Card.Header> {header}</Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{content}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <TagList tagList={tagList} setTodoList={setTodoList} />
                </Card.Footer>
            </Card>

        </div>
    )
}
Todo.defaultProps = {
    id: 1,
    header: 'Todo',
    title: 'title',
    content: 'no text',
    tags: []
}

export default Todo
