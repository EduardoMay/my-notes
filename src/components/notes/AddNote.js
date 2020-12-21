import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import uniqid from 'uniqid';

import { useForm } from './../../hooks/useForm';
import { addNoteStorageAction, udpateNoteAction } from '../../actions/note';
import { getNoteById } from './../../helpers/getNoteById';

import { NavTitle } from './../ui/NavTitle';
import { getCategoryById } from '../../helpers/getCategoryById';

export const AddNote = ({ history }) => {
	const initialValues = {
		title: '',
		description: '',
		favorite: false,
		categoryId: '',
		category: {},
	};
	const { id } = useParams();
	const note = getNoteById(id) ? getNoteById(id) : initialValues;

	const { categories } = useSelector((state) => state.categories);
	const dispatch = useDispatch();
	const [alert, setAlert] = useState('');
	const [formValues, handleInputChange] = useForm(note);
	const { title, description, categoryId } = formValues;

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!id) {
			if (title !== '') {
				formValues.id = uniqid('note-');

				if (categoryId !== '') {
					formValues.category = getCategoryById(categoryId);
				}

				dispatch(addNoteStorageAction(formValues));
			} else {
				setAlert('Ingresa un titulo');
			}
		} else {
			if (categoryId !== '') {
				formValues.category = getCategoryById(categoryId);
			}
			dispatch(udpateNoteAction(id, formValues));
		}

		history.push('/home');
	};

	return (
		<>
			<NavTitle title={'Nueva nota'} />

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
							name="categoryId"
							value={categoryId}
							onChange={handleInputChange}
						>
							<option value="">Seleccionar</option>
							{categories.map(({ id, category }) => (
								<option key={id} value={id}>
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
