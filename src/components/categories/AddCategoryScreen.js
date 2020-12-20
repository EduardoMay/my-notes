import React from 'react';
import { useDispatch } from 'react-redux';
import uniqid from 'uniqid';

import { useForm } from '../../hooks/useForm';
import { addCategorieStorageAction } from './../../actions/categories';
import { NavTitle } from './../ui/NavTitle';

export const AddCategoryScreen = ({ history }) => {
	const dispatch = useDispatch();
	const [formValues, handleInputChange] = useForm({ category: '' });
	const { category } = formValues;

	const handleSubmit = (e) => {
		e.preventDefault();

		if (category !== '') {
			formValues.id = uniqid('category-');

			dispatch(addCategorieStorageAction(formValues));
			history.push('/categories');
		}
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
					</button>
				</div>
			</form>
		</>
	);
};
