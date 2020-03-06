import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AppReact from './AppReact';
import { Provider } from 'react-redux';
import store from './redux/store';
import Usuarios from './redux/Usuarios';


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider >
    , document.getElementById('root'));

serviceWorker.unregister();