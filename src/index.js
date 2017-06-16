// import pug
// ==========================================================================
import './index.pug';

// import sass
// ==========================================================================
import './sass/style.scss';

// import js
// ==========================================================================
import App from './components/App';

// index js
// ==========================================================================
import React from 'react';
import { render } from 'react-dom';

import StorePicker from './components/StorePicker';


render(<App />, document.querySelector('#main'));