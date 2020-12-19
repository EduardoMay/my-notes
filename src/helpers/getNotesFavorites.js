export const getNotesFavorites = () => {
	const notes = JSON.parse(localStorage.notes);

	return notes.filter((note) => note.favorite === true);
};
