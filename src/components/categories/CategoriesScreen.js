import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

import { addCategorieStorageAction } from './../../actions/categories';
import { useForm } from './../../hooks/useForm';

import { AddButton } from './../ui/AddButton';
import { NavTitle } from '../ui/NavTitle';

import { CategoriesList } from './CategoriesList';

export const CategoriesScreen = () => {
	const categoryInput = useRef();
	const dispatch = useDispatch();
	const [formValues, handleInputChange, reset] = useForm({ category: '' });
	const { category } = formValues;

	const handleSubmit = (e) => {
		e.preventDefault();

		if (category !== '') {
			dispatch(addCategorieStorageAction(category));
			reset();
			categoryInput.current.focus();
		}
	};

	return (
		<>
			<NavTitle title={'Categorias'} />

			<div className="container">
				<form className="row mt-3" onSubmit={handleSubmit}>
					<div className="col-9">
						<input
							ref={categoryInput}
							type="text"
							className="form-control"
							name="category"
							placeholder="Categoria"
							onChange={handleInputChange}
							value={category}
						/>
					</div>

					<div className="col-3 text-right">
						<button
							type="submit"
							className="btn btn-outline-primary"
						>
							<i className="fa fa-save"></i>
						</button>
					</div>
				</form>
			</div>

			<CategoriesList />

			<AddButton />
		</>
	);
};
