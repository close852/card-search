import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Remocon.css'
function Remocon() {
    return (
        <div className="remote" >
            <div>
                <Button className="button btnStyles" size="lg" >T</Button>
            </div>
            <div>

                <Button className="button" size="lg" ><Link to="/product/add" className="btnStyles">+</Link></Button>

            </div>
            <div>

                <Button className="button" size="lg" href="/"><Link to="/" className="btnStyles">H</Link></Button>

            </div>
        </div>
    )
}

export default Remocon
