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
	const initialValues = {
		category: '',
		color: '#00ff00',
	};
	const { id } = useParams();
	const categoryValue = getCategoryById(id)
		? getCategoryById(id)
		: initialValues;
	const dispatch = useDispatch();
	const [formValues, handleInputChange] = useForm(categoryValue);
	const { category, color = '#00ff00' } = formValues;

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!id) {
			if (category !== '') {
				formValues.id = uniqid('category-');

				dispatch(addCategorieStorageAction(formValues));
			}
		} else {
			dispatch(updateCategoryStorageAction(id, formValues));
		}

		history.push('/categories');
	};

	return (
		<>
			<NavTitle title={'Categorias'} />

			<form className="mt-3 container" onSubmit={handleSubmit}>
				<div className="form-floating mb-3">
					<input
						id="category"
						type="text"
						className="form-control"
						name="category"
						onChange={handleInputChange}
						value={category}
						placeholder="Categoria"
					/>
					<label htmlFor="category">Categoria</label>
				</div>

				<div className="form-control">
					<input
						type="color"
						className="form-control"
						onChange={handleInputChange}
						value={color}
						name="color"
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
