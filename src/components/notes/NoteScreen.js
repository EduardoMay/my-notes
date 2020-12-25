import React from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, useParams, Link } from 'react-router-dom';
import { deleteNoteStorageAction } from '../../actions/note';
import { getNoteById } from './../../helpers/getNoteById';
import ReactHtmlParser from 'react-html-parser';

export const NoteScreen = ({ history }) => {
	const { id } = useParams();
	const dispatch = useDispatch();

	const note = getNoteById(id);

	if (!note) {
		return <Redirect to="/" />;
	}

	const {
		title,
		description,
		category: { category: categoryName = '', color = '' },
	} = note;

	const handleDelete = () => {
		if (window.confirm('Seguro que desea eliminar?')) {
			dispatch(deleteNoteStorageAction(id));

			history.push('/home');
		}
	};

	return (
		<div>
			<div className="navbar navbar-light bg-light ">
				<div className="container">
					<span className="navbar-brand mb-0 h1">{title}</span>

					<div>
						<button
							className="btn btn-outline-danger me-2"
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
			</div>

			<div className="container">
				{categoryName && (
					<div className="mb-2">
						<span
							className="badge"
							style={{
								border: `1px solid ${color}`,
								color: color,
							}}
						>
							{categoryName}
						</span>
					</div>
				)}

				<div className="mt-3">{ReactHtmlParser(description)}</div>
			</div>
		</div>
	);
};
