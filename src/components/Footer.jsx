import "./FooterStyles.css";
import React from "react";
import {
	FaFacebook,
	FaHome,
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
							<p>ZESPÓŁ SZKÓŁ ŁĄCZNOŚCI IM. OBROŃCÓW POCZTY POLSKIEJ W GDAŃSKU</p>
							<p>Podwale Staromiejskie 51/52, 80-845 Gdańsk</p>
						</div>
					</div>
					<div className='phone'>
						<h4>
							<FaPhone
								size={20}
								style={{ color: "#fff", marginRight: "2rem" }}
							/>
							+48 58 301 13 77
						</h4>
					</div>
					<div className='email'>
						<h4>
							<FaMailBulk
								size={20}
								style={{ color: "#fff", marginRight: "2rem" }}
							/>
							<a href="mailto:sekretariat@zsl.gda.pl">sekretariat@zsl.gda.pl</a>
						</h4>
					</div>
				</div>
				{/* Prawy footer */}

				<div className='right'>
					<h4>About us</h4>
									<div className='social'>
						<Link to='https://www.facebook.com/zslgdansk' target='blank'>
							<FaFacebook
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
