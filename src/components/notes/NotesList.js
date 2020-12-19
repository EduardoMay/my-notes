import React from 'react';
import { useSelector } from 'react-redux';
import { NoteItem } from './NoteItem';

export const NotesList = () => {
	const { notes } = useSelector((state) => state.notes);

	return (
		<div className="list-group">
			{notes.length <= 0 ? (
				<h5>
					<small>Sin notas</small>
				</h5>
			) : (
				notes.map((note, i) => <NoteItem key={i} title={note.title} />)
			)}
		</div>
	);
};
