import React from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, useParams, Link } from 'react-router-dom';
import { deleteNoteStorageAction } from '../../actions/note';
import { getNoteById } from './../../helpers/getNoteById';

export const NoteScreen = ({ history }) => {
	const { id } = useParams();
	const dispatch = useDispatch();

	const note = getNoteById(Number(id));

	if (!note) {
		return <Redirect to="/" />;
	}

	const { title, description, category } = note;

	const handleDelete = () => {
		if (window.confirm('Seguro que desea eliminar?')) {
			dispatch(deleteNoteStorageAction(Number(id)));

			history.push('/home');
		}
	};

	return (
		<div>
			<div className="navbar navbar-light bg-light container">
				<span className="navbar-brand mb-0 h1">{title}</span>

				<div>
					<button
						className="btn btn-outline-danger"
						onClick={handleDelete}
					>
						<i className="fa fa-trash"></i>
					</button>
					<Link
						className="btn btn-outline-primary"
						to={`/newnote/${id}`}
					>
						<i className="fa fa-edit"></i>
					</Link>
				</div>
			</div>

			<div className="container">
				{category && (
					<div className="mb-2">
						<span className="badge bg-primary">{category}</span>
					</div>
				)}
				{description}
			</div>
		</div>
	);
};
