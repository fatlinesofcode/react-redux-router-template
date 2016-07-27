import React from 'react';
import {Route, IndexRoute, Redirect, IndexRedirect} from 'react-router';

/* containers */
import {App} from './containers/App/App';
import {Home} from './containers/Home/index';

export default (
    <Route path="/" component={App}>
        <IndexRedirect to="home"/>
        <Route path="home" component={Home}/>
    </Route>
);
