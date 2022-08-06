import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
// import registerServiceWorker from './registerServiceWorker';
import './index.css';
import './assets/css/responsible.css';
import configureStore from './redux/configureStore';
import axios from "axios";

const store = configureStore();
axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? '/' : 'https://125.138.127.39:8080/';
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