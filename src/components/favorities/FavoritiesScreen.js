import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { getNotesFavorites } from './../../helpers/getNotesFavorites';

import { AddButton } from './../ui/AddButton';
import { NavTitle } from './../ui/NavTitle';

import { NoteItem } from '../notes/NoteItem';

export const FavoritiesScreen = () => {
	const { notes } = useSelector((state) => state.notes);
	const [notesList, setNotes] = useState([]);

	useEffect(() => {
		setNotes(getNotesFavorites());
	}, [notes]);

	return (
		<>
			<NavTitle title={'Favoritos'} />

			{notesList.length > 0 &&
				notesList.map((note) => <NoteItem key={note.id} {...note} />)}

			<AddButton />
		</>
	);
};
