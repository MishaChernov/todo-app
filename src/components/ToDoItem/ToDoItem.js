import React, {Component} from 'react';
import './ToDoItem.css';

export default class ToDoItem extends Component {

	render() {
		const { label, deleteItem, done, important,
						markImportant, markDone } = this.props;

		let nameOfClass = 'toDoItem';

		if(done) {
			nameOfClass += ' toDoItem--active';
		}
		if(important) {
			nameOfClass += ' toDoItem--important'
		}

		return (
			<div>
				<span className={nameOfClass} onClick={markDone}>
				{ label }
				</span>
				<div className='toDoList__buttons'>
					<button className='toDoList__button  toDoList__button--delete' onClick={deleteItem}>Delete</button>
					<button className='toDoList__button  toDoList__button--important' onClick={markImportant}>Important</button>
				</div>
			</div>
		);
	}
}