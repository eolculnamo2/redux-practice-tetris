import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Index from './index';

ReactDOM.render(
<Provider store={store}>
    <Index />
</Provider>, document.getElementById("app"));