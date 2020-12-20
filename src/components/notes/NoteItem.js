import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import '../../styles/noteItem.css';

import { favoriteNoteAction } from '../../actions/note';

export const NoteItem = ({ title, id, favorite }) => {
	const dispatch = useDispatch();

	const handleFavorite = () => {
		dispatch(favoriteNoteAction(id));
	};

	return (
		<li className="list-group-item list-group-item-action align-items-center">
			<Link
				className="text-decoration-none d-block col-11"
				to={`/note/${id}`}
			>
				{title}
			</Link>
			<i
				className={`col-1 text-end fa-heart ${favorite ? 'fa' : 'far'}`}
				onClick={handleFavorite}
			></i>
		</li>
	);
};
