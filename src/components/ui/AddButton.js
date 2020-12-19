import React from 'react';

import '../../styles/addButton.css';

import { Link } from 'react-router-dom';

export const AddButton = () => {
	return (
		<>
			<Link
				type="button"
				className="btn btn-outline-primary rounded-circle add-button"
				to="/newnote"
			>
				<i className="fa fa-plus"></i>
			</Link>
		</>
	);
};
