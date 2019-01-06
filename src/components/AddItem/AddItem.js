import React, { Component } from 'react';
import './AddItem.css';

export default class AddItem extends Component {

	state = {
		label: ''
	};

	onInputChange = (e) => {
		this.setState({label: e.target.value});
	}

	onFormSubmit = (e) => {
		e.preventDefault();
		this.props.addItem(this.state.label);

		this.setState(({label}) => {
			return {
				label: ' '
			}
		})
	}


	render() {
		return (
				<form className='addItem' onSubmit={this.onFormSubmit}>
					<input placeholder='add item' value={this.state.label} onChange={this.onInputChange}/>
					<button type="submit">Add</button>
				</form>
		)
	}
}