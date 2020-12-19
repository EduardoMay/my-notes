import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { useForm } from './../../hooks/useForm';

import {
	addNoteStorageAction,
	desactivateNewNoteAction,
} from '../../actions/note';

export const AddNote = () => {
	const dispatch = useDispatch();
	const [alert, setAlert] = useState('');
	const [formValues, handleInputChange] = useForm({
		title: '',
		description: '',
		favorite: false,
	});
	const { title, description } = formValues;

	const handleSubmit = (e) => {
		e.preventDefault();
		if (title !== '') {
			formValues.id = new Date().getTime();

			dispatch(addNoteStorageAction(formValues));
			dispatch(desactivateNewNoteAction());
		} else {
			setAlert('Ingresa un titulo');
		}
	};

	return (
		<>
			<div className="navbar navbar-light bg-light">
				<span className="navbar-brand mb-0 h1">Nueva nota</span>
			</div>

			<form className="container mt-4" onSubmit={handleSubmit}>
				<div className="form-group">
					<input
						type="text"
						id="titulo"
						className="form-control"
						placeholder="Titulo"
						name="title"
						onChange={handleInputChange}
						value={title}
					/>
				</div>

				<div className="form-group">
					<textarea
						className="form-control"
						id="exampleFormControlTextarea1"
						rows="10"
						placeholder="Descripcion"
						name="description"
						onChange={handleInputChange}
						value={description}
					></textarea>
				</div>

				{alert !== '' ? (
					<div
						className="alert border border-danger text-danger"
						role="alert"
					>
						{alert}
					</div>
				) : (
					''
				)}

				<button type="submit" className="btn btn-outline-primary">
					<i className="fa fa-save"></i> Guardar
				</button>
			</form>
		</>
	);
};
