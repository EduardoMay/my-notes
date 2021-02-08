import React from 'react';

import '../../styles/addButton.css';

import { Link } from 'react-router-dom';

export const AddButton = ({ url }) => {
	return (
		<>
			<Link
				type="button"
				className="btn btn-outline-primary rounded-circle"
				to={`/${url}`}
			>
				<i className="fa fa-plus"></i>
			</Link>
		</>
	);
};
