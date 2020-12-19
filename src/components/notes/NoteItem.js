import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/noteItem.css';
import { favoriteNoteAction } from '../../actions/note';
import { useDispatch } from 'react-redux';

export const NoteItem = ({ title, id, favorite }) => {
	const dispatch = useDispatch();

	const handleFavorite = () => {
		dispatch(favoriteNoteAction(id));
	};

	return (
		<li className="list-group-item list-group-item-action">
			<Link to={`/note/${id}`}>{title}</Link>
			<i
				className={`fa-heart ${favorite ? 'fa' : 'far'}`}
				onClick={handleFavorite}
			></i>
		</li>
	);
};
