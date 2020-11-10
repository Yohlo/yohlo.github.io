import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';
import { ThemeProvider } from './contexts';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <Router children={routes} />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
