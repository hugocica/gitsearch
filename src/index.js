import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './utils/config-store';
import App from './pages/app';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import './assets/css/app.css';
import { createBrowserHistory as createHistory } from 'history'
import * as serviceWorker from './serviceWorker';

const history = createHistory();

ReactDOM.render(
    <Provider store={configureStore()}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>
    , document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
