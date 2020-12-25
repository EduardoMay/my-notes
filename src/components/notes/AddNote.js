import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import uniqid from 'uniqid';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { useForm } from './../../hooks/useForm';
import { addNoteStorageAction, udpateNoteAction } from '../../actions/note';
import { getNoteById } from './../../helpers/getNoteById';

import { NavTitle } from './../ui/NavTitle';
import { getCategoryById } from '../../helpers/getCategoryById';

const configCkeditor = {
	toolbar: ['heading', '|', 'bold', 'italic', 'bulletedList', 'numberedList'],
	heading: {
		options: [
			{
				model: 'paragraph',
				title: 'Paragraph',
				class: 'ck-heading_paragraph',
			},
			{
				model: 'heading1',
				view: 'h1',
				title: 'Heading 1',
				class: 'ck-heading_heading1',
			},
			{
				model: 'heading2',
				view: 'h2',
				title: 'Heading 2',
				class: 'ck-heading_heading2',
			},
			{
				model: 'heading3',
				view: 'h3',
				title: 'Heading 3',
				class: 'ck-heading_heading3',
			},
		],
	},
};

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

	const handleChangeDescription = (event, editor) => {
		formValues.description = editor.getData();
	};

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
					<CKEditor
						editor={ClassicEditor}
						config={configCkeditor}
						data={description}
						onChange={(event, editor) => {
							handleChangeDescription(event, editor);
						}}
					/>
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
