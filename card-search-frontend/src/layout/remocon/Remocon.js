import React from 'react'
import { Button } from 'react-bootstrap'
import './Remocon.css'
function Remocon() {
    return (
        <div className="remote" >
            <div>
                <Button className="button" size="lg" >T</Button>
            </div>
            <div>
                <Button className="button" size="lg" href="/product/add">+</Button>
            </div>
            <div>
                <Button className="button" size="lg" href="/">H</Button>
            </div>
        </div>
    )
}

export default Remocon
