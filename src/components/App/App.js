import React, {Component} from 'react';

import Header from '../Header';
import ToDoList from '../ToDoList';
import AddItem from '../AddItem';
import Filter from '../Filter';
import Search from '../Search';

import './App.css';


export default class App extends Component  {

	maxId = 100;

	state = {
		todoDate: [
			{label: 'drink coffee', important: false, done: true, id: 1, visibility: true},
			{label: 'make awesome App', important: true, done: false, id: 2, visibility: true},
			{label: 'go to sleep', important: false, done: false, id: 3, visibility: true},
			{label: 'stupid', important: false, done: false, id: 4, visibility: true}
		],
		filter: 'all',
		term: ''
	}

	addItem = (text) => {

		this.setState( ({todoDate}) => {

			const createArray = {label: text, important: false, done: false, id: this.maxId++, visibility: true};

			const newArray = [...todoDate, createArray];

			return {
				todoDate: newArray
			};
		});
	}

	deleteItem = (id) => {
			this.setState(({todoDate}) => {
				const idx = todoDate.findIndex((el) => el.id === id);

				let newArray = [
						...todoDate.slice(0, idx),
						...todoDate.slice(idx + 1)
				];

				return {
					todoDate: newArray
				};
			});
	}

	createNewItem(arr, id, status) {
		const idx = arr.findIndex((el) => el.id === id);
		const oldItem = arr[idx];
		return {...oldItem, [status]: !oldItem[status]};
	}

	markImportant = (id) => {
		this.setState( ({todoDate}) => {
			const idx = todoDate.findIndex((el) => el.id === id);
			return (
					todoDate[idx] = this.createNewItem(todoDate, id, 'important')
			)
		});
	}

	markDone = (id) => {
		this.setState( ({todoDate}) => {
			const idx = todoDate.findIndex((el) => el.id === id);
			return (
					todoDate[idx] = this.createNewItem(todoDate, id, 'done')
			)
		});
	}

	searchItems = (value) => {

		this.setState(({todoDate}) => {
			let newItem = new Array();

			todoDate.map((item) => {

				if(!(item.label.indexOf(value, 0) === 0)) {
					newItem.push({...item, 'visibility': false});
				} else {
					newItem.push({...item, 'visibility': true});
				}
			});

			return {
				todoDate: newItem
			}

		});
	} // My search function. It is not work now, because there is working now another function

	checkFilter = (value) => {
		this.setState({filter: value});

		this.setState( ({todoDate, filter}) => {
			let newItem = [...todoDate];

			if(filter === 'to do') {

				for (let i in newItem) {
					newItem[i].visibility = false;

					if (newItem[i].done === false) {
							newItem[i].visibility = true;
					}
				}
			} else if(filter === 'done') {

				for (let i in newItem) {
					newItem[i].visibility = false;
					if (newItem[i].done === true) {
							newItem[i].visibility = true;
					}
				}
			} else {

				for (let i in newItem) {
					newItem[i].visibility = true;
				}
			}


			return {
				todoDate: newItem
			}
		})
	}

	searchValue = (value) => {
		this.setState({term: value});
	}

	search(items, term) {

		if(term.length === 0) {
			return items;
		}

		return items.filter( (item) => {
			return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
		})
	}


	render() {
		const {todoDate, term} = this.state;

		const visibleItems = this.search(todoDate, term);

		const doneItems = todoDate.filter((el) => el.done).length;
		const todoItems = todoDate.length - doneItems;

		return(
				<div>
					<Header todo = {todoItems} done = {doneItems}/>

					<div className='panel'>
						<Search searchItems={this.searchValue}/>
						<Filter checkFilter={this.checkFilter}/>
					</div>

					<ToDoList todoDate = {visibleItems}
					          deleteItem = {this.deleteItem}
					          markImportant = {this.markImportant}
					          markDone = {this.markDone}/>

					<AddItem addItem = {this.addItem}/>
				</div>
		)
	}
}
