import React, { useRef } from 'react';
import { AddButton } from './../ui/AddButton';
import { useForm } from './../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { addCategorieStorageAction } from './../../actions/categories';

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
			<div className="navbar navbar-light bg-light">
				<span className="navbar-brand mb-0 h1">Categorias</span>
			</div>

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

			<ul className="list-group mt-4" style={{ marginBottom: '90px' }}>
				<li className="list-group-item">Cras justo odio</li>
				<li className="list-group-item">Dapibus ac facilisis in</li>
				<li className="list-group-item">Morbi leo risus</li>
				<li className="list-group-item">Porta ac consectetur ac</li>
				<li className="list-group-item">Porta ac consectetur ac</li>
				<li className="list-group-item">Porta ac consectetur ac</li>
				<li className="list-group-item">Porta ac consectetur ac</li>
				<li className="list-group-item">Porta ac consectetur ac</li>
				<li className="list-group-item">Porta ac consectetur ac</li>
				<li className="list-group-item">Porta ac consectetur ac</li>
				<li className="list-group-item">Porta ac consectetur ac</li>
				<li className="list-group-item">Vestibulum at eros</li>
			</ul>

			<AddButton />
		</>
	);
};
