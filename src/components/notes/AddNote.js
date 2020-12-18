import React from 'react';

export const AddNote = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<form className="container mt-4" onSubmit={handleSubmit}>
			<div className="form-group">
				<label htmlFor="titulo">Titulo</label>
				<input type="text" id="titulo" className="form-control" />
			</div>

			<div className="form-group">
				<label for="exampleFormControlTextarea1">
					Example textarea
				</label>
				<textarea
					className="form-control"
					id="exampleFormControlTextarea1"
					rows="3"
				></textarea>
			</div>

			<button type="submit" className="btn btn-outline-primary">
				<i className="fa fa-save"></i> Guardar
			</button>
		</form>
	);
};
