// import pug
// ==========================================================================
import './index.pug';

// import sass
// ==========================================================================
import './sass/style.scss';

// import components
// ==========================================================================
import App from './components/App';
import StorePicker from './components/StorePicker';

// index plugins
// ==========================================================================
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

const Root = () => {
	return (
		<BrowserRouter>
		</BrowserRouter>
	)
}


render(<App />, document.querySelector('#main'));