import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import { Provider } from 'react-redux';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { rootReducer } from './reduxstate/rootReducer';
import { userReducer } from './reduxstate/userReducer';
import thunk from 'redux-thunk';

const middleware = [thunk];

const reducer = combineReducers({ Users: userReducer, Names: rootReducer });

let initialState = {
    Users: [],
    Names: { Name: 'Amit' }
}

const store = createStore(reducer, initialState, compose(applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
