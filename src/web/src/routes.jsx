import React from 'react';
import {Switch, Route} from 'react-router-dom'

import PageHome from './pages/Home'

const Routes = () => {
    return(
        <Switch>
            <Route path='/' exact component={PageHome} />
        </Switch>
    )
}

export default Routes