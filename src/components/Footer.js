import React from 'react';
import './Footer.css';

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-background" style={{ backgroundImage: "url(/asset/bh.jpg)" }} />
			<div className="container footer-inner">
				<div className="footer-brand">
					<img src="/asset/log.png" alt="Hi Dezign" className="footer-logo" />
					<p className="footer-tagline">Designing spaces that welcome every story.</p>
				</div>

				<div className="footer-links">
					<div className="footer-col">
						<h4 className="footer-col-title">Social</h4>
						<a href="https://instagram.com/hidzign" target="_blank" rel="noreferrer" className="footer-link">Instagram</a>
						<a href="https://facebook.com" target="_blank" rel="noreferrer" className="footer-link">Facebook</a>
						<a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="footer-link">LinkedIn</a>
					</div>
					<div className="footer-col">
						<h4 className="footer-col-title">Partners</h4>
						<a href="#" className="footer-link">Architect Partners</a>
						<a href="#" className="footer-link">Vendors & Suppliers</a>
						<a href="#" className="footer-link">Builders & Developers</a>
					</div>
					<div className="footer-col">
						<h4 className="footer-col-title">Clients</h4>
						<a href="#" className="footer-link">Homes</a>
						<a href="#" className="footer-link">Offices</a>
						<a href="#" className="footer-link">Cafés & Retail</a>
					</div>
					<div className="footer-col">
						<h4 className="footer-col-title">Projects</h4>
						<a href="#portfolio" className="footer-link">Latest Projects</a>
						<a href="#portfolio" className="footer-link">Residential</a>
						<a href="#portfolio" className="footer-link">Commercial</a>
					</div>
				</div>
			</div>

			<div className="footer-bottom">
				<p className="footer-copy">© {new Date().getFullYear()} Hi Dzign. All rights reserved.</p>
				<p className="footer-credit">Created by <a href="https://www.kraftwagenksp.com" target="_blank" rel="noreferrer">KRAFTWAGEN KSP PRIVATE LIMITED</a></p>
			</div>
		</footer>
	);
};

export default Footer;
