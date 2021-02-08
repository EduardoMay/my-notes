import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

import { deleteCategoryStorageAction } from '../../actions/categories';

export const CategoryItem = ({ category, id }) => {
	const dispatch = useDispatch();

	const handleDelete = () => {
		Swal.fire({
			title: 'Seguro que desea eliminar?',
			showConfirmButton: false,
			showDenyButton: true,
			showCancelButton: true,
			denyButtonText: `Eliminar`,
			cancelButtonText: 'Cancelar',
		}).then((result) => {
			if (result.isDenied) {
				dispatch(deleteCategoryStorageAction(id));
			}
		});
	};

	return (
		<li className="list-group-item align-items-center">
			{category}
			<div>
				<i
					className="fa fa-trash cursor-pointer"
					onClick={handleDelete}
				></i>
				<Link
					className="fa fa-edit text-primary d-block mt-2"
					to={`/addcategory/${id}`}
				></Link>
			</div>
		</li>
	);
};
