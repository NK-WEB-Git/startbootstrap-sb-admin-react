import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css'
// styles custom
import './style/sb-admin.css';

import registerServiceWorker from './registerServiceWorker';

// jquery is required for bootstrap
// Importing jQuery in ES6 style
import $ from "jquery";

// We need to expose jQuery and Popper as global variable
window.jQuery = window.$ = $;
window.Popper = require('popper.js').default;

// ES6 import does not work it throws error: Missing jQuery
// using Node.js style import works without problems
require('bootstrap');

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
