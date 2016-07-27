import { combineReducers } from 'redux';

import app from './app/reducer';
import { reducer as form } from 'redux-form';

const rootReducer = combineReducers({
    // todos,
    app,
    form

});

export default rootReducer;
