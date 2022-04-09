import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import TemplateProvider from './templates/TemplateProvider.js'

ReactDOM.render(
  <TemplateProvider>
    <App />
  </TemplateProvider>,
  document.getElementById('root')
);
reportWebVitals();
