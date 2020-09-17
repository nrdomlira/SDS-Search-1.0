import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './pages/Home'
import Records from './pages/Record'

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/records" component={Records} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;