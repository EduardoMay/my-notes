import React from 'react';
import { useDispatch } from 'react-redux';

import { useForm } from './../../hooks/useForm';

import { addNoteAction, desactivateNewNoteAction } from '../../actions/note';

export const AddNote = () => {
	const dispatch = useDispatch();
	const [formValues, handleInputChange] = useForm({
		title: '',
		description: '',
	});
	const { title, description } = formValues;

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addNoteAction(formValues));
		dispatch(desactivateNewNoteAction());
	};

	return (
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

			<button type="submit" className="btn btn-outline-primary">
				<i className="fa fa-save"></i> Guardar
			</button>
		</form>
	);
};
