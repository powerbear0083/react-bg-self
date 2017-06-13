// import pug
// ==========================================================================
import './index.pug';

// import sass
// ==========================================================================


// import js
// ==========================================================================

import React from 'react';
import { render } from 'react-dom';

import StorePicker from './components/StorePicker';


render(<StorePicker />, document.querySelector('#main'));