export const getNotesFavorites = () => {
	const notes = localStorage.notes ? JSON.parse(localStorage.notes) : [];

	return notes.filter((note) => note.favorite === true);
};
