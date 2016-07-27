import React from "react";
import ReactDOM from "react-dom";
import injectTapEventPlugin from "react-tap-event-plugin";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, Link, hashHistory, IndexRedirect } from 'react-router';

import configureStore from './redux/store/configureStore';



import Root from './root';




//Needed for React Developer Tools
window.React = React;

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

export const store = configureStore();

ReactDOM.render(
    <Root store={store} />,
  document.getElementById("root")
);
