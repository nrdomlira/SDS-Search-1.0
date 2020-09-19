import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './pages/Home'
import Records from './pages/Record'
import Charts from './pages/Charts'

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/records" component={Records} />
                <Route path="/charts" component={Charts} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;