import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import { createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import logger from "redux-logger";
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';


const store = createStore(rootReducer, applyMiddleware(thunk,logger));
window.reduxStore = store;




ReactDOM.render(
    <Provider store={store}>
        <Router>
<App />
</Router>
</Provider>, document.getElementById('root'));