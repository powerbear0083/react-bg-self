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
import { BrowserRouter, Route } from 'react-router-dom';

// Index pages setting
// ==========================================================================

const Root = () => {
	return (
		<BrowserRouter>
			<div>
				<Route exact path="/" component={ StorePicker } />
				<Route path="/store/:storeId" component={ App } />

			</div>
		</BrowserRouter>
	)
}


render(<Root />, document.querySelector('#main'));