import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../modules/rootReducer';
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
// import Parse from 'parse-redux'
const loggerMiddleware = createLogger()



export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    // window.devToolsExtension ? window.devToolsExtension() : undefined
      applyMiddleware(
          thunkMiddleware,
          loggerMiddleware
      )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../modules/rootReducer', () => {
      const nextReducer = require('../modules/rootReducer');
      store.replaceReducer(nextReducer);
    });
  }

  // Parse.setStore(store)
  // Parse.initialize("CTHvHksosQ8Z8UJwQ5RceDGFipibAKlzzfadjvZU", "3UTiXM8nv0gZxs0B1v53xpsVxYFexYLUApJ3xWpD");
  // Parse.serverURL = "http://localhost:3001/parse"
  // Parse.serverURL = 'http://ec2-52-64-120-137.ap-southeast-2.compute.amazonaws.com:80/parse'
// Parse.initialize(APPLICATION_ID, JAVASCRIPT_KEY)

  return store;
}

/////
//
// import { createStore, applyMiddleware } from 'redux'
// import thunkMiddleware from 'redux-thunk'
// import createLogger from 'redux-logger'
// import rootReducer from './reducers'
//
// const loggerMiddleware = createLogger()
//
// export default function configureStore(initialState) {
//   return createStore(
//       rootReducer,
//       initialState,
//       applyMiddleware(
//           thunkMiddleware,
//           loggerMiddleware
//       )
//   )
// }