import React, { Component } from 'react';
import './Filter.css';

export default class Filter extends Component  {

	onHandleChange = (e) => {
		this.props.checkFilter(e.target.value);
	}

	render() {
		return(
				<div className='filter'>
					<label className='filterItem'>
						<input type="radio" value='all' name='statusFilter' defaultChecked='checked' onChange={this.onHandleChange}/>
						<span>All</span>
					</label>
					<label className='filterItem'>
						<input type="radio" value='to do' name='statusFilter' onChange={this.onHandleChange}/>
						<span>To do</span>
					</label>
					<label className='filterItem'>
						<input type="radio" value='done' name='statusFilter' onChange={this.onHandleChange}/>
						<span>Done</span>
					</label>
				</div>
		);
	}
}
