import React from 'react';
import { useSelector } from 'react-redux';
import { NoteItem } from './NoteItem';

export const NotesList = () => {
	const { notes } = useSelector((state) => state.notes);

	return (
		<ul className="list-group">
			{notes.length > 0 &&
				notes.map((note) => (
					<NoteItem
						key={note.id}
						title={note.title}
						id={note.id}
						favorite={note.favorite}
					/>
				))}
		</ul>
	);
};
