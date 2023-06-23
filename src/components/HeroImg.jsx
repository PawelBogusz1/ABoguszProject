import "./HeroImgStyles.css";
import React from "react";
import { Link } from "react-router-dom";

const HeroImg = () => {
	return (
		<div className='hero'>
			<div className='mask'>
			</div>
			<div className='content'>
				<p>Hi, I'M A Full Stack Developer</p>
				<h1>React Developer</h1>
				<div>
					<Link to='/project' className='btn'>
						Project
					</Link>
					<Link to='/contact' className='btn btn-light'>
						Contact
					</Link>
				</div>
			</div>
		</div>
	);
};

export default HeroImg;
