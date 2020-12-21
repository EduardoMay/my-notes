import React from 'react';
import { useDispatch } from 'react-redux';
import uniqid from 'uniqid';

import { useForm } from '../../hooks/useForm';
import {
	addCategorieStorageAction,
	updateCategoryStorageAction,
} from './../../actions/categories';
import { NavTitle } from './../ui/NavTitle';
import { useParams } from 'react-router-dom';
import { getCategoryById } from '../../helpers/getCategoryById';

export const AddCategoryScreen = ({ history }) => {
	const { id } = useParams();
	const { category: categoryValue } = getCategoryById(id)
		? getCategoryById(id)
		: '';
	const dispatch = useDispatch();
	const [formValues, handleInputChange] = useForm({
		category: categoryValue ? categoryValue : '',
	});
	const { category } = formValues;

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!id) {
			if (category !== '') {
				formValues.id = uniqid('category-');

				dispatch(addCategorieStorageAction(formValues));
			}
		} else {
			formValues.id = id;
			dispatch(updateCategoryStorageAction(id, formValues));
		}

		history.push('/categories');
	};

	return (
		<>
			<NavTitle title={'Categorias'} />

			<form className="mt-3 container" onSubmit={handleSubmit}>
				<div className="form-group">
					<input
						type="text"
						className="form-control"
						name="category"
						placeholder="Categoria"
						onChange={handleInputChange}
						value={category}
					/>
				</div>

				<div className="d-grid gap-2 mt-3">
					<button
						type="submit"
						className="btn btn-outline-primary btn-block"
					>
						<i className="fa fa-save"></i>
						Guardar
					</button>
				</div>
			</form>
		</>
	);
};
