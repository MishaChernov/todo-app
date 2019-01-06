import React, { Component } from 'react';
import './Search.css';

export default class Search extends Component {

	onChange = (e) => {
		this.props.searchItems(e.target.value);
	}

	render() {
		return (
				<div className='search'>
					<input type="text" placeholder='search' onChange={this.onChange}/>
				</div>
		);
	}
}