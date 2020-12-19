import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/noteItem.css';

export const NoteItem = ({ title }) => {
	return (
		<li className="list-group-item list-group-item-action">
			<Link to={`/note/${title}`}>{title}</Link>
			<i className="far fa-heart"></i>
		</li>
	);
};
