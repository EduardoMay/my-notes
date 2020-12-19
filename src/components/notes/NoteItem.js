import React from 'react';
import { Link } from 'react-router-dom';

export const NoteItem = ({ title }) => {
	return (
		<Link
			to={`/note/${title}`}
			className="list-group-item list-group-item-action"
		>
			{title}
		</Link>
	);
};
