import React from 'react';
import { useDispatch } from 'react-redux';

import { deleteCategoryStorageAction } from '../../actions/categories';

export const CategoryItem = ({ category, id }) => {
	const dispatch = useDispatch();

	const handleDelete = () => {
		if (window.confirm('Seguro que eliminar?')) {
			// TODO dispatch para eliminar la nota del localstorage
			dispatch(deleteCategoryStorageAction(id));
		}
	};

	return (
		<li className="list-group-item">
			{category}
			<div onClick={handleDelete}>
				<i className="fa fa-trash"></i>
			</div>
		</li>
	);
};
