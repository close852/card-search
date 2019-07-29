import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { App } from 'main';
function Root() {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    )
}

export default Root