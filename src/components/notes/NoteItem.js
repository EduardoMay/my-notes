import React from 'react';
import { Link } from 'react-router-dom';

export const NoteItem = () => {
	return (
		<Link to="/note/id" className="list-group-item list-group-item-action">
			Cras justo odio
		</Link>
	);
};
