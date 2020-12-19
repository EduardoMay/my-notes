import React from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
import { deleteNoteStorageAction } from '../../actions/note';
import { getNoteById } from './../../helpers/getNoteById';

export const NoteScreen = ({ history }) => {
	const { id } = useParams();
	const dispatch = useDispatch();

	const note = getNoteById(Number(id));

	if (!note) {
		return <Redirect to="/" />;
	}

	const { title, description } = note;

	const handleDelete = () => {
		if (window.confirm('Seguro que desea eliminar?')) {
			dispatch(deleteNoteStorageAction(Number(id)));

			history.push('/home');
		}
	};

	return (
		<div>
			<div className="navbar navbar-light bg-light">
				<span className="navbar-brand mb-0 h1">{title}</span>

				<div>
					<button
						className="btn btn-outline-danger mr-2"
						onClick={handleDelete}
					>
						<i className="fa fa-trash"></i>
					</button>
					<button className="btn btn-outline-primary">
						<i className="fa fa-edit"></i>
					</button>
				</div>
			</div>

			<div className="container mt-4">{description}</div>
		</div>
	);
};
