// import pug
// ==========================================================================
import './index.pug';

// import sass
// ==========================================================================
import './sass/style.scss';

// import components js
// ==========================================================================
import App from './components/App';
import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';

// import react plugins 
// ==========================================================================
import React from 'react';
import { render } from 'react-dom';
import {  BrowserRouter as Router, Route } from 'react-router-dom';

// Index pages setting
// ==========================================================================

const Root = () => {
	return (
		<Router>
			<div>
				<Route exact path="/" component={ StorePicker } />
				<Route path="/store/:storeId" component={ App } />

			</div>
		</Router>
	)
	
}


render(<Root />, document.querySelector('#main'));