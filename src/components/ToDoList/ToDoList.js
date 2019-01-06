import React, {Component} from 'react';

import ToDoItem from '../ToDoItem';
import './ToDoList.css';

export default class ToDoList extends Component {

	render() {
		const {todoDate, deleteItem,
					markImportant, markDone} = this.props;

		const elements = todoDate.map((item) => {

			const  { id, ...itemProps } = item;
			const classList = item.visibility  ? 'toDoList__item' : 'toDoList__item  hidden';

			return (
					<li className={classList} key={id}>
						<ToDoItem
								{...itemProps}
								deleteItem={() => deleteItem(id)}
								markImportant={() => markImportant(id)}
								markDone={() => markDone(id)}/>
					</li>
			);
		});

		return (
				<ul className='toDoList'>
					{elements}
				</ul>
		);
	}
}