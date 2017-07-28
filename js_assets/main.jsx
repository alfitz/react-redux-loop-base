import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from 'store';
import Root from 'components/Root';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route exact path="/" component={Root}></Route>
        </Router>
    </Provider>,
    document.getElementById('app-container')
);