import React from 'react';
import { useDispatch } from 'react-redux';

import { deleteCategoryStorageAction } from '../../actions/categories';

export const CategoryItem = ({ category, id }) => {
	const dispatch = useDispatch();

	const handleDelete = () => {
		if (window.confirm('Seguro que eliminar?')) {
			dispatch(deleteCategoryStorageAction(id));
		}
	};

	const handleUpdate = () => {};

	return (
		<li className="list-group-item align-items-center">
			{category}
			<div>
				<i className="fa fa-trash" onClick={handleDelete}></i>
				<i
					className="fa fa-edit text-primary d-block mt-2"
					onClick={handleUpdate}
				></i>
			</div>
		</li>
	);
};
