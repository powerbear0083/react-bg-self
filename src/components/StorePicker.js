import React from 'react';
import PropTypes from 'prop-types';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
	// constructor() {
	// 	super();
	// 	this.goToStore = this.goToStore.bind(this);
	// }

	goToStore(e) {
		e.preventDefault();
		// console.log('u chagnes the URL');
		// 第一步抓取 input 裡的值
		const storeId = this.inputText.value;
		// console.log(this.props)
		// console.log(`${storeId}`);
		// 第二步轉換網址
		// this.context.router.push(`/store/${storeId}`)
		// this.props.location.pathname = `/store/${storeId}`;
		// this.props.history.push(`/store/${storeId}`);
		this.props.history.replace(`/store/${storeId}`);
	}

	render() {
		return (
			<form className="store-selector" onSubmit={ (e) => this.goToStore(e) }>
				<h2>Please Enter A Store</h2>
				<input type="text" required placeholder="Store Name" defaultValue={ getFunName() } ref={ (input) => { this.inputText = input } } />
				<button type="submit">Visit Store -></button>
			</form>
		)
	}
}

StorePicker.contextTypes = {
	router: PropTypes.object
}

export default StorePicker;