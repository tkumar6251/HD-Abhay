import React, { useState } from 'react';
import { FaMobileAlt } from 'react-icons/fa';
import './NavBar.css';

const NavBar = () => {
	const [open, setOpen] = useState(false);

	return (
		<header className="navbar">
			<div className="container nav-inner">
				<a href="#hero" className="nav-logo" aria-label="Hi Dzign Home">
					<img src="/asset/log.png" alt="Hi Dzign" className="nav-logo-img" />
				</a>

				<button
					className="nav-toggle"
					aria-label="Toggle navigation"
					aria-expanded={open}
					onClick={() => setOpen(!open)}
				>
					<span />
					<span />
					<span />
				</button>

				<nav className={`nav-links ${open ? 'open' : ''}`}>
					<a href="#about" className="nav-link">About</a>
					<a href="#services" className="nav-link">Services</a>
					<a href="#portfolio" className="nav-link">Portfolio</a>
					<a href="#clients" className="nav-link">Clients</a>
					<a href="#contact" className="nav-btn">Contact</a>
					<a href="#download" className="nav-btn nav-btn-app">
						<FaMobileAlt /> Download App
					</a>
				</nav>
			</div>
		</header>
	);
};

export default NavBar;
