import React from 'react';

export const CategoryItem = ({ category, id }) => {
	const handleDelete = () => {};

	return (
		<li className="list-group-item">
			{category}
			<button
				className="btn btn-outline-danger border-0"
				onClick={handleDelete}
			>
				<i className="fa fa-trash"></i>
			</button>
		</li>
	);
};
