import "./AboutContentStyles.css";
import { Link } from "react-router-dom";
import React from "react";
import Photo1 from "../assets/marcin.png";


const AboutContent = () => {
	return (
		<div className='about'>
			<div className='left'>
				<h1>Who Am I?</h1>
				<p>
					I am a job seeker from Poland looking for opportunities as a front-end
					developer or React developer. I have completed a one-year course where
					I worked on numerous projects utilizing technologies such as HTML,
					CSS, JavaScript, SASS, React, React Router, React Redux, working with
					JavaScript libraries, and APIs. I am familiar with Git and GitHub, and
					have experience working with Figma and Trello. Interested parties,
					please feel free to reach out. I am open to junior positions or
					internships.
				</p>
				<Link to='/contact'>
					<button className='btn'>Contact </button>
				</Link>
			</div>

			<div className='right'>
				<div className='img-container'>
					<div className='img-stack top'>
						<img src={Photo1} alt='react1' className="img"/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutContent;
