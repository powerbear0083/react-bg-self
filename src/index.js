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
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Index pages setting
// ==========================================================================

const Root = () => {

	return (
		<BrowserRouter>
			<Switch>
					<Route exact path="/" component={ StorePicker } />
					<Route path="/store/:storeId" component={ App } />
					<Route component={ NotFound } />
					{/* <Route path="*" component={ NotFound } /> */}
			</Switch>
		</BrowserRouter>
	)
}



render(<Root />, document.querySelector('#main'));