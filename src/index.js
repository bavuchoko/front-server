import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
// import registerServiceWorker from './registerServiceWorker';
import './index.css';
import './assets/css/responsible.css';
import configureStore from './redux/configureStore';
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:8080';

axios.defaults.withCredentials = true;
const store = configureStore();
const render = Component => {
    ReactDOM.render(
            <Component store={store}/>,

        document.getElementById('root')
    );
};

render(Root);

if(module.hot) {
    module.hot.accept('./Root', () => render(Root));
}

// registerServiceWorker();