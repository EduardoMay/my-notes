import React, { useEffect, useState } from 'react';

import { AddButton } from './../ui/AddButton';
import { getNotesFavorites } from './../../helpers/getNotesFavorites';
import { NoteItem } from '../notes/NoteItem';
import { useSelector } from 'react-redux';

export const FavoritiesScreen = () => {
	const { notes } = useSelector((state) => state.notes);
	const [notesList, setNotes] = useState([]);

	useEffect(() => {
		setNotes(getNotesFavorites());
	}, [notes]);

	return (
		<>
			<div className="navbar navbar-light bg-light">
				<span className="navbar-brand mb-0 h1">Favoritos</span>
			</div>

			{notesList.length > 0 ? (
				notesList.map((note) => (
					<NoteItem
						key={note.id}
						title={note.title}
						id={note.id}
						favorite={note.favorite}
					/>
				))
			) : (
				<div className="container">
					<p>No hay favoritos</p>
				</div>
			)}

			<AddButton />
		</>
	);
};
