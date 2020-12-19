import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { getNoteById } from './../../helpers/getNoteById';

export const NoteScreen = () => {
	const { id } = useParams();

	const note = getNoteById(Number(id));

	if (!note) {
		return <Redirect to="/" />;
	}

	const { title, description } = note;

	return (
		<div>
			<div className="navbar navbar-light bg-light">
				<span className="navbar-brand mb-0 h1">{title}</span>
			</div>

			<div className="container mt-4">{description}</div>
		</div>
	);
};
