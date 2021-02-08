import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import '../../styles/noteItem.css';

import { favoriteNoteAction } from '../../actions/note';

export const NoteItem = ({ title, id, favorite, category }) => {
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
				{category.category && (
					<span
						className="badge ms-2"
						style={{
							border: `1px solid ${category.color}`,
							color: category.color,
						}}
					>
						{category.category}
					</span>
				)}
			</Link>
			<i
				className={`col-1 cursor-pointer text-end fa-heart ${
					favorite ? 'fa' : 'far'
				}`}
				onClick={handleFavorite}
			></i>
		</li>
	);
};

NoteItem.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	favorite: PropTypes.bool.isRequired,
	category: PropTypes.object.isRequired,
};
