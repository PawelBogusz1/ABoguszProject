import "./WorkCardStyles.css";
import React from "react";
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
	return (
		<div className='project__card'>
			<img src={props.imgsrc} alt={props.alt} />
			<h2 className='project__title'>{props.title}</h2>
			<div className='project__details'>
				<p>
					{props.text}
				</p>
				<div className='project__btn'>
					<NavLink
						to={props.view}
						target='_blank'
						className='btn'
						rel='noopener noreferrer'>
						View
					</NavLink>
					
				</div>
			</div>
		</div>
	);
};

export default WorkCard;
