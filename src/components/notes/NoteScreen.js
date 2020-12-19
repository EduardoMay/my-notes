import React, { useMemo } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { getNote } from '../../helpers/getNote';

export const NoteScreen = () => {
	const { title } = useParams();

	const note = useMemo(() => getNote(title), [title]);

	if (!note) {
		return <Redirect to="/" />;
	}

	const { description } = note;

	return (
		<div>
			<div className="navbar navbar-light bg-light">
				<span className="navbar-brand mb-0 h1">{title}</span>
			</div>

			<div className="container mt-4">{description}</div>
		</div>
	);
};
