import React from 'react';
import './Header.css';

const Header = ({todo, done}) => {
	return (
			<div className='header'>
				<h1>To do list</h1>
				<h2>{todo} more to do, {done} done</h2>
			</div>
	);
}

export default Header;