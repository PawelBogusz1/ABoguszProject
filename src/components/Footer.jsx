import "./FooterStyles.css";
import React from "react";
import {
	FaGithub,
	FaHome,
	FaLinkedin,
	FaMailBulk,
	FaPhone,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer-container'>
				{/* Lewy Footer */}
				<div className='left'>
					<div className='location'>
						<FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
						<div>
							<p>Poznan City</p>
							<p>Poland</p>
						</div>
					</div>
					<div className='phone'>
						<h4>
							<FaPhone
								size={20}
								style={{ color: "#fff", marginRight: "2rem" }}
							/>
							+48 123 456 789
						</h4>
					</div>
					<div className='email'>
						<h4>
							<FaMailBulk
								size={20}
								style={{ color: "#fff", marginRight: "2rem" }}
							/>
							marcinzb@gazeta.pl
						</h4>
					</div>
				</div>
				{/* Prawy footer */}

				<div className='right'>
					<h4>About me</h4>
					<p>Please find below link to my GitHub reposytories and LinkedIn</p>
					<div className='social'>
						<Link to='https://github.com/MarcinZbor' target='blank'>
							<FaGithub
								size={30}
								style={{ color: "#fff", marginRight: "1rem" }}
							/>
						</Link>
						<Link
							to='https://www.linkedin.com/in/marcin-zboro%C5%84-aa9621141/'
							target='blank'>
							<FaLinkedin
								size={30}
								style={{ color: "#fff", marginRight: "1rem" }}
							/>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
