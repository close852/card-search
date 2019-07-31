import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { App } from 'main';
import { BoardList } from 'board'
function Root() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/board" component={BoardList} />
                <Route path="/" component={App} />
            </Switch>
        </BrowserRouter>
    )
}

export default Root