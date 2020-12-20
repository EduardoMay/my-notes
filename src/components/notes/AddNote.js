import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useForm } from './../../hooks/useForm';

import { addNoteStorageAction, udpateNoteAction } from '../../actions/note';
import { useParams } from 'react-router-dom';
import { getNoteById } from './../../helpers/getNoteById';

export const AddNote = ({ history }) => {
	const { id } = useParams();
	const note = getNoteById(Number(id));

	const { categories } = useSelector((state) => state.categories);
	const dispatch = useDispatch();
	const [alert, setAlert] = useState('');
	const [formValues, handleInputChange] = useForm(
		note
			? note
			: {
					title: '',
					description: '',
					favorite: false,
					category: '',
			  }
	);
	const { title, description, category } = formValues;

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!id) {
			if (title !== '') {
				formValues.id = new Date().getTime();

				dispatch(addNoteStorageAction(formValues));
			} else {
				setAlert('Ingresa un titulo');
			}
		} else {
			dispatch(udpateNoteAction(Number(id), formValues));
		}

		history.push('/home');
	};

	return (
		<>
			<div className="navbar navbar-light bg-light container">
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

				<div className="form-group my-4">
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

				{categories.length > 0 && (
					<div className="form-group mb-3">
						<select
							className="form-select form-select-sm"
							name="category"
							value={category}
							onChange={handleInputChange}
						>
							<option value="">Seleccionar</option>
							{categories.map((category) => (
								<option key={category} value={category}>
									{category}
								</option>
							))}
						</select>
					</div>
				)}

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

				<div className="text-end">
					<button type="submit" className="btn btn-outline-primary">
						<i className="fa fa-save"></i> Guardar
					</button>
				</div>
			</form>
		</>
	);
};
