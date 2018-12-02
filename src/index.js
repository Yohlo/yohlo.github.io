import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { HashRouter } from 'react-router-dom'; // using hash-routing for compatibility with gh-pages
import * as serviceWorker from './serviceWorker';

import './index.css';
import ThemeProvider from './components/ThemeProvider';

let store = createStore(rootReducer);
window.store = store;

ReactDOM.render(<Provider store={store}>
    <div>
        <ThemeProvider>
            <HashRouter
                children={routes}
            />
        </ThemeProvider>
    </div>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();