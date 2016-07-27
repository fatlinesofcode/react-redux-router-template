import React, {Component} from 'react';
import { Router, Route, Link, hashHistory, IndexRedirect } from 'react-router';
import { Provider } from 'react-redux';
import routes from './routes';


// require("font-awesome-webpack");
// FacebookPromises.init("1767325570210451");


export default class root extends Component {

    render() {
        const { store } = this.props; // *** passed here from the parent component.
        return (
            <div>
                <Provider store={store}>
                        <Router history={hashHistory} routes={routes} />
                </Provider>

            </div>
        );
    }
}