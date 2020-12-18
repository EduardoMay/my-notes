import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/navbar.css';

export const Navbar = () => {
	return (
		<nav className="navbar fixed-bottom navbar-dark bg-dark">
			<NavLink className="nav-link" to="/home">
				<i className="fa fa-home"></i>
				Inicio
			</NavLink>
			<NavLink className="nav-link" to="favorities">
				<i className="fa fa-heart"></i>
				Favoritos
			</NavLink>
			<NavLink className="nav-link" to="/categories">
				<i className="fa fa-folder"></i>
				Categorias
			</NavLink>
		</nav>
	);
};
